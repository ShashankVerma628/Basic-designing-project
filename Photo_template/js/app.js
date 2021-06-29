// console.log("hi");

const toggleBtn  = document.querySelector(".hamburger");
toggleBtn.addEventListener("click",showNav);

function showNav(){
    document.querySelector(".navbar-container").classList.add("show");
}


const crossBtn = document.querySelector(".cross-btn");
crossBtn.addEventListener("click",hideNav);

function hideNav(){
    document.querySelector(".navbar-container").classList.remove("show");
}


const gridToggleBtn = document.getElementById("toggle-grid-btn");
gridToggleBtn.addEventListener("click",function(){
    document.querySelector(".image-grid").classList.toggle("gridGap");
});