(()=>{"use strict";(async()=>{await function(){let e=`http://api.weatherapi.com/v1/forecast.json?key=3a8bed08f35e4baf8e7185319230908&q=${function(){let e=document.getElementById("cityName").value.trim();return""===e?"London":e}()}&days=3&aqi=no&alerts=no&hour=14`;fetch(e,{mode:"cors"}).then((function(e){console.log(e.json())}))}()})()})();