function getCity() {
    let cityName = document.getElementById("cityName").value.trim();
    if (cityName === "")
        return "London";
    return cityName;
}

function buildUrl() {
    let cityName = getCity();
    return `http://api.weatherapi.com/v1/forecast.json?key=3a8bed08f35e4baf8e7185319230908&q=${cityName}&days=3&aqi=no&alerts=no&hour=14`;
}


function getData() {
    let url = buildUrl();
    fetch(url, {mode: 'cors'})
    .then(function(response) {
      console.log(response.json());
    });    
}

export {getData}