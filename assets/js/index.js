var $window = $(window);
var $header = $('.header');

$window.scroll(onScroll);

function onScroll() {
    if ($window.scrollTop()) {
        $header.addClass('is-active');
    } else {
        $header.removeClass('is-active');
    }
}

$(function() {
    $('.slider_f').each(function() {
        var $slide = $('.sld_f', this);
        var $prev = $('.arrow_l', this);
        var $next = $('.arrow_r', this);

        $slide.eq(0).addClass('active');

        function movePrev() {
            var index = $slide.filter('.active').index();
            if (index == 0) {
                index = $slide.length
            }
            $slide.eq(index - 1).addClass('active').siblings().removeClass('active');
        }

        function moveNext() {
            var index = $slide.filter('.active').index();
            if (index == $slide.length - 1) {
                index = -1;
            }
            $slide.eq(index + 1).addClass('active').siblings().removeClass('active');
        }

        $prev.on("click", function() {
            movePrev();
        });

        $next.on("click", function() {
            moveNext();
        });
    })

})

$(function() {
    // 	init scrollmagic
    var controller = new ScrollMagic.Controller();

    // 	loop through slides
    $(".slider_f").each(function() {

        var bg = $(this).find(".slider");

        // Add tweenmax for backgroundParallax
        var parallax = TweenMax
            .from(bg, 1, {
                y: '-40%',
                ease: Power0.easeNone,
                // scale: 1.2
            });

        // Create scrollmagic scene
        var parallaxScene = new ScrollMagic.Scene({
                triggerElement: this, // <-- Use this to select current element
                triggerHook: 1,
                duration: '200%',
            })
            .setTween(parallax)
            .addTo(controller);

    });

});

// feather.replace()
/**
 * Slider
 */
$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        resistanceRatio: 0.7,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
});
/**
 * scroll button
 */
// var btn = $('#button_scroll');
//
// $(window).scroll(function() {
// 	if ($(window).scrollTop() > 300) {
// 		btn.addClass('show');
// 	} else {
// 		btn.removeClass('show');
// 	}
// });
//
// btn.on('click', function(e) {
// 	e.preventDefault();
// 	$('html, body').animate({scrollTop:0}, '300');
// });
/**
 * Animation
 */
$(".rn_surface").imagesLoaded().always(function() {
    setTimeout(function() {
        var smc = new ScrollMagic.Controller;
        $(".rn_surface").each(function() {
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: !1
            }).setClassToggle(this, "animated").addTo(smc)
        })
    }, 0)
});
/**
 * Preloader
 */
$(window).on('load', function() {
    rnPrealoaderSetup();
});

function rnPrealoaderSetup() {
    var rnPre = $('#rn-preloader-wrap');
    var isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    //- $('html, body').animate({ scrollTop: $('body').offset().top﻿ }, 'slow'); // Animation scroll
    if (!isPhone) {
        setTimeout(function() {
            rnPre.addClass('rn-preloaded');
        }, 100);
        setTimeout(function() {
            rnPre.remove();
        }, 1500);

    } else {
        rnPre.remove();
    }
}
/**
 * TILT
 */
$('.tilt').tilt({
    maxTilt: 3,
});
$('.tilt_gallery').tilt({
    maxTilt: 10,
    scale: 1.2,
    speed: 500,
    glare: true,
});

$('.cocoen').cocoen();

/**
 * Lax
 */
window.onload = function() {
    lax.setup({
            breakpoints: { small: 0, large: 992 }
        }) // init
    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }
    window.requestAnimationFrame(updateLax)
}

/**
 * jarallax
 */
$('.jarallax').jarallax({
    speed: 0.8
});