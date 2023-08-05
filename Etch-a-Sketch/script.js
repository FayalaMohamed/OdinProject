function generateGrid(size = 20) {
    let container = document.getElementById("gridContainer");

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.style.width = 20;
        div.style.height = 20;
        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.opacity = 1;
        })
        container.appendChild(div);
    }
}

function enableErase() {
    let button = document.getElementById("erase");
    button.addEventListener("click", () => {
        let divs = document.querySelectorAll('#gridContainer > div');
        divs.forEach((div) => {
            div.style.backgroundColor = 'white';
        })
    })
}

generateGrid(20);
enableErase();