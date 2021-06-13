// console.log("this is file");
// Navbar toggle

const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.querySelector(".sidebar");
// cross btn
const crossBtn = document.getElementById("cross-btn");

toggleBtn.addEventListener("click",showSidebar);

function showSidebar(){
    // console.log("toggle btn fired");
    // accessing aside with sidebar class
    sidebar.classList.toggle("show-sidebar");
}
// function for hiding sidebar
crossBtn.addEventListener("click",hideSidebar);
function hideSidebar(){
    sidebar.classList.remove("show-sidebar");
}
// onclick away we want to hide the sidebar
// function hideSidebar(){
//     sidebar.classList.remove("show-sidebar");
// }

// Jeans dropdown

document.getElementById("jeans").addEventListener("click",showDropdown);
function showDropdown(){
    document.querySelector(".jeans-category").classList.toggle("show-jeans-category");
}

// newsletter Starts
const newsletter = document.getElementById("newsletter");
newsletter.addEventListener("click",function(){
    // console.log("newsletter Clicked");
    document.querySelector(".modal-overlay").classList.add("open-modal");
});
document.getElementById("newsletter-cross-btn").addEventListener("click",function(){
    document.querySelector(".modal-overlay").classList.remove("open-modal");
});
document.getElementById("newsletter-submit-button").addEventListener("click",function(){
    document.querySelector(".modal-overlay").classList.remove("open-modal");
});
// Newsletter Ends

// Items

const items = [
    {
        id:1,
        img: 'img/jeans1.jpg',
        item: 'Ripped Jeans',
        price: '$24.99'
    }
]
