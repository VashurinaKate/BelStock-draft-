    $('.prod').slick({
        cssEase: 'ease-in',
        asNavFor: '.prodmin',
        centerPadding: '25px',
        mobileFirst: true,
        fade: true,
        arrows: false,
    });
    
    $('.prodmin').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        asNavFor: '.prod',
        centerPadding: '20px',
        focusOnSelect: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });