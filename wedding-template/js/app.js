// console.log("hi");  

const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", showNav);

function showNav() {
    document.querySelector("nav").classList.toggle("display");
}

const rsvpBtn = document.getElementById("rsvp-btn");
rsvpBtn.addEventListener("click", openModal);
function openModal() {
    document.querySelector(".modal-overlay").classList.add("modal-overlay-show");
}

const goingBtn = document.querySelector(".going");
goingBtn.addEventListener("click", checkInput);
const cannotBtn = document.querySelector(".not");
cannotBtn.addEventListener("click", closeModal);

function closeModal() {
    document.querySelector(".modal-overlay").classList.remove("modal-overlay-show");
}

function checkInput() {
    let name = document.querySelector(".modal-container input").value;
    if (name == ""){
        alert("please enter a name");
    }
    else {
        document.querySelector(".modal-container input").value = "";
        closeModal();
    }
}