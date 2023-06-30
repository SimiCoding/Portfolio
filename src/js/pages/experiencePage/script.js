import { experienceTextData } from "../../../data/textData/pages/experiencePage/data.js";

export function experiencePage() {
const elements = document.querySelectorAll(".exp-heading");
const expHeader = document.querySelector(".exp-Header");
const expText = document.querySelector(".exp-text");

elements.forEach(element => {
    
    element.addEventListener("click", function(){
        elements.forEach(element => {
            element.classList.remove("exp-selected");
        });
        element.classList.add("exp-selected");
        if(element.innerText==="Milrato"){
            expHeader.innerHTML= experienceTextData.milratoHeading;
            expText.innerHTML = experienceTextData.milratoText;
        } else if(element.innerText==="TimTube") {
            expHeader.innerHTML = experienceTextData.timTubeHeader;
            expText.innerHTML = experienceTextData.timTubeText;
        }
        
    });
});
}