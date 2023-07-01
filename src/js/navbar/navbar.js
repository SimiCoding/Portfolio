export function navbar () {
    let currentState = "nav-topReached";
    const navbar = document.querySelector(".navbar");

    function isScrollUp(currentY, previousY) {
        // Get the difference between the current and previous scroll positions.
        var scrollDifference = currentY - previousY;
      
        // If the scroll difference is positive, the user has scrolled up.
        if (scrollDifference > 0) {
          return true;
        }
      
        // Otherwise, the user has scrolled down.
        return false;
      }
      function onScroll() {
        // Get the current scroll position.
        var currentY = window.scrollY;
      
        // Get the previous scroll position.
        var previousY = localStorage.getItem("previousY");
      
        // If the previous scroll position is not set, set it to the current scroll position.
        if (!previousY) {
          localStorage.setItem("previousY", currentY);
        }
      
        // Call the `isScrollUp` function.
        var isScrollToBottom = isScrollUp(currentY, previousY);
      
        // If the user has scrolled up, do something.
        if(isScrollToBottom) {
          // Do something.
          // Down
      
          if(currentState!="nav-scrollDown"){
            navbar.classList.remove("nav-scrollUp");
            navbar.classList.remove("nav-topReached");
            navbar.classList.add("nav-shadow");
            navbar.classList.add("nav-scrollDown");

            currentState = "nav-scrollDown";
          }
        } else {
            // Do something.
            // Up
            
            if(currentState!="nav-scrollUp") {
navbar.classList.remove("nav-scrollDown");
navbar.classList.add("nav-scrollUp");
if(window.scrollY!=0){
  navbar.classList.add("nav-shadow");
} else {
  navbar.classList.remove("nav-shadow");
  navbar.classList.add("nav-topReached");
}
currentState="nav-scrollUp";
            }
            if(window.scrollY === 0){
              navbar.classList.remove("nav-shadow");
              navbar.classList.add("nav-topReached");
            }
        }
      
        // Set the previous scroll position to the current scroll position.
        localStorage.setItem("previousY", currentY);
      }
    
      window.addEventListener("scroll", onScroll);

      const aboutMe = document.querySelector(".nav-amp");

      aboutMe.addEventListener("click", function(){
window.scrollTo({
  top: 650,
  behavior: "smooth",
});




      });
      
const experience = document.querySelector(".nav-exp");

experience.addEventListener("click", function(){
window.scrollTo({
  top: 1300,
  behavior: "smooth",
});
});
}


