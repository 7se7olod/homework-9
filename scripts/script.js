$(document).ready(function () {
    new WOW().init();

    let formInputs = $('.form-input');
    let formSubmitButton = $('.submit-form');
    let formIndex = $('#index');
    let formLabels = $('.form-label');
    var icons = {
        header: "img-4",
        activeHeader: "img-3"
    };

    $("#accordion").accordion({
        collapsible: true,
        icon: icons
    });

    $('.magnific-popup').magnificPopup({
        type: 'image'
    });

    $('.single-item').slick();

    function checkAllInputs() {

        for (let i = 0; i < formInputs.length; i++) {
            if (!formInputs[i].value) {
                alert(`Заполните поле ${formLabels[i].innerText}`);
                return;
            }
        }

        $('.main-form').fadeOut('slow', function (e) {
            $('.main-form').attr('class', 'd-none');
        });

        $('.order-message').attr('class', 'd-flex container justify-content-center align-items-center');
    };

    formIndex.keydown(function (e) {
        let regx = /^[0-9]$/;
        if (!e.key.match(regx)) {
            e.preventDefault();
        }
    });

    formSubmitButton.click(function (e) {
        checkAllInputs()
    });

});