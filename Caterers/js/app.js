// console.log(document.body);
const btn = document.getElementById("dark");
// console.log(btn);

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    const nav = document.querySelector('.main-nav');
    nav.style.backgroundColor = "black";
    let dark_btn = document.getElementById('dark');
    dark_btn.style.backgroundColor = "white";
    dark_btn.style.color = "black";
    let links = document.querySelectorAll('.nav-link');
    Array.from(links).forEach(element => {
        element.style.color = 'white';

    });

});
function navdark() {
    elem.style.color = "white";
}

// =====================
// MultiPle Color Theme
// =====================

// console.log("hi");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn1 = document.getElementById("multi");
// console.log(btn);
btn1.addEventListener('click', function () {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += hex[randomNumber()];
    }
    // console.log(randomColor);

    document.body.style.backgroundColor = randomColor;
    document.body.style.color = "white";
    const nav1 = document.querySelector('.main-nav');
    nav1.style.backgroundColor = randomColor;
    let multi_btn = document.getElementById('multi');
    multi_btn.style.backgroundColor = "white";
    multi_btn.style.color = "black";
    let links1 = document.querySelectorAll('.nav-link');
    Array.from(links1).forEach(element => {
        element.style.color = 'white';

    });

});
function navmulti() {
    elem.style.color = "white";
}

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}



// ====================
// Auto Color Change
// ===================

const btn2 = document.getElementById("auto");
// console.log(btn);
btn2.addEventListener('click', function () {

    for (let b = 0; b < 17; b++) {
        for (let j = 0; j < 50; j++) {
            changeDelay(j);
        }
        function changeDelay(j) {
            setTimeout(function () {
                let hexColor2 = "#";
                for (let k = 0; k < 6; k++) {
                    hexColor2 += hex[randomNumber()];
                }
                document.body.style.backgroundColor = hexColor2;
                const nav2 = document.querySelector('.main-nav');
                nav2.style.backgroundColor = hexColor2;
                let auto_btn = document.getElementById('auto');
                auto_btn.style.backgroundColor = "white";
                auto_btn.style.color = "black";
                let links3 = document.querySelectorAll('.nav-link');
                Array.from(links3).forEach(element => {
                    element.style.color = 'white';

                });

                // console.log(hexColor);
            }, 2000 * j);
        }
    }
});