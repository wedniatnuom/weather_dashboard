var search = document.getElementById("search");
var form = document.getElementById('form-submit');
let mainCity = document.getElementById("mainCity");
let mainTemp = document.getElementById("mainTemp");
let mainWind = document.getElementById("mainWind");
let mainHumid = document.getElementById("mainHumid");
let mainUv = document.getElementById("mainUv");
let d1date = document.getElementById("d1date");
let d1image = document.getElementById("d1image");
let d1temp = document.getElementById("d1temp");
let d1wind = document.getElementById("d1wind");
let d1humid = document.getElementById("d1humid");
let d2date = document.getElementById("d2date");
let d2image = document.getElementById("d2image");
let d2temp = document.getElementById("d2temp");
let d2wind = document.getElementById("d2wind");
let d2humid = document.getElementById("d2humid");
let d3date = document.getElementById("d3date");
let d3image = document.getElementById("d3image");
let d3temp = document.getElementById("d3temp");
let d3wind = document.getElementById("d3wind");
let d3humid = document.getElementById("d3humid");
let d4date = document.getElementById("d4date");
let d4image = document.getElementById("d4image");
let d4temp = document.getElementById("d4temp");
let d4wind = document.getElementById("d4wind");
let d4humid = document.getElementById("d4humid");
let d5date = document.getElementById("d5date");
let d5image = document.getElementById("d5image");
let d5temp = document.getElementById("d5temp");
let d5wind = document.getElementById("d5wind");
let d5humid = document.getElementById("d5humid");
let btnContainer = document.getElementById("button-container");


form.addEventListener('submit', (event) => runClick(event))


async function runClick(event, cityName){
  event.stopPropagation();
  event.preventDefault();
    if(typeof(cityName) === 'undefined'){
      city = document.getElementById("cityName").value;
    }
    else city = cityName;
    
    let cityData = await findCity(city);
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityData[0].lat +"&lon=" + cityData[0].lon +"&units=imperial&exclude=minutely,hourly,alerts&appid=fe1835b3950936d6d47152d4217daee1"
  ).then(function(response) {
    return response.json()
  }).then(function(jsonData){
    let date = new Date("MM-DD-YYYY");
    mainCity.textContent = cityData[0].name + " " + moment().format('L');
    mainTemp.textContent = Math.round(jsonData.current.temp) + " \u00B0" + "F";
    mainWind.textContent = jsonData.current.wind_speed + " mph";
    mainHumid.textContent = jsonData.current.humidity + "%";
    mainUv.textContent = jsonData.current.uvi;

    d1date.textContent = moment().add(1, "d").format('L');
    d1image.src = "http://openweathermap.org/img/wn/" + jsonData.daily[1].weather[0].icon +"@2x.png";
    d1temp.textContent = "Temp: " + Math.round(jsonData.daily[1].temp.day) + " \u00B0" + "F";
    d1wind.textContent = "Wind: " + Math.round(jsonData.daily[1].wind_speed) + " mph";
    d1humid.textContent = "Humidity: " + jsonData.daily[1].humidity + "%";

    d2date.textContent = moment().add(2, "d").format('L');
    d2image.src = "http://openweathermap.org/img/wn/" + jsonData.daily[2].weather[0].icon +"@2x.png";
    d2temp.textContent = "Temp: " + Math.round(jsonData.daily[2].temp.day) + " \u00B0" + "F";
    d2wind.textContent = "Wind: " + Math.round(jsonData.daily[2].wind_speed) + " mph";
    d2humid.textContent = "Humidity: " + jsonData.daily[2].humidity + "%";

    d3date.textContent = moment().add(3, "d").format('L');
    d3image.src = "http://openweathermap.org/img/wn/" + jsonData.daily[3].weather[0].icon +"@2x.png";
    d3temp.textContent = "Temp: " + Math.round(jsonData.daily[3].temp.day) + " \u00B0" + "F";
    d3wind.textContent = "Wind: " + Math.round(jsonData.daily[3].wind_speed) + " mph";
    d3humid.textContent = "Humidity: " + jsonData.daily[3].humidity + "%";

    d4date.textContent = moment().add(4, "d").format('L');
    d4image.src = "http://openweathermap.org/img/wn/" + jsonData.daily[4].weather[0].icon +"@2x.png";
    d4temp.textContent = "Temp: " + Math.round(jsonData.daily[4].temp.day) + " \u00B0" + "F";
    d4wind.textContent = "Wind: " + Math.round(jsonData.daily[4].wind_speed) + " mph";
    d4humid.textContent = "Humidity: " + jsonData.daily[4].humidity + "%";

    d5date.textContent = moment().add(5, "d").format('L');
    d5image.src = "http://openweathermap.org/img/wn/" + jsonData.daily[5].weather[0].icon +"@2x.png";
    d5temp.textContent = "Temp: " + Math.round(jsonData.daily[5].temp.day) + " \u00B0" + "F";
    d5wind.textContent = "Wind: " + Math.round(jsonData.daily[5].wind_speed) + " mph";
    d5humid.textContent = "Humidity: " + jsonData.daily[5].humidity + "%";
    
    if(typeof(cityName) === 'undefined'){
      let btn = document.createElement('button');
      btn.textContent = cityData[0].name;
      btn.id = cityData[0].name;
      btn.classList.add("col-12")
      btn.addEventListener('click', (event) => runClick(event, cityData[0].name));
      btnContainer.prepend(btn);
    }
    document.getElementById("cityName").value = "";
    if(jsonData.current.uvi <= 2) {
      mainUv.classList.add("bg-success")
    } else if(jsonData.current.uvi <= 6) {
      mainUv.classList.add("bg-warning")
    } else if(jsonData.current.uvi > 6) {
      mainUv.classList.add("bg-danger")
    }
      


  });
  
  

  
}

async function findCity(city) {
  let cityResponse;
  await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + ",1&limit=1&appid=fe1835b3950936d6d47152d4217daee1")
  .then((response) => {
    return response.json();})
  .then(data => {
    cityResponse = data;
  });
  return cityResponse;  
}



"http://api.openweathermap.org/geo/1.0/direct?q=Orem,1&limit=1&appid=fe1835b3950936d6d47152d4217daee1"



// " + ValueFromFindCity + "