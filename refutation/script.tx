
function toggleDisplay(element) {
    const content = document.querySelector(element);
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
   }
   
   const answerToggles = document.querySelectorAll(".answer-toggle");
   answerToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
    toggleDisplay(toggle.getAttribute("data-target"));
    });
   });

 