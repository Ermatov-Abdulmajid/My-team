document.addEventListener("DOMContentLoaded", function () {
  // Header
  const elbutton = document.querySelector(".site-header__button");
  const elbutton2 = document.querySelector(".site-header__close-button");
  const elsiteHeader = document.querySelector(".site-header");

  if (elbutton) {
    elbutton.addEventListener("click", function () {
      elsiteHeader.classList.add("site-header--open");
    });
  }

  elbutton2.addEventListener("click", function () {
    elsiteHeader.classList.remove("site-header--open");
  });

  const directorItems = document.querySelectorAll(".directors__item");

  directorItems.forEach((item) => {
    const btnOpen = item.querySelector("#btn-open");
    const btnClose = item.querySelector("#btn-close");
    const innerItems = item.querySelectorAll(".directors__item-inner");

    if (btnOpen && btnClose && innerItems.length === 2) {
      const [inner1, inner2] = innerItems;

      const toggleVisibility = () => {
        inner1.classList.toggle("hidden");
        inner1.classList.toggle("visible");
        inner2.classList.toggle("hidden");
        inner2.classList.toggle("visible");
      };

      btnOpen.addEventListener("click", toggleVisibility);
      btnClose.addEventListener("click", toggleVisibility);
    } else {
      console.error(
        "Elements not found or incorrect number of directors__item-inner elements."
      );
      if (!btnOpen)
        console.error(
          "Element with ID 'btn-open' not found in directors__item."
        );
      if (!btnClose)
        console.error(
          "Element with ID 'btn-close' not found in directors__item."
        );
      if (innerItems.length !== 2)
        console.error(
          "Incorrect number of directors__item-inner elements found in directors__item."
        );
    }
  });

  // Email
  const elEmail = document.querySelector(".contact__input-email");
  const elErrorMessage = document.querySelector(".contact__error");

  elEmail.addEventListener("click", function () {
    elErrorMessage.classList.add("contact__error--open");
  });
});
