/*
1: Main
*/

// Navbar

import { navbar } from "../../navbar/navbar.js";

// Main Page

import { mainPage } from "../../pages/mainPage/script.js";

// Experience Page

import { experiencePage } from "../../pages/experiencePage/script.js";


function addEventListeners(state) {
  if (state === 1) {
    navbar();
    
    mainPage();

    projectsButton();

    experiencePage();

    mailButton();
    
    // Fix Navbar at reload of the website: 
    window.scrollTo({
      top:100,
    });
  }
}

function projectsButton(){
  const projectButton = document.querySelector(".intro-button-a");
  projectButton.addEventListener("click", function(){
    window.scrollTo({
      top: 1950,
      behavior: "smooth",
    });
  }); 
}

function mailButton(){
  const mailButton = document.querySelector(".contactMe-button-a");
  mailButton.addEventListener("click", function(){
    window.location.href = "mailto:simi.coding@gmail.com";
  });
}

addEventListeners(1);
