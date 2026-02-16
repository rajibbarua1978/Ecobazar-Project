$(document).ready(function(){

    //* Category Toggle Button Starts //*
    $('#categoryToggleBtn').click(function(){
        $('.submenu').slideToggle()
    })
     $('.bannerSlider').slick({
        prevArrow: "#bannerLeftArrow",
        nextArrow: "#bannerRightArrow",
        dots: true,
        dotsClass: "slider-dots",
        autoplay: true,
        autoplaySpeed: 5000,
    })
    // client testomonial part
    $('#forMobile').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });

// news section part

    $('#newsCards').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });
    $('.smallImg').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,

        infinite: false,
        asNavFor: '.largeImg',
        focusOnSelect: true,
        prevArrow: '.upArrow',
        nextArrow: '.downArrow',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    })
    $('.largeImg').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.smallImg',
        mobileFirst: true,
    })
    // single product html count product
    $('.plusBtn').on('click', function () {
        let input = $(this).siblings('.counter');
        input.val(Number(input.val()) + 1);
    });

    $('.minusBtn').on('click', function () {
        let input = $(this).siblings('.counter');
        input.val(Math.max(1, Number(input.val()) - 1));
    });

    $('.counter').on('keyup click', function () {
        if (Number($(this).val()) < 1) {
            $(this).val(1);
        }
    });
    // login and creat account part
    $('.pasToggle').on('click', function () {

        if ($('.pasInput').attr("type") === "password") {
            $('.pasInput').attr("type", "text");
            $('.pasToggle .icon').attr("icon", "ph:eye-closed");
        } else {
            $('.pasInput').attr("type", "password");
            $('.pasToggle .icon').attr("icon", "ph:eye");
        }
    });

    $('.compasToggle').on('click', function () {
        if ($('.compasInput').attr("type") === "password") {
            $('.compasInput').attr("type", "text");
            $('.compasToggle .icon').attr("icon", "ph:eye-closed");
        } else {
            $('.compasInput').attr("type", "password");
            $('.compasToggle .icon').attr("icon", "ph:eye");
        }
    })
    // dashboard settings
    $('.carpasToggle').on('click', function () {

        if ($('.carpass').attr("type") === "password") {
            $('.carpass').attr("type", "text");
            $('.carpasToggle .icon').attr("icon", "ph:eye-closed");
        } else {
            $('.carpass').attr("type", "password");
            $('.carpasToggle .icon').attr("icon", "ph:eye");
        }
    });
    $('.newpasToggle').on('click', function () {

        if ($('.newpass').attr("type") === "password") {
            $('.newpass').attr("type", "text");
            $('.newpasToggle .icon').attr("icon", "ph:eye-closed");
        } else {
            $('.newpass').attr("type", "password");
            $('.newpasToggle .icon').attr("icon", "ph:eye");
        }
    });
    $('.repasToggle').on('click', function () {

        if ($('.repass').attr("type") === "password") {
            $('.repass').attr("type", "text");
            $('.repasToggle .icon').attr("icon", "ph:eye-closed");
        } else {
            $('.repass').attr("type", "password");
            $('.repasToggle .icon').attr("icon", "ph:eye");
        }
    });
    // shop page rating
    $('.single-check').on('change', function () {
        $('.single-check').not(this).prop('checked', false);
    });
    // about team section
    $('#forSlide').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    prevArrow: '.leftArrow',
                    nextArrow: '.rightArrow',
                    arrows:true,

                }
            }
        ]
    });


})

