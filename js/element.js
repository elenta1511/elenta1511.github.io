const element = document.querySelector(".team__content");
createAccordeon(element);
function createAccordeon(element) {
  let lastActive;
  element.addEventListener("click", function (e) {
    if (e.target.classList.contains("team__description-name")) {
      if (lastActive) {
        lastActive.classList.remove("desc_active");
      }
      lastActive = e.target.parentNode;
      lastActive.classList.add("desc_active");
    }
    else if (!e.target.classList.contains("team__description-name")){
      lastActive.classList.remove("desc_active");
   };
  });
};



