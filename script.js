// href clicked active link start 
const currentHTMLPage = window.location.href;
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => link.classList.remove('active'));
navLinks.forEach(link => {
  if (currentHTMLPage.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});
// href clicked active link end

// ......................................................feature trailer swiper start ............................
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   loop: true,
//   grabCursor: true,
//   navigation: {
//     nextEl: ".button-next",
//     prevEl: ".button-prev",
//   },
//   breakpoints: {
//     0: {
//         slidesPerView: 1,
//     },
//     770: {
//         slidesPerView: 2,
//     },
//     1400: {
//         slidesPerView: 3,
//     }
//   }
// });
// ......................................................feature trailer swiper end ............................


const customSelects = document.querySelectorAll(".custom-select");
const selectBtns = document.querySelectorAll(".select-button");
const selectedValues = document.querySelectorAll(".selected-value");
const optionsLists = document.querySelectorAll(".select-dropdown li");

selectBtns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    // Toggle the active class on the specific custom select element
    customSelects[btnIndex].classList.toggle("active");
    // Update the aria-expanded attribute based on the current state
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
});

optionsLists.forEach((option) => {
  option.addEventListener("click", function (e) {
    const customSelect = this.closest('.custom-select');
    const selectedValue = customSelect.querySelector('.selected-value');
    const btn = customSelect.querySelector('.select-button');

    // Update the selected value text
    selectedValue.innerHTML = this.querySelector('label').textContent;
    // Remove the active class
    customSelect.classList.remove("active");
    // Update the aria-expanded attribute
    btn.setAttribute("aria-expanded", "false");
  });

  option.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      const customSelect = this.closest('.custom-select');
      const selectedValue = customSelect.querySelector('.selected-value');
      const btn = customSelect.querySelector('.select-button');

      // Update the selected value text
      selectedValue.innerHTML = this.querySelector('label').textContent;
      // Remove the active class
      customSelect.classList.remove("active");
      // Update the aria-expanded attribute
      btn.setAttribute("aria-expanded", "false");
    }
  });
});
