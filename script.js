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
// // ....................................... showtime select cinema and time dropdown end .................................... 


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
//   const fiveMinutes = 60 * 5;
//   const display = document.querySelector('#timer');
//   startTimer(fiveMinutes, display);
// };
//............................................... time duration end ...............................................



//.............................................. Select the seat plan container start .................................
const seatPlan = document.getElementById('seat-plan');
const swipeLeft = document.getElementById('swipe-left');

const seatStatus = {
  'A1' : 'sold',
  'A2' : 'sold',
  'A13' : 'sold',
  'A14' : 'sold',
  'A15' : 'sold',
  'C7' : 'sold',
  'C8' : 'sold',
  'C9' : 'sold',
  'E1' : 'sold',
  'E2' : 'sold',
  'E4' : 'sold',
  'E5' : 'sold',
  'E16' : 'sold',
  'E17' : 'sold',
  'F12' : 'sold'
};

const rows = 6;
const cols = 10;

seatPlan.style.gridTemplateColumns = `auto repeat(${cols}, auto)`;

const rowLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

if(cols <= 12){
  document.getElementById('seat-plan-container').style.width = '70%';
}

for (let row = 0; row < rows; row++) {
    const rowLabelDiv = document.createElement('div');
    rowLabelDiv.className = 'row-label';
    rowLabelDiv.style.marginRight = '15px';
    rowLabelDiv.style.fontSize = '16pt';
    rowLabelDiv.textContent = rowLabels[row] || '';
    seatPlan.appendChild(rowLabelDiv);

    for (let col = 1; col <= cols; col++) {
        const seatDiv = document.createElement('div');
        seatDiv.className = 'seat';

        const seatIdentifier = `${rowLabels[row]}${col}`;
        const status = seatStatus[seatIdentifier] || 'available'; 
  
        seatDiv.classList.add(status);

        if(status === 'available'){
            const priceBox = document.createElement('div');
            priceBox.className = 'box arrow-bottom';
            priceBox.textContent = '5000 Kyats';
            seatDiv.appendChild(priceBox);

            seatDiv.addEventListener('click',function(){
              seatDiv.classList.toggle('selected');
            });
        }

        const seatContent = document.createElement('div');
        seatContent.className = 'seat-content';
        seatContent.innerHTML = `
            <text x="12" y="20" text-anchor="middle" class="svg-number">${col}</text>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair">
                <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
                <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
                <path d="M5 18v2"/>
                <path d="M19 18v2"/>
            </svg>
        `;

        seatDiv.appendChild(seatContent);
        seatPlan.appendChild(seatDiv);
    }
}

if (seatPlan.scrollWidth > seatPlan.clientWidth) {
  swipeLeft.style.display = 'block';
}

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
//.............................................. Select the seat plan container end .................................



const doubleSeatPlan = document.getElementById('double-seat-plan');

const doubleStatus = {
  'A1' : 'double-seat-sold',
  'A2' : 'double-seat-sold',
  'E6' : 'double-seat-sold'
};

const doubleRow = 6;
const doubleCol = 8;

doubleSeatPlan.style.gridTemplateColumns = `auto repeat(${doubleCol}, auto)`;

const doubleRowLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

if(doubleCol <= 7){
  document.getElementById('double-seat-plan-container').style.width = '70%';
}

for (let row = 0; row < doubleRow; row++) {
    const doubleRowLabelDiv = document.createElement('div');
    doubleRowLabelDiv.className = 'double-row-label';
    doubleRowLabelDiv.style.marginLeft = '30px';
    doubleRowLabelDiv.style.fontSize = '16pt';
    doubleRowLabelDiv.textContent = doubleRowLabels[row] || '';
    doubleSeatPlan.appendChild(doubleRowLabelDiv);

    for (let col = 1; col <= doubleCol; col++) {
        const doubleSeatDiv = document.createElement('div');
        doubleSeatDiv.className = 'seat';

        const doubleSeatIdentifier = `${doubleRowLabels[row]}${col}`;
        const status2 = doubleStatus[doubleSeatIdentifier] || 'double-seat-available'; 
  
        doubleSeatDiv.classList.add(status2);

        if(status2 === 'double-seat-available'){
            const priceBox2 = document.createElement('div');
            priceBox2.className = 'box2 arrow-bottom';
            priceBox2.textContent = '10000 Kyats';
            doubleSeatDiv.appendChild(priceBox2);

            doubleSeatDiv.addEventListener('click',function(){
              doubleSeatDiv.classList.toggle('double-seat-selected');
            });
        }

        const doubleSeatContent = document.createElement('div');
        doubleSeatContent.className = 'double-seat';
        doubleSeatContent.innerHTML = `
            <div class="seat-number">${col}</div>
            <div class="double-seat-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair">
                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
                    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
                    <path d="M5 18v2"/>
                    <path d="M19 18v2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair">
                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
                    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
                    <path d="M5 18v2"/>
                    <path d="M19 18v2"/>
                </svg>
            </div>
        `;

        if (status2 === 'double-seat-sold') {
          doubleSeatContent.querySelector('.seat-number').style.backgroundColor = '#2b4c74';
          doubleSeatContent.querySelector('.seat-number').style.color = 'gray';
        }
        if (status2 === 'double-seat-selected') {
          doubleSeatContent.querySelector('.seat-number').style.color = 'red';
        }

        doubleSeatDiv.appendChild(doubleSeatContent);
        doubleSeatPlan.appendChild(doubleSeatDiv);
    }
}