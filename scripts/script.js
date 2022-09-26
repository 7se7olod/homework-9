$(document).ready(function () {
    new WOW().init();

    let formInputs = $('.form-input');
    let formSubmitButton = $('.submit-form');
    let formIndex = $('#index');
    let formLabels = $('.form-label');
    let icons = {
        header: "img-4",
        activeHeader: "img-3"
    };

    $("#accordion").accordion({
        collapsible: true,
        icon: icons,
        heightStyle: "content"
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

        if (formIndex.val().length !== 6) {
            alert('Поле индекс должно содержать 6 цифр');
            return;
        }

        $('.main-form').fadeOut('slow', function (e) {
            $('.main-form').attr('class', 'd-none');
        });

        $('.order-message').attr('class', 'd-flex container justify-content-center align-items-center');
    };

    formIndex.keydown(function (e) {
        let regx = /[0-9]/;
        // Разрешаем: backspace, delete, tab и escape
        if (e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 27) {
            return;
        } else if (!e.key.match(regx)) {
            e.preventDefault();
        }
    });

    formSubmitButton.click(function (e) {
        checkAllInputs()
    });

});