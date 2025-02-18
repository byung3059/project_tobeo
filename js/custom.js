$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 1) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.header .inner .m_btn').on('click', function () {
        // $(this).toggleClass('on');     
        $('.sitemap').addClass('on');
    });

    $('.sitemap .inner .close button').on('click', function () {
        $('.sitemap').removeClass('on');
    });

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },

        on: {
            slideChangeTransitionStart: function () {
                $('.main_visual_slide_box .dots>ul>li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }

    });

    $('.main_visual_slide_box .dots>ul>li').on('click', function () {
        const IDX = $(this).index();
        main_visual_slide.slideToLoop(IDX);
    });

    // 메인서비스 //
    const main_services_slide = new Swiper('.main_services_slide', {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 8,

        breakpoints: {

            600: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.main_services .dots',
            clickable: true,
        },

    });

    $('.main_services .arrow .prev').on('click', function () {
        main_services_slide.slidePrev();
    });
    $('.main_services .arrow .next').on('click', function () {
        main_services_slide.slideNext();
    });

    // 메인서비스 //

    // 메인파트너 //

    const main_partner_slide = new Swiper('.main_partner_slide', {

        loop: true,
        slidesPerView: 3,
        spaceBetween: 16,

        breakpoints: {
            769: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1025: {
                slidesPerView: 5,
                spaceBetween: 100,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 150,
            },
        }

    })

    // 메인파트너 //


});

