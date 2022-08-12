var search = document.getElementById("search");



async function runClick(cityName){
    const city = document.getElementById("cityName").value;
    let cityData = await findCity(city);
    console.log('city data');
    console.log(cityData);


    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityData[0].lat +"&lon=" + cityData[0].lon +"&exclude=minutely,hourly,alerts&appid=fe1835b3950936d6d47152d4217daee1"
  ).then(function(response) {
    return response.json()
  }).then(function(jsonData){
    console.log(jsonData);
    
  })
}

async function findCity(city) {
  let cityResponse;
  await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + ",1&limit=1&appid=fe1835b3950936d6d47152d4217daee1")
  .then((response) => {
    return response.json();})
  .then(data => {
    cityResponse = data;
  });
  return cityResponse;  
}

"http://api.openweathermap.org/geo/1.0/direct?q=Orem,1&limit=1&appid=fe1835b3950936d6d47152d4217daee1"



// " + ValueFromFindCity + "