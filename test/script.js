document.addEventListener('DOMContentLoaded', function () {
    const doubleSeats = document.querySelectorAll('.double-seat');

    doubleSeats.forEach(dseatClick => { 
        dseatClick.addEventListener('click', function () {
            if (dseatClick.classList.contains('available')) {
                dseatClick.classList.toggle('selected');
                const seatNumberElement = dseatClick.querySelector('.seat-number');
                if (seatNumberElement) {
                    if (dseatClick.classList.contains('selected')) {
                        seatNumberElement.style.backgroundColor = '#5febcf';
                    } else {
                        seatNumberElement.style.backgroundColor = '';
                    }
                }
            }
        });
    });
});
