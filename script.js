// href clicked active link start 
document.addEventListener('DOMContentLoaded', () => {
  const currentHTMLPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentHTMLPage === linkPath) {
      link.classList.add('active');
    }
  });
});
// href clicked active link end


// .................................................... search movie selected btn start .................................
document.addEventListener('DOMContentLoaded', () => {
  const cinemaForm = document.getElementById('cinema-form');
  if (cinemaForm) {
    cinemaForm.addEventListener('submit', function(event) {
      event.preventDefault();
      this.submit();
    });
  }
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
    delay: 3000,
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
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    770: {
        slidesPerView: 2,
    },
    1200: {
        slidesPerView: 3,
    }
  },
  simulateTouch: false,
  allowTouchMove: false,
});
// ..................................................... cinema details end ....................................


//................................................. footer dropdown start ...........................................
$(document).ready(function(){
  $('#toggle-btn').click(function(){
    $('#drop-items').toggle(500);
    $('#down').toggle();
    $('#up').toggle();
  });
  $('#drop-items').hide();
});
// ................................................... footer dropdown end ........................................


//....................................... ......category active link start .........................................
document.addEventListener('DOMContentLoaded',function(){
  const categoryLinks = document.querySelectorAll('.category-link');
  const currentHTMLPage = window.location.pathname;
  categoryLinks.forEach(link => link.classList.remove('active'));
  
  categoryLinks.forEach(link => {
    if (currentHTMLPage.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});
//................................................category active link end..... .........................................


//................................................ movie sorting start ..... .........................................
const sortingSelect = document.querySelector(".sorting-content");
const sortingBtn = document.querySelector(".sorting-select-btn");
const sortingValue = document.querySelector(".sorting-selected-value");
const sortingOptions = document.querySelectorAll(".sorting-dropdown li");

document.addEventListener('DOMContentLoaded', () => {
  sortingOptions.forEach((option) => {
    const label = option.querySelector('label');
    if (label.textContent === sortingValue.textContent) {
      option.querySelector('input').checked = true;
    }
  });
});

if(sortingBtn){
  sortingBtn.addEventListener('click', (event) => {
    event.preventDefault();
    sortingSelect.classList.toggle("active");
    sortingBtn.setAttribute(
      "aria-expanded",
      sortingBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
};

sortingOptions.forEach((option) => {
  option.addEventListener("click", function () {
    sortingValue.innerHTML = this.querySelector('label').textContent;
    sortingSelect.classList.remove("active");
    sortingBtn.setAttribute("aria-expanded", "false");

    sortingOptions.forEach(opt => opt.querySelector('input').checked = false);
    this.querySelector('input').checked = true;
  });
});
//................................................ movie sorting end..... .........................................


//................................................ movie cell category start .......................................
let cellContent = document.querySelectorAll('#movie-cell-category li a');
const movieList = document.getElementById('movie-list-show');
const movieCell = document.getElementById('movie-cell-show');

function detailsClick(event){
  event.preventDefault(); 
  const clickedElement = event.target.tagName === 'I' ? event.target.parentElement : event.target;
  const elementClass = clickedElement.dataset.elementClass;

  if(clickedElement.classList.contains('cell-active')){
    return;
  }
  for(let d of cellContent){
    d.classList.remove('cell-active');
  }
  clickedElement.classList.add('cell-active');

  movieList.style.display = elementClass === 'movieList' ? 'block' : 'none';
  movieCell.style.display = elementClass === 'movieCell' ? 'flex' : 'none';
}

cellContent.forEach(item => {
  item.addEventListener('click',detailsClick);
});
//................................................ movie cell category end .......................................


// ...................................................... other movies swiper start .................................
var swiper = new Swiper(".mySwiper4", {
  spaceBetween: 30,
  slidesPerView: 4,
  freeMode: true,
  hashNavigation: {
    watchState: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  navigation: {
    nextEl: ".button-next4",
    prevEl: ".button-prev4",
  },
  autoplay: {
    delay: 6000,
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
// ..................................................... other movies swiper end ....................................


// ..................................................... showtime select date start ....................................
document.addEventListener('DOMContentLoaded',function(){
  const selectDates = document.querySelectorAll('.js-select-date');
  const firstDateButton = document.getElementById('first-date-button');

  if (firstDateButton) {
    firstDateButton.classList.add('js-select-active');
  }

  selectDates.forEach(function(selectDate){
    selectDate.addEventListener('click',function(){
      if(selectDate.classList.contains('js-select-active')){
        selectDate.classList.remove('js-select-active');
      }
      else{
        selectDates.forEach(function(date){
          date.classList.remove('js-select-active');
        });
      }
      selectDate.classList.add('js-select-active');
    });
  });
});
// ..................................................... showtime select date end .................................... 


// ....................................... showtime select cinema and time dropdown start ................................ 
$(document).ready(function(){
  $('.ct-toggle-btn').click(function(){
    console.log('click')
    $(this).closest('.cinema-section').find('.select-time').slideToggle(500);
    $(this).find('.cinema-down').toggle();
    $(this).find('.cinema-up').toggle();
  });
});
// ....................................... showtime select cinema and time dropdown end .................................... 