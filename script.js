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

//...................................................... return to top scroll start ........................................
document.addEventListener('scroll', function(){
  const returnToTopBtn = document.getElementById('return-to-top');
  const scrollTop = document.documentElement.scrollTop;
  
  if (scrollTop > 1400){ 
    returnToTopBtn.style.display = 'block';
  }else{
    returnToTopBtn.style.display = 'none';
  }
});
//...................................................... return to top scroll end ........................................


// .................................................... search movie selected btn start .................................
document.addEventListener('DOMContentLoaded', () => {
  const cinemaForm = document.getElementById('cinema-form');
  if (cinemaForm) {
    cinemaForm.addEventListener('submit', function(event) {
      event.preventDefault();
      this.submit();
    });
  }

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
});
// .................................................... search movie selected btn end .................................


// ......................................................feature trailer swiper start... ............................
document.addEventListener('DOMContentLoaded',function(){
  var swiper;

  function initializeSwiper(){
    if (window.innerWidth > 360){
      swiper = new Swiper(".mySwiper", {
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
    }else{
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        grabCursor: true,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded',function(){
    function checkSwiperWidth(){
      if(window.innerWidth <= 360){
        document.querySelector('.mySwiper').classList.add('hide-swiper');
      }else{
        document.querySelector('.mySwiper').classList.remove('hide-swiper');
      }
    }
    checkSwiperWidth();
    window.addEventListener('resize',checkSwiperWidth);
  });

  initializeSwiper();
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
    300: {
      slidesPerView: 2,
    },
    519: {
      slidesPerView: 2,
    },
    694: {
        slidesPerView: 3,
    },
    896: {
      slidesPerView: 4,
    },
    1160: {
      slidesPerView: 5,
    },
    1350: {
        slidesPerView: 6,
    }
  }
});
// ..................................................... promotion swiper end ....................................


// ..................................................... cinema details start ....................................
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
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
  }
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
  const categoryContent = document.querySelector('#category-content');
  const genrePh = document.querySelector('.genre-scroll-container');
  const categoryLinks = document.querySelectorAll('.category-link');
  const currentHTMLPage = window.location.pathname;
  categoryLinks.forEach(link => link.classList.remove('active'));

  categoryLinks.forEach(link => {
    if (currentHTMLPage.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }

    link.addEventListener('click',function(){
      sessionStorage.setItem('genre-scroll-y', categoryContent.scrollTop);
      sessionStorage.setItem('genre-scroll-x', genrePh.scrollLeft);
    });
  });

  const genreScrollY = sessionStorage.getItem('genre-scroll-y');
  const genreScrollX = sessionStorage.getItem('genre-scroll-x');
  document.addEventListener('DOMContentLoaded',function(){
    if(genreScrollY !== null){
      categoryContent.scrollTop = parseInt(genreScrollY,10);
    }

    if(genreScrollX !== null){
      genrePh.scrollLeft = parseInt(genreScrollX, 10);
    }
  });
});

// document.addEventListener('DOMContentLoaded',function(){
//   const categoryContent = document.querySelector('#category-content');
//   const genrePh = document.querySelector('.genre-scroll-container');
//   const categoryLinks = document.querySelectorAll('.category-link');
//   const currentHTMLPage = window.location.pathname;
//   categoryLinks.forEach(link => link.classList.remove('active'));
  
//   categoryLinks.forEach(link => {
//     let linkHref = link.getAttribute('href');

//     if(linkHref.startsWith('http')) {
//         const url = new URL(linkHref);
//         linkHref = url.pathname;
//     }

//     if(currentHTMLPage === linkHref) {
//         link.classList.add('active');
//     }

//     link.addEventListener('click', function () {
//       sessionStorage.setItem('genre-scroll-y', categoryContent.scrollTop);
//       sessionStorage.setItem('genre-scroll-x', genrePh.scrollLeft);
//     });
//   });

//   const genreScrollY = sessionStorage.getItem('genre-scroll-y');
//   const genreScrollX = sessionStorage.getItem('genre-scroll-x');
//   document.addEventListener('DOMContentLoaded',function(){
//     if(genreScrollY !== null){
//       categoryContent.scrollTop = parseInt(genreScrollY,10);
//     }
  
//     if(genreScrollX !== null){
//       genrePh.scrollLeft = parseInt(genreScrollX, 10);
//     }
//   });
// });
//................................................category active link end..... .........................................


//............................................... genre mobile scroll start ............................................
document.addEventListener('DOMContentLoaded',function(){
  const genreScrollContainer = document.querySelector('.genre-scroll-container');

  let isDown = false;
  let startX;
  let scrollLeft;

  if(genreScrollContainer){
    genreScrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - genreScrollContainer.offsetLeft;
      scrollLeft = genreScrollContainer.scrollLeft;
    });
  
    genreScrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
    });
  
    genreScrollContainer.addEventListener('mouseup', () => {
      isDown = false;
    });
  
    genreScrollContainer.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - genreScrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      genreScrollContainer.scrollLeft = scrollLeft - walk;
    });
  }
});
//............................................... genre mobile scroll end ............................................


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

  localStorage.setItem('selectedElementClass',elementClass);
  
  movieList.style.display = elementClass === 'movieList' ? 'block' : 'none';
  movieCell.style.display = elementClass === 'movieCell' ? 'flex' : 'none';
}

function restorState(){
  const selectedElementClass = localStorage.getItem('selectedElementClass');
  if(selectedElementClass){
    cellContent.forEach(item => {
      if(item.dataset.elementClass === selectedElementClass){
        item.classList.add('cell-active');

        movieList.style.display = selectedElementClass === 'movieList' ? 'block' : 'none';
        movieCell.style.display = selectedElementClass === 'movieCell' ? 'flex' : 'none';
      }else{ 
        item.classList.remove('cell-active');
      }
    });
  }
}

cellContent.forEach(item => {
  item.addEventListener('click',detailsClick);
});

document.addEventListener('DOMContentLoaded',restorState);
//................................................ movie cell category end .......................................


// ...................................................... other movies swiper start .................................
var swiper = new Swiper(".mySwiper4", {
  spaceBetween: 30,
  slidesPerView: 4,
  navigation: {
    nextEl: ".button-next4",
    prevEl: ".button-prev4",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    280: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    800: {
        slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1300: {
        slidesPerView: 6,
    }
  }
});
// ..................................................... other movies swiper end ....................................


// ..................................................... other photo swiper start ....................................
var swiper = new Swiper(".mySwiper5", {
  spaceBetween: 30,
  slidesPerView: 3,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    500: {
        slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1300: {
        slidesPerView: 4,
    }
  }
});
// ..................................................... other photo swiper end ....................................


// ..................................................... movie cast swiper start ....................................
var swiper = new Swiper(".mySwiper6", {
  spaceBetween: 30,
  slidesPerView: 5,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    500: {
        slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView : 5,
    },
    1300: {
        slidesPerView: 6,
    }
  }
});
// ..................................................... movie cast swiper end ....................................


// ..................................................... showtime select date start ....................................
document.addEventListener('DOMContentLoaded', function() {
  const selectDates = document.querySelectorAll('.js-select-date');
  const firstDateButton = document.getElementById('first-date-button');
  
  const storedDate = localStorage.getItem('activeDate');
  
  if (storedDate) {
      selectDates.forEach(function(selectDate) {
          if (selectDate.textContent.trim() === storedDate.trim()) {
              selectDate.classList.add('js-select-active');
          }
      });
  } else if (firstDateButton) {
      firstDateButton.classList.add('js-select-active');
      localStorage.setItem('activeDate', firstDateButton.textContent.trim());
  }

  selectDates.forEach(function(selectDate) {
      selectDate.addEventListener('click', function() {
          selectDates.forEach(function(date) {
              date.classList.remove('js-select-active');
          });
          selectDate.classList.add('js-select-active');
          localStorage.setItem('activeDate', selectDate.textContent.trim());
      });
  });
});
// ..................................................... showtime select date end .................................... 


// ....................................... showtime select cinema and time dropdown start ................................ 
$(document).ready(function(){
  $('.ct-toggle-btn').click(function(){
    $(this).closest('.cinema-section').find('.select-time').slideToggle(500);
    $(this).find('.cinema-down').toggle();
    $(this).find('.cinema-up').toggle();
  });
});
// ....................................... showtime select cinema and time dropdown end .................................... 


