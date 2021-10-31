// console.log("this is file");
// Navbar toggle

const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.querySelector(".sidebar");
// cross btn
const crossBtn = document.getElementById("cross-btn");

toggleBtn.addEventListener("click", showSidebar);

function showSidebar() {
    // console.log("toggle btn fired");
    // accessing aside with sidebar class
    sidebar.classList.toggle("show-sidebar");
}
// function for hiding sidebar
crossBtn.addEventListener("click", hideSidebar);
function hideSidebar() {
    sidebar.classList.remove("show-sidebar");
}
// onclick away we want to hide the sidebar
// function hideSidebar(){
//     sidebar.classList.remove("show-sidebar");
// }

// Jeans dropdown

document.getElementById("jeans").addEventListener("click", showDropdown);
function showDropdown() {
    document.querySelector(".jeans-category").classList.toggle("show-jeans-category");
}

// newsletter Starts
const newsletter = document.getElementById("newsletter");
newsletter.addEventListener("click", function () {
    // console.log("newsletter Clicked");
    document.querySelector(".modal-overlay").classList.add("open-modal");
});
document.getElementById("newsletter-cross-btn").addEventListener("click", function () {
    document.querySelector(".modal-overlay").classList.remove("open-modal");
});
document.getElementById("newsletter-submit-button").addEventListener("click", function () {
    document.querySelector(".modal-overlay").classList.remove("open-modal");
});
// Newsletter Ends

// Items 
// loading the jeans menu dynamically
const items = [
    {
        id: 1,
        img: 'img/jeans1.jpg',
        item: 'Washed Skinny Jeans',
        price: '$14.99'
    },
    {
        id: 2,
        img: 'img/jeans-1.jpg',
        item: 'Ripped Jeans',
        price: '$24.99'
    },
    {
        id: 3,
        img: 'img/jeans-2.jpg',
        item: 'Vintage Skinny Jeans',
        price: '$30.99'
    },
    {
        id: 4,
        img: 'img/jeans-3.jpg',
        item: 'Skinny Ripped Jeans',
        price: '$20.99'
    },
    {
        id: 5,
        img: 'img/jeans-4.jpg',
        item: 'Mega Ripped Jeans',
        price: '$19.99'
    },
    {
        id: 6,
        img: 'img/jeans-5.jpg',
        item: 'Washed Skinny Jeans',
        price: '$25.78'
    },
    {
        id: 7,
        img: 'img/jeans-6.jpg',
        item: 'Ripped Jeans',
        price: '$24.99'
    },
    {
        id: 8,
        img: 'img/jeans-7.jpg',
        item: 'Ripped Jeans',
        price: '$24.99'
    }
]

let contents = document.querySelector(".contents");
window.addEventListener("DOMContentLoaded",showContent);

function showContent(){
    let output = "";
    for(let i in items){
        // console.log(items[i].img);
        output += `<div class="content">
                    <img src="${items[i].img}">
                    <p>${items[i].item}</p>
                    <p class="price">${items[i].price}</p>
                </div>`;
    }
    contents.innerHTML = output;
}