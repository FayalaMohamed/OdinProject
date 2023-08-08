const items = [
    [
        "Kebab",
        "5.5",
        "kebab.jpg"
    ],
    [
        "Menu Kebab",
        "7",
        "kebab.jpg"
    ],
    [
        "Beef Burger",
        "5",
        "burger.jpg"
    ],
    [
        "Menu Beef Burger",
        "6.5",
        "burger.jpg"
    ],
    [
        "Tacos tenders algérienne",
        "6",
        "tacos.jpg"
    ],
    [
        "Menu Tacos tenders algérienne",
        "7.5",
        "tacos.jpg"
    ]
];

function createMenu() {
    const mainDiv = document.querySelector(".mainDiv");
    mainDiv.innerHTML = "";

    const displayDiv = document.createElement("div");
    displayDiv.classList = "displayDivMenu";

    items.forEach((item) => {
        let divItem = document.createElement('div');
        divItem.classList = 'menu-item';

        // Create a new paragraph element and set its text content
        let paragraph = document.createElement('p');
        paragraph.textContent = `${item[0]} - ${item[1]}€`;

        // Create a new image element and set its attributes
        if (item[2]) {
            let img = document.createElement('img');
            img.src = `../images/${item[2]}`;
            img.alt = item[0];
            divItem.appendChild(img);
        }

        // Append paragraph and img elements to divItem
        divItem.appendChild(paragraph);

        displayDiv.appendChild(divItem);
    });

    mainDiv.appendChild(displayDiv);
}

export { createMenu };