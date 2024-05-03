function toggleDisplay(element) {
    const content = document.querySelector(element);
    if (content.style.display === "block") {
      content.style.display = "none";
      document.body.classList.remove("show-answer");
    } else {
      content.style.display = "block";
      document.body.classList.add("show-answer");
    }
   }
   
   const answerToggles = document.querySelectorAll(".answer-toggle");
   answerToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggleDisplay(toggle.getAttribute("data-target"));
    });
   });