var search = document.getElementById("search");



function runClick(cityName){
    const city = document.getElementById("cityName").value;
    findCity(city);
    console.log(city);


//     fetch("https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly,alerts&appid=fe1835b3950936d6d47152d4217daee1"
//   ).then(function(response) {
//     console.log(response);
//   });
}

function findCity(city) {
    console.log(city);
       fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + ",1&limit=1&appid=fe1835b3950936d6d47152d4217daee1")
       .then((response) => {
        console.log(response);
        return response.json();
        
    })
       .then(data => console.log(data));

       
   
}

"http://api.openweathermap.org/geo/1.0/direct?q=Orem,1&limit=1&appid=fe1835b3950936d6d47152d4217daee1"



// " + ValueFromFindCity + "