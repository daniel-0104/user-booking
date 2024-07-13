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


const currentHTML = document.body.getAttribute('data-page');

if(currentHTML === 'index-page'){
  // other movie swiper start 
  // document.addEventListener('DOMContentLoaded', function() {
  //   var swiper = new Swiper("#now-showing-swiper", {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //     freeMode: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 4000,
  //       disableOnInteraction: false,
  //     },
  //     pagination: {
  //       el: "#swiper-pagination",
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1,
  //       },
  //       528: {
  //         slidesPerView: 2,
  //       },
  //       800: {
  //         slidesPerView: 4,
  //       }
  //     }
  //   });
  // });
  // other movie swiper end 



//   document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.p-slider');

//     sections.forEach(section => {
//         const glider = section.querySelector('.glider');
//         const prevButton = section.querySelector('.glider-prev');
//         const nextButton = section.querySelector('.glider-next');

//         new Glider(glider, {
//             type: 'carousel',
//             slidesToScroll: 1,
//             slidesToShow: 4,
//             arrows: {
//                 prev: prevButton,
//                 next: nextButton,
//             },
//             responsive: [
//                 {
//                   breakpoint: 1200,
//                   settings: {
//                     slidesToShow: 5,
//                   }
//                 },
//                 {
//                   breakpoint: 820,
//                   settings: {
//                     slidesToShow: 4,         
//                   }
//                 },
//                 {
//                   breakpoint: 640,
//                   settings: {
//                     slidesToShow: 3,           
//                   }
//                 },
//                 {
//                   breakpoint: 500,
//                   settings: {
//                     slidesToShow: 2,
//                   }
//                 },
//                 {
//                   breakpoint: 304,
//                   settings: {
//                     slidesToShow: 1,
//                   }
//                 }
//             ]
//         });
//     });
// });
  // new Glider(document.querySelector('.glider'), {
  //   slidesToScroll: 1,
  //   slidesToShow: 3,
  //   duration: 1,
  //   dots: '.dots',
  //   arrows: {
  //     prev: '.glider-prev',
  //     next: '.glider-next',
  //     duration: 1,
  //   },
    
  //   responsive : [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         duration: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 820,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         duration: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         duration: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         duration: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 304,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         duration: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 0,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         duration: 1,
  //       }
  //     }
  //   ]
  // });
}
// else if (currentHTML === 'film-page'){



// }
// else if (currentHTML === 'booking-page'){
//   let textContent = document.getElementsByClassName('text-content');
//   const about = document.getElementById('detail-about');
//   const cast = document.getElementById('cast');
//   let currentDetails = 0;
//   function detailsClick(event,elementId){
//       event.preventDefault();
//       const clickText = event.target;

//       if(clickText.classList.contains('text-active')){
//         return;
//       }
//       for(let d of textContent){
//         d.classList.remove('text-active');
//       }
//       clickText.classList.add('text-active');
//       currentDetails = Array.from(textContent).indexOf(clickText);

//       about.style.display = elementId === 'about' ? 'block' : 'none';
//       cast.style.display = elementId === 'cast' ? 'block' : 'none';
//   }

//   // cast swiper start
//   var swiper = new Swiper("#cast-swiper", {
//     slidesPerView: 5,
//     spaceBetween: 20,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       528: {
//         slidesPerView: 3,
//       },
//       800: {
//         slidesPerView: 4,
//       },
//       900: {
//         slidesPerView: 5,
//       }
//     }
//   });
//   // cast swiper end 


//   //............... buy tickets start .................................

//   // selected seat start 
//     const container = document.querySelector(".container");
//     const seats = document.querySelectorAll(".row .seat:not(.sold)");
//     const count = document.getElementById("count");

//     container.addEventListener("click", (e) => {
//       if(e.target.classList.contains("seat") && !e.target.classList.contains("sold")){
//           e.target.classList.toggle("selected");
//           updateSelectedCount();
//       }
//     });

//     function updateSelectedCount() {
//       const selectedSeats = document.querySelectorAll(".row .seat.selected");
//       const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
//       localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
//       const selectedSeatsCount = selectedSeats.length;
//       count.innerText = selectedSeatsCount;
//     }

//     function setMovieData(movieIndex, moviePrice) {
//       localStorage.setItem("selectedMovieIndex", movieIndex);
//       localStorage.setItem("selectedMoviePrice", moviePrice);
//     }

//     function populateUI(){
//       const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
//       if(selectedSeats != null && selectedSeats.length > 0){
//         seats.forEach((seats, index) => {
//           if (selectedSeats.indexOf(index) > -1) {
//             seats.classList.add("selected");
//           }
//         });
//       }
//     }
//     populateUI();
//     updateSelectedCount();
//   // selected seat end 

//   // selected date start 
//   document.addEventListener('DOMContentLoaded', function() {
//     const selectDates = document.querySelectorAll('.js-select-date');
//     const activeButtonIndex = localStorage.getItem('activeButtonIndex');
//     if (activeButtonIndex !== null) {
//         const activeButton = selectDates[activeButtonIndex];
//         if (activeButton) {
//             activeButton.classList.add('js-select-active');
//         }
//     }

//     selectDates.forEach(function(selectDate, index) {
//         selectDate.addEventListener('click', function() {
//             // If the clicked button is already active, remove the active class and clear local storage
//             if (selectDate.classList.contains('js-select-active')) {
//                 selectDate.classList.remove('js-select-active');
//                 localStorage.removeItem('activeButtonIndex');
//             } else {
//                 // Remove the 'js-select-active' class from all buttons
//                 selectDates.forEach(function(date) {
//                     date.classList.remove('js-select-active');
//                 });

//                 // Add the 'js-select-active' class to the clicked button
//                 selectDate.classList.add('js-select-active');

//                 // Store the active button's index in local storage
//                 localStorage.setItem('activeButtonIndex', index);
//             }
//         });
//     });
//   });
//   // selected date end 

//   // selected time start
//   document.addEventListener('DOMContentLoaded', function() {
//     const selectTime = document.querySelectorAll('.js-select-time');
//     const timeActiveButtonIndex = localStorage.getItem('timeActiveButtonIndex');
//     if (timeActiveButtonIndex !== null) {
//         const activeButton = selectTime[timeActiveButtonIndex];
//         if (activeButton) {
//             activeButton.classList.add('js-select-active');
//         }
//     }

//     selectTime.forEach(function(selectDate, index) {
//         selectDate.addEventListener('click', function() {
//             // If the clicked button is already active, remove the active class and clear local storage
//             if (selectDate.classList.contains('js-select-active')) {
//                 selectDate.classList.remove('js-select-active');
//                 localStorage.removeItem('timeActiveButtonIndex');
//             } else {
//                 // Remove the 'js-select-active' class from all buttons
//                 selectTime.forEach(function(date) {
//                     date.classList.remove('js-select-active');
//                 });

//                 // Add the 'js-select-active' class to the clicked button
//                 selectDate.classList.add('js-select-active');

//                 // Store the active button's index in local storage
//                 localStorage.setItem('timeActiveButtonIndex', index);
//             }
//         });
//     });
//   });
//   // selected time end 

//   //............... buy tickets end .................................


// }


