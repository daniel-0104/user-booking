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

// document.addEventListener('DOMContentLoaded', () => {
//   const dropdownItems = document.querySelectorAll('.dropdown-item');
//   const activePage = localStorage.getItem('activePage');
//   if (activePage) {
//       const activeItem = document.querySelector(`.dropdown-item[href="${activePage}"]`);
//       if (activeItem) {
//           activeItem.classList.add('active');
//       }
//   }

//   dropdownItems.forEach(item => {
//       item.addEventListener('click', (event) => {
//           localStorage.setItem('activePage', item.getAttribute('href'));
//           dropdownItems.forEach(i => i.classList.remove('active'));
//           item.classList.add('active');
//       });
//   });
// });


// .................................................... search movie selected btn start .................................
document.getElementById('cinema-form').addEventListener('submit', function(event) {
  event.preventDefault();
  this.submit();
});

const customSelects = document.querySelectorAll(".custom-select");
const selectBtns = document.querySelectorAll(".select-button");
const selectedValues = document.querySelectorAll(".selected-value");
const optionsLists = document.querySelectorAll(".select-dropdown li");

selectBtns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    customSelects[btnIndex].classList.toggle("active");
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

    selectedValue.innerHTML = this.querySelector('label').textContent;
    customSelect.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
  });

  option.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      const customSelect = this.closest('.custom-select');
      const selectedValue = customSelect.querySelector('.selected-value');
      const btn = customSelect.querySelector('.select-button');

      selectedValue.innerHTML = this.querySelector('label').textContent;
      customSelect.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    }
  });
});
// .................................................... search movie selected btn end .................................


// ......................................................feature trailer swiper start... ............................
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    770: {
        slidesPerView: 2,
    },
    1400: {
        slidesPerView: 3,
    }
  }
});
// ......................................................feature trailer swiper end .................................


// ...................................................... promotion swiper start .................................
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  slidesPerView: 4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    562: {
      slidesPerView: 2,
    },
    720: {
        slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    },
    1300: {
        slidesPerView: 5,
    }
  }
});
// ..................................................... promotion swiper end ....................................


// ..................................................... cinema details start ....................................
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  navigation: {
    nextEl: ".button-next2",
    prevEl: ".button-prev2",
  },
});
// ..................................................... cinema details end ....................................