// //............................................... time duration start ...............................................
// function startTimer(duration, display) {
//   let timer = duration, minutes, seconds;
//   const interval = setInterval(function(){
//       minutes = parseInt(timer / 60, 10);
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;
//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//           clearInterval(interval);
//           alert('You have reached the time limit.');
//           window.location.href = 'book-ticket.html';
//       }
//   }, 1000);
// }

// window.onload = function () {
//   const twoMinutesThirtySeconds = 2 * 60 + 30;
//   const display = document.querySelector('#timer');
//   startTimer(twoMinutesThirtySeconds, display);
// };
//............................................... time duration end ...............................................


//.............................................. Select the single seat plan container start .................................
document.addEventListener('DOMContentLoaded',function(){
  const seatPlan = document.getElementById('seat-plan');
  const seatPlanRow = document.querySelectorAll('.seat-plan-row');
  const seats = document.querySelectorAll('.seat');
  const swipeLeft = document.getElementById('swipe-left');

  seatPlanRow.forEach(sr => {
    const totalSeats = sr.querySelectorAll('.seat').length;
    
    if (totalSeats > 20) {
      sr.style.display = 'grid';
      sr.style.gridTemplateColumns = `auto repeat(${totalSeats}, auto)`;
    }
  
    if (seatPlan.scrollWidth > seatPlan.clientWidth) {
      swipeLeft.style.display = 'block';
    } else {
      swipeLeft.style.display = 'none';
    }
  });

  seats.forEach(seatClick => {
    seatClick.addEventListener('click',function(){
      if(seatClick.classList.contains('available')){
          seatClick.classList.toggle('selected');
      }
    });

  });

  if(seatPlan){
    let isDown = false;
    let startX;
    let scrollLeft;
  
    seatPlan.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - seatPlan.offsetLeft;
        scrollLeft = seatPlan.scrollLeft;
        e.preventDefault();
    });
  
    seatPlan.addEventListener('mouseleave', () => {
        isDown = false;
    });
  
    seatPlan.addEventListener('mouseup', () => {
        isDown = false;
    });
  
    seatPlan.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - seatPlan.offsetLeft;
        const walk = (x - startX) * 2;
        seatPlan.scrollLeft = scrollLeft - walk;
    });
  }
});
//.............................................. Select the single seat plan container end .................................


//.............................................. Select the double seat plan container start .................................
// document.addEventListener('DOMContentLoaded',function(){
//   const doubleSeatPlan = document.getElementById('double-seat-plan');

//   const doubleStatus = {
//     'A1' : 'double-seat-sold',
//     'A2' : 'double-seat-sold',
//     'E6' : 'double-seat-sold'
//   };

// const doubleRow = 6;
// const doubleCol = 5;

// const doubleRowLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   if(doubleSeatPlan){
//     doubleSeatPlan.style.gridTemplateColumns = `auto repeat(${doubleCol}, auto)`;

//     for (let row = 0; row < doubleRow; row++) {
//       const doubleRowLabelDiv = document.createElement('div');
//       doubleRowLabelDiv.className = 'double-row-label';
//       doubleRowLabelDiv.style.marginLeft = '30px';
//       doubleRowLabelDiv.style.fontSize = '16pt';
//       doubleRowLabelDiv.textContent = doubleRowLabels[row] || '';
//       doubleSeatPlan.appendChild(doubleRowLabelDiv);

//       for (let col = 1; col <= doubleCol; col++) {
//           const doubleSeatDiv = document.createElement('div');
//           doubleSeatDiv.className = 'seat';

//           const doubleSeatIdentifier = `${doubleRowLabels[row]}${col}`;
//           const status2 = doubleStatus[doubleSeatIdentifier] || 'double-seat-available'; 
    
//           doubleSeatDiv.classList.add(status2);

//           if(status2 === 'double-seat-available'){
//               const priceBox2 = document.createElement('div');
//               priceBox2.className = 'box2 arrow-bottom';
//               priceBox2.textContent = '10000 Kyats';
//               doubleSeatDiv.appendChild(priceBox2);

//               doubleSeatDiv.addEventListener('click',function(){
//                 doubleSeatDiv.classList.toggle('double-seat-selected');

