$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var floorPath = $('.home-img path');
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var modalPrimary = $('.button-primery')

    floorPath.on('mouseover', function () {
        floorPath.removeClass('currentFloor')
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor)
    });

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    modalPrimary.on('click', toggleModal);


    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('currentFloor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('currentFloor')
        }
    });


    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('currentFloor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('currentFloor')
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    };
});