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