//                 const seatNumberElement = doubleSeatDiv.querySelector('.seat-number');
//                 if (doubleSeatDiv.classList.contains('double-seat-selected')) {
//                     seatNumberElement.style.backgroundColor = '#5febcf';
//                 } else {
//                   seatNumberElement.style.backgroundColor = 'rgb(225, 225, 225)';
//                   seatNumberElement.style.color = '#2b4c74';
//               }
//               });
//           }

//           const doubleSeatContent = document.createElement('div');
//           doubleSeatContent.className = 'double-seat';
//           doubleSeatContent.innerHTML = `
//               <div class="seat-number">${col}</div>
//               <div class="double-seat-container">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair">
//                       <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
//                       <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
//                       <path d="M5 18v2"/>
//                       <path d="M19 18v2"/>
//                   </svg>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair">
//                       <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
//                       <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
//                       <path d="M5 18v2"/>
//                       <path d="M19 18v2"/>
//                   </svg>
//               </div>
//           `;

//           if (status2 === 'double-seat-sold') {
//             doubleSeatContent.querySelector('.seat-number').style.backgroundColor = '#2D3949';
//             doubleSeatContent.querySelector('.seat-number').style.color = 'gray';
//           }

//           doubleSeatDiv.appendChild(doubleSeatContent);
//           doubleSeatPlan.appendChild(doubleSeatDiv);
//       }
//     }

//     if(doubleCol <= 7){
//       document.getElementById('double-seat-plan-container').style.width = '80%';
//     }
//   }
// });
//.............................................. Select the double seat plan container end .................................


//...................................................... seat design swiper start ..........................................
// var swiper = new Swiper(".mySwiper7", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   hashNavigation: {
//     watchState: true,
//   },
//   navigation: {
//     nextEl: ".button-next7",
//     prevEl: ".button-prev7",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   }
// });

var swiper = new Swiper(".mySwiper7", {
  spaceBetween: 30,
  slidesPerView: 2,
  grabCursor: true,
  navigation: {
        nextEl: ".button-next7",
        prevEl: ".button-prev7",
      },
        pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    500: {
        slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1300: {
        slidesPerView: 3,
    }
  }
});
//....................................................... seat design swiper end ...........................................


//...................................................... team members swiper start ..........................................
var swiper = new Swiper(".mySwiper8", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".button-next8",
    prevEl: ".button-prev8",
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    700: {
        slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1300: {
        slidesPerView: 4,
    }
  }
});
//....................................................... team members swiper end ...........................................


//.................................................... payment promotion code start .........................................
$(document).ready(function(){
  $('.promo-icon').click(function(){
    $('#promo-form').slideToggle(500);
  });
});
//.................................................... payment promotion code end .........................................


//................................................... payment method start ..............................................
$(document).ready(function(){
  $('.payment-content').not(':first').hide();

  $('.custom-radio').each(function() {
      if ($(this).find('input').is(':checked')) {
          $(this).addClass('active').removeClass('inactive');
      } else {
          $(this).addClass('inactive').removeClass('active');
      }
  });

 $('.custom-radio').on('click', function(){
    $(this).find('input[type="radio"]').prop('checked', true);

    $('.payment-content').hide();

    const target = $(this).find('input[type="radio"]').data('target');
    $(target).show();

    $('.custom-radio').each(function() {
        if ($(this).find('input').is(':checked')) {
            $(this).addClass('active').removeClass('inactive');
        } else {
            $(this).addClass('inactive').removeClass('active');
        }
    });
  });
});

//................ upload screenshot start ..........
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
//..................upload screenshot end................
//................................................... payment method end ..............................................


// ...................................................... combo swiper start .................................
var swiper = new Swiper(".mySwiper9", {
  spaceBetween: 30,
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    519: {
      slidesPerView: 2,
    },
    694: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    963: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    }                          
  }
});
// ..................................................... combo swiper end ....................................


// ..................................................... select popcorn size start ....................................
document.querySelectorAll('.size').forEach(function(item){
  item.addEventListener('click',function(){
    document.querySelectorAll('.size').forEach(function(li){
      li.classList.remove('size-active');
    });
    this.classList.add('size-active');
  });
});
// ..................................................... select popcorn size end ....................................