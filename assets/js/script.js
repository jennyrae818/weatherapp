function getweather(e) {
  e.preventDefault()
  var mykey = "f701ab40838a5c7fb6fac49871633b85"
  var city = document.querySelector("#city").value
  var currweather= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=imperial`
  var dayone = {
    temp: document.querySelector('#temp1'),
    wind: document.querySelector('#wind1'),
    humidity: document.querySelector('#humidity1')
  }
  var daytwo = {
    temp: document.querySelector('#temp2'),
    wind: document.querySelector('#wind2'),
    humidity: document.querySelector('#humidity2')
  }
  var daythree = {
    temp: document.querySelector('#temp3'),
    wind: document.querySelector('#wind3'),
    humidity: document.querySelector('#humidity3')
  }
  var dayfour = {
    temp: document.querySelector('#temp4'),
    wind: document.querySelector('#wind4'),
    humidity: document.querySelector('#humidity4')
  }
  var dayfive = {
    temp: document.querySelector('#temp5'),
    wind: document.querySelector('#wind5'),
    humidity: document.querySelector('#humidity5')
  }


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
    var forecast= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${mykey}&units=imperial`
    fetch(forecast)
    .then (res2 => res2.json()) 
    .then (data2 => {
      console.log(data2)
      var uv = document.querySelector("#uv")
      uv.innerText = `UV Index: ${data2.daily[0].uvi}`
      dayone.temp.innerText = `Temp: ${data2.daily[1].temp.day}`
      dayone.wind.innerText = `Wind Speed: ${data2.daily[1].wind_speed}`
      dayone.humidity.innerText = `Humidity: ${data2.daily[1].humidity}`
      
      daytwo.temp.innerText = `Temp: ${data2.daily[2].temp.day}`
      daytwo.wind.innerText = `Wind Speed: ${data2.daily[2].wind_speed}`
      daytwo.humidity.innerText = `Humidity: ${data2.daily[2].humidity}`
      
      daythree.temp.innerText = `Temp: ${data2.daily[3].temp.day}`
      daythree.wind.innerText = `Wind Speed: ${data2.daily[3].wind_speed}`
      daythree.humidity.innerText = `Humidity: ${data2.daily[3].humidity}`
      
      dayfour.temp.innerText = `Temp: ${data2.daily[4].temp.day}`
      dayfour.wind.innerText = `Wind Speed: ${data2.daily[4].wind_speed}`
      dayfour.humidity.innerText = `Humidity: ${data2.daily[4].humidity}`
      
      dayfive.temp.innerText = `Temp: ${data2.daily[5].temp.day}`
      dayfive.wind.innerText = `Wind Speed: ${data2.daily[5].wind_speed}`
      dayfive.humidity.innerText = `Humidity: ${data2.daily[5].humidity}`
    })
  })
}


var searchbtn = document.querySelector(".btn")
searchbtn.addEventListener("click", getweather)

