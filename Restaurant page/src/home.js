function createHome() {
    const mainDiv = document.querySelector(".mainDiv");
    mainDiv.innerHTML = "";

    const displayDiv = document.createElement("div");
    displayDiv.classList = "displayDivHome";
    displayDiv.innerHTML = "<p> The best sandwiches in town </p>"
        + "<p> Come and visit us at 20 Avenue Albert Einstein, 69100 Villeurbanne ! </p>";

    mainDiv.appendChild(displayDiv);
}

export { createHome };