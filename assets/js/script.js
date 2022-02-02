function getweather(e) {
  e.preventDefault()
  var mykey = "f701ab40838a5c7fb6fac49871633b85"
  var city = document.querySelector("#city").value
  var currweather= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=imperial`
  

  fetch(currweather)
  .then (res => res.json()) 
  .then (data => {
    console.log(data)
    var temp = document.querySelector("#temp")
    temp.innerText = `Current Temp: ${data.main.temp}`
    var wind = document.querySelector("#wind")
    wind.innerText = `Wind Speed: ${data.wind.speed}`
    var humidity = document.querySelector("#humidity")
    humidity.innerText = `Humidity: ${data.main.humidity}`
    var lon = data.coord.lon
    var lat = data.coord.lat
    var forecast= `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${mykey}&units=imperial`
    fetch(forecast)
    .then (res2 => res2.json()) 
    .then (data2 => {
      console.log(data2)
      var uv = document.querySelector("#uv")
      uv.innerText = `UV Index: ${data2.daily[0].uvi}`
    })
  })
}


var searchbtn = document.querySelector(".btn")
searchbtn.addEventListener("click", getweather)


function getfutureweather(e) {
  e.preventDefault()
  var mykey = "f701ab40838a5c7fb6fac49871633b85"
  var city = document.querySelector("#city").value
  var futureweather= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=imperial`

fetch(futureweather)
.then (res => res.json()) 
.then (data => {
    console.log(data)
    var temp = document.querySelector("#temp2")
    temp.innerText = `Current Temp: ${data.daily[1].temp.day}`
    var wind = document.querySelector("#wind2")
    wind.innerText = `Wind Speed: ${data.daily[1].wind_speed}`
    var humidity = document.querySelector("#humidity2")
    humidity.innerText = `Humidity: ${data.daily[1].humidity}`
    var lon = data.coord.lon
    var lat = data.coord.lat
    var forecast= `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${mykey}&units=imperial`
  fetch(forecast)
  .then (res2 => res2.json()) 
  .then (data2 => {
    console.log(data2)
    var uv = document.querySelector("#uv2")
    uv.innerText = `UV Index: ${data2.daily[1].uvi}`
  })
})
}



var searchbtn2 = document.querySelector(".btn")
searchbtn2.addEventListener("click", getfutureweather)



