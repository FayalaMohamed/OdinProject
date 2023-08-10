import { getData } from "./api";


function createHeader() {
    const rootDiv = document.getElementById("content");

    const header = document.createElement("header");

    const title = document.createElement("h1");
    title.className = "title";
    title.innerText = "Weather app"
    header.appendChild(title)

    const form = document.createElement("form");
    const nameInput = document.createElement('input');
    nameInput.setAttribute("type", 'text');
    nameInput.id = "cityName";
    nameInput.placeholder = "Enter city here...";
    let searchButton = document.createElement('input');
    searchButton.type = 'submit';
    searchButton.value = "Search City!";
    console.log(`button value is ${searchButton}`);
    form.append(nameInput, searchButton);
    header.appendChild(form);

    const cityDisplay = document.createElement('div');
    cityDisplay.innerHTML += `<p id="currentCity">Weather in :</p>`;
    header.appendChild(cityDisplay);

    rootDiv.appendChild(header);
}

function createCentralElements() {
    const rootDiv = document.getElementById("content");


    const centralDiv = document.createElement("div");
    centralDiv.classList.add("centralDiv");

    for (let i = 0; i < 3; i++) {
        let dayDataDisplay = document.createElement('div');
        dayDataDisplay.classList.add("dayDataDisplay");
        dayDataDisplay.classList.add(i);

        dayDataDisplay.innerHTML = `
                    <h1 id="dayDate${i}"> </h1>
                    <h1 id="condition${i}"> </h1>
                    <h2 id="avgTemp${i}"> </h2> 
                    <h3 id="maxTemp${i}"> </h3> 
                    <h3 id="sunrise${i}"> </h3>
                    <h3 id="sunset${i}"> </h3>      
        `;

        centralDiv.appendChild(dayDataDisplay);

    }


    rootDiv.appendChild(centralDiv);
}

function createFooter() {
    const rootDiv = document.getElementById("content");

    const footer = document.createElement("footer");

    const copyrights = document.createElement("h5");
    copyrights.className = "copyrights";
    copyrights.innerText = "Copyrights Mohamed FAYALA"
    footer.appendChild(copyrights)

    rootDiv.appendChild(footer);
}

async function updateDOM() {
    let currentCity = document.querySelector('#currentCity');
    try {
        const data = await getData();
        currentCity.innerText = "Weather in " + data.location.name + " : ";
        console.log(data);
        for (let i = 0; i < 3; i++){
            let dayDate = document.getElementById(`dayDate${i}`);
            let condition = document.getElementById(`condition${i}`);
            let avgTemp = document.getElementById(`avgTemp${i}`);
            let maxTemp = document.getElementById(`maxTemp${i}`);
            let sunrise = document.getElementById(`sunrise${i}`);
            let sunset = document.getElementById(`sunset${i}`);

            dayDate.innerText = data.forecast.forecastday[i].date;
            condition.innerText = data.forecast.forecastday[i].day.condition.text;
            avgTemp.innerText = "Average temperature : " + data.forecast.forecastday[i].day.avgtemp_c +"°C";
            maxTemp.innerText = "Maximum temperature : " +  data.forecast.forecastday[i].day.maxtemp_c + "°C";
            sunrise.innerText = "Sunrise : " + data.forecast.forecastday[i].astro.sunrise;
            sunset.innerText = "Sunset : " + data.forecast.forecastday[i].astro.sunset;
        }

    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

async function createWebsite() {
    createHeader();
    createCentralElements();
    createFooter();
    await updateDOM();

    const submitBtn = document.querySelector('input[type="submit"]');
    submitBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        await updateDOM();
    });

}


export { createWebsite }

