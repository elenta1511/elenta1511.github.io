const el = document.querySelector(".accordion__list");
createAccordeon(el);
function createAccordeon(el) {
  let lastActive;
  el.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("accordion__form-title")) {
      if (lastActive) {
        lastActive.classList.remove("accordion_active");
      }
      lastActive = e.target.parentNode;
      lastActive.classList.add("accordion_active");
    }
    else if (!e.target.classList.contains("accordion__form-title")) {
      lastActive.classList.remove("accordion_active");
   };
  });
};



