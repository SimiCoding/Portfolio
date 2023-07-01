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

    experiencePage();

    // Fix Navbar at reload of the website: 
    window.scrollTo({
      top:100,
    });
  }
}

addEventListeners(1);
