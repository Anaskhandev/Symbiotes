
$(function () {

    "use strict";


    /* ===============================  Navbar Menu  =============================== */

    var wind = $(window);


    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -80            // offste (in px) for fixed top navigation
    });


    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });

    $('.navbar .search .icon').on('click', function () {
        $(".navbar .search .search-form").fadeIn();
    });

    $('.navbar .search .search-form .close').on('click', function () {
        $(".navbar .search .search-form").fadeOut();
    });


    function noScroll() {
        window.scrollTo(0, 0);
    }

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });

    var open = false,
        navDark = $(".topnav.dark"),
        logoChan = $(".topnav.dark .logo img");

    $('.topnav .menu-icon').on('click', function () {
        open = !open;

        $('.hamenu').toggleClass("open");

        if (open) {

            $('.hamenu').animate({ left: 0 });

            $('.topnav .menu-icon .text').addClass('open');

            navDark.addClass("navlit");
            logoChan.attr('src', 'img/logo-light.png');

            window.addEventListener('scroll', noScroll);

        } else {

            $('.hamenu').delay(300).animate({ left: "-100%" });

            $('.topnav .menu-icon .text').removeClass('open');

            navDark.removeClass("navlit");
            logoChan.attr('src', 'img/logo-dark.png');

            window.removeEventListener('scroll', noScroll);
        }
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseenter', function () {
        $(this).css("opacity", "1").siblings().css("opacity", ".5");
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseleave', function () {
        $(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    });


    $('.main-menu > li .dmenu').on('click', function () {
        $(".main-menu").addClass("gosub");
        $(this).parent().parent().find(".sub-menu").addClass("sub-open");
    });

    $('.main-menu .sub-menu li .sub-link.back').on('click', function () {
        $(".main-menu").removeClass("gosub");
        $(".main-menu .sub-menu").removeClass("sub-open");
    });



    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;

        $("div.progress").css("height", progress + "%");
    });

    /* ===============================  Swiper slider  =============================== */


    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        loop: true,
        

        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.slider-prlx .parallax-slider .swiper-pagination',
            type: 'fraction',
            clickable: true
        },

        navigation: {
            nextEl: '.slider-prlx .parallax-slider .next-ctrl',
            prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
        }
    };
    parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);


    var parallaxArch;
    var parallaxArchOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        loop: true,

        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.arch-slider .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.arch-slider .next-ctrl',
            prevEl: '.arch-slider .prev-ctrl'
        }
    };
    parallaxArch = new Swiper('.arch-slider .parallax-slider', parallaxArchOptions);


    var parallaxShowCase;
    var parallaxShowCaseOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        mousewheel: true,
        loop: true,

        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.showcase-full .parallax-slider .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.showcase-full .parallax-slider .next-ctrl',
            prevEl: '.showcase-full .parallax-slider .prev-ctrl'
        }
    };
    parallaxShowCase = new Swiper('.showcase-full .parallax-slider', parallaxShowCaseOptions);


    var swiperWorkMetro = new Swiper('.metro .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        centeredSlides: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
            },
            991: {
                slidesPerView: 2,
            }
        },

        pagination: {
            el: '.metro .swiper-pagination',
            type: 'progressbar',
        },

        navigation: {
            nextEl: '.metro .swiper-button-next',
            prevEl: '.metro .swiper-button-prev'
        },
    });

    var swiperWorkCaroul = new Swiper('.caroul .swiper-container', {
        spaceBetween: 0,
        speed: 1000,
        loop: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            }
        },

        pagination: {
            el: '.caroul .swiper-pagination',
            type: 'progressbar',
        },

        navigation: {
            nextEl: '.caroul .swiper-button-next',
            prevEl: '.caroul .swiper-button-prev'
        },
    });


    var swiperBlogImg = new Swiper('.blog-crv .swiper-img', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        effect: 'fade',
        mousewheel: {
            releaseOnEdges: true,
          },

        pagination: {
            el: '.blog-crv .controls .swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.next-ctrl',
            prevEl: '.prev-ctrl'
        },
    });

    var swiperBlogContent = new Swiper('.blog-crv .swiper-content', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        mousewheel: {
            releaseOnEdges: true,
          },

        pagination: {
            el: '.blog-crv .controls .swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.blog-crv .controls .next-ctrl',
            prevEl: '.blog-crv .controls .prev-ctrl'
        },
    });


    var swiperScreenApp = new Swiper('.secreen-shots .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        mousewheel: {
            releaseOnEdges: true,
          },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
                centeredSlides: false,
            },
            991: {
                slidesPerView: 5,
            }
        },

        pagination: {
            el: '.secreen-shots .swiper-pagination',
            clickable: true,
        },

    });

    var swiperTestimApp = new Swiper('.app-testim .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        mousewheel: {
            releaseOnEdges: true,
          },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            991: {
                slidesPerView: 3,
            }
        },

        pagination: {
            el: '.app-testim .swiper-pagination',
            clickable: true,
        },

    });


    /* ===============================  Var Background image  =============================== */

    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /* ===============================  slick Carousel  =============================== */

    $('.testimonials .slic-item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: '.testimonials .prev',
        nextArrow: '.testimonials .next',
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });

    $('.testim-box .slic-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true
    });


    /* ===============================  Mouse Hover  =============================== */

    $('.feat .items').on('mouseenter', function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');


    /* ===============================  YouTubePopUp  =============================== */

    $("a.vid").YouTubePopUp();


    /* ===============================  parallaxie  =============================== */

    $('.parallaxie').parallaxie({
        speed: 0.2,
        size: "cover"
    });


    /* ===============================  magnificPopup  =============================== */

    $('.popup-img , .gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* ===============================  justifiedGallery  =============================== */

    $('.justified-gallery').justifiedGallery({
        rowHeight: 400,
        lastRow: 'nojustify',
        margins: 15
    });


    /* ===============================  skills-circle  =============================== */

    var c4 = $('.skills-circle .skill');
    var myVal = $(this).attr('data-value');

    $(".skills-circle .skill").each(function () {

        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 2,
            size: 110,
            fill: { color: "rgb(18, 194, 233)" }
        });

    });

    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });


    /* ===============================  countUp  =============================== */

    $('.number-sec .count').countUp({
        delay: 10,
        time: 500
    });


    /* ===============================  accordion  =============================== */

    $(".accordion").on("click", ".title", function () {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });

    $(".accordion").on("click", ".item", function () {

        $(this).addClass("active").siblings().removeClass("active");

    });


    /* ===============================  tooltip  =============================== */

    $('[data-tooltip-tit]').hover(function () {
        $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function () {
        $('.div-tooltip-tit').remove();
    }).mousemove(function (e) {
        $('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
    });
    $('[data-tooltip-sub]').hover(function () {
        $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function () {
        $('.div-tooltip-sub').remove();
    }).mousemove(function (e) {
        $('.div-tooltip-sub').css({ top: e.pageY + (-15), left: e.pageX + 30 })
    });

});


/* ===============================  Wow Animation  =============================== */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


// === window When Loading === //

$(window).on("load", function () {


    /* ===============================  SPLITTING TEXT  =============================== */

    Splitting();


    /* ===============================  thumparallax  =============================== */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.1
    });

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.1
    });


    /* ===============================  isotope Masonery  =============================== */

    // isotope
    $('.gallery-mons').isotope({
        // options
        itemSelector: '.items',
        masonry: {
            // use element for option
            columnWidth: '.width2'
        }
    });

    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery , .gallery-mons').isotope();

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* ===============================  contact validator  =============================== */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact-2.html";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});



/* ===============================  Hide / show navbar  =============================== */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navi').outerHeight();
$(window).on("scroll", function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('#navi').css('top', '-100px');

    } else {

        if (st + $(window).height() < $(document).height()) {
            $('#navi').css('top', '0');
        }
    }

    lastScrollTop = st;
}



/* ===============================  Preloader page  =============================== */

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function () {
    $('#preloader').addClass("isdone");
    $('.loading').addClass("isdone");
});


/* ===============================  Scroll back to top  =============================== */

$(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })


});





/* ===============================  Mouse effect  =============================== */

function mousecursor() {
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};

$(function () {
    mousecursor();
});

/* ===============================  fixed-slider  =============================== */

$(function () {

    "use strict";

    var slidHeight = $(".fixed-slider").outerHeight();

    $(".main-content").css({
        marginTop: slidHeight
    });

});

$(window).scroll(function () {

    /* ===============================  fade slideshow  =============================== */

    var scrolled = $(this).scrollTop();
    $('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });


});



/* ===============================  Swiper showcases with data  =============================== */


$('[data-carousel="swiper"]').each(function () {

    var containe = $(this).find('[data-swiper="container"]').attr('id');
    var pagination = $(this).find('[data-swiper="pagination"]').attr('id');
    var prev = $(this).find('[data-swiper="prev"]').attr('id');
    var next = $(this).find('[data-swiper="next"]').attr('id');
    var items = $(this).data('items');
    var autoplay = $(this).data('autoplay');
    var iSlide = $(this).data('initial');
    var loop = $(this).data('loop');
    var parallax = $(this).data('parallax');
    var space = $(this).data('space');
    var speed = $(this).data('speed');
    var center = $(this).data('center');
    var effect = $(this).data('effect');
    var direction = $(this).data('direction');
    var mousewheel = $(this).data('mousewheel');

    // Configuration
    var conf = {

    };

    // Responsive
    if ($(this).hasClass('showcase-grid')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };
    };

    if ($(this).hasClass('showcase-carus')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 200,
                },
            }
        };
    };

    if ($(this).hasClass('showstyle')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    };

    if ($(this).hasClass('case-study')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    };

    if (items) {
        conf.slidesPerView = items
    };
    if (autoplay) {
        conf.autoplay = autoplay
    };
    if (iSlide) {
        conf.initialSlide = iSlide
    };
    if (center) {
        conf.centeredSlides = center
    };
    if (loop) {
        conf.loop = loop
    };
    if (parallax) {
        conf.parallax = parallax
    };
    if (space) {
        conf.spaceBetween = space
    };
    if (speed) {
        conf.speed = speed
    };
    if (mousewheel) {
        conf.mousewheel = mousewheel
    };
    if (effect) {
        conf.effect = effect
    };
    if (direction) {
        conf.direction = direction
    };
    if (prev) {
        conf.prevButton = '#' + prev
    };
    if (next) {
        conf.nextButton = '#' + next
    };
    if (pagination) {
        conf.pagination = '#' + pagination,
            conf.paginationClickable = true
    };

    // Initialization
    if (containe) {
        var initID = '#' + containe;
        var init = new Swiper(initID, conf);
    };
});


"use strict";
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
var canvas = document.getElementsByTagName("canvas")[0];
canvas.addEventListener("mousemove", function(evt) {
  var mousePos = getMousePos(canvas, evt);
  var message = "Mouse position: " + mousePos.x + "," + mousePos.y;
});

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

var config = {
  TEXTURE_DOWNSAMPLE: 1,
  DENSITY_DISSIPATION: 0.98,
  VELOCITY_DISSIPATION: 0.99,
  PRESSURE_DISSIPATION: 0.8,
  PRESSURE_ITERATIONS: 25,
  CURL: 30,
  SPLAT_RADIUS: 0.005
};

var pointers = [];
var splatStack = [];

var _getWebGLContext = getWebGLContext(canvas);
var gl = _getWebGLContext.gl;
var ext = _getWebGLContext.ext;
var support_linear_float = _getWebGLContext.support_linear_float;

function getWebGLContext(canvas) {
  var params = {
    alpha: false,
    depth: false,
    stencil: false,
    antialias: false
  };

  var gl = canvas.getContext("webgl2", params);

  var isWebGL2 = !!gl;

  if (!isWebGL2)
    gl =
      canvas.getContext("webgl", params) ||
      canvas.getContext("experimental-webgl", params);

  var halfFloat = gl.getExtension("OES_texture_half_float");
  var support_linear_float = gl.getExtension("OES_texture_half_float_linear");

  if (isWebGL2) {
    gl.getExtension("EXT_color_buffer_float");
    support_linear_float = gl.getExtension("OES_texture_float_linear");
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  var internalFormat = isWebGL2 ? gl.RGBA16F : gl.RGBA;
  var internalFormatRG = isWebGL2 ? gl.RG16F : gl.RGBA;
  var formatRG = isWebGL2 ? gl.RG : gl.RGBA;
  var texType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;

  return {
    gl: gl,
    ext: {
      internalFormat: internalFormat,
      internalFormatRG: internalFormatRG,
      formatRG: formatRG,
      texType: texType
    },
    support_linear_float: support_linear_float
  };
}

function pointerPrototype() {
  this.id = -1;
  this.x = 0;
  this.y = 0;
  this.dx = 0;
  this.dy = 0;
  this.down = false;
  this.moved = false;
  this.color = [30, 0, 300];
}

pointers.push(new pointerPrototype());

var GLProgram = (function() {
  function GLProgram(vertexShader, fragmentShader) {
    if (!(this instanceof GLProgram))
      throw new TypeError("Cannot call a class as a function");

    this.uniforms = {};
    this.program = gl.createProgram();

    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
      throw gl.getProgramInfoLog(this.program);

    var uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < uniformCount; i++) {
      var uniformName = gl.getActiveUniform(this.program, i).name;

      this.uniforms[uniformName] = gl.getUniformLocation(
        this.program,
        uniformName
      );
    }
  }

  GLProgram.prototype.bind = function bind() {
    gl.useProgram(this.program);
  };

  return GLProgram;
})();

function compileShader(type, source) {
  var shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    throw gl.getShaderInfoLog(shader);

  return shader;
}

var baseVertexShader = compileShader(
  gl.VERTEX_SHADER,
  "precision highp float; precision mediump sampler2D; attribute vec2 aPosition; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform vec2 texelSize; void main () {     vUv = aPosition * 0.5 + 0.5;     vL = vUv - vec2(texelSize.x, 0.0);     vR = vUv + vec2(texelSize.x, 0.0);     vT = vUv + vec2(0.0, texelSize.y);     vB = vUv - vec2(0.0, texelSize.y);     gl_Position = vec4(aPosition, 0.0, 1.0); }"
);
var clearShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; uniform float value; void main () {     gl_FragColor = value * texture2D(uTexture, vUv); }"
);
var displayShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; void main () {     gl_FragColor = texture2D(uTexture, vUv); }"
);
var splatShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius; void main () {     vec2 p = vUv - point.xy;     p.x *= aspectRatio;     vec3 splat = exp(-dot(p, p) / radius) * color;     vec3 base = texture2D(uTarget, vUv).xyz;     gl_FragColor = vec4(base + splat, 1.0); }"
);
var advectionManualFilteringShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; vec4 bilerp (in sampler2D sam, in vec2 p) {     vec4 st;     st.xy = floor(p - 0.5) + 0.5;     st.zw = st.xy + 1.0;     vec4 uv = st * texelSize.xyxy;     vec4 a = texture2D(sam, uv.xy);     vec4 b = texture2D(sam, uv.zy);     vec4 c = texture2D(sam, uv.xw);     vec4 d = texture2D(sam, uv.zw);     vec2 f = p - st.xy;     return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); } void main () {     vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;     gl_FragColor = dissipation * bilerp(uSource, coord);     gl_FragColor.a = 1.0; }"
);
var advectionShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform float dt; uniform float dissipation; void main () {     vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;     gl_FragColor = dissipation * texture2D(uSource, coord); }"
);
var divergenceShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; vec2 sampleVelocity (in vec2 uv) {     vec2 multiplier = vec2(1.0, 1.0);     if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }     if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }     if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }     if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }     return multiplier * texture2D(uVelocity, uv).xy; } void main () {     float L = sampleVelocity(vL).x;     float R = sampleVelocity(vR).x;     float T = sampleVelocity(vT).y;     float B = sampleVelocity(vB).y;     float div = 0.5 * (R - L + T - B);     gl_FragColor = vec4(div, 1.0, 1.0, 1.0); }"
);
var curlShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; void main () {     float L = texture2D(uVelocity, vL).y;     float R = texture2D(uVelocity, vR).y;     float T = texture2D(uVelocity, vT).x;     float B = texture2D(uVelocity, vB).x;     float vorticity = R - L - T + B;     gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0); }"
);
var vorticityShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt; void main () {     float L = texture2D(uCurl, vL).y;     float R = texture2D(uCurl, vR).y;     float T = texture2D(uCurl, vT).x;     float B = texture2D(uCurl, vB).x;     float C = texture2D(uCurl, vUv).x;     vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L));     force *= 1.0 / length(force + 0.00001) * curl * C;     vec2 vel = texture2D(uVelocity, vUv).xy;     gl_FragColor = vec4(vel + force * dt, 0.0, 1.0); }"
);
var pressureShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uDivergence; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     float C = texture2D(uPressure, vUv).x;     float divergence = texture2D(uDivergence, vUv).x;     float pressure = (L + R + B + T - divergence) * 0.25;     gl_FragColor = vec4(pressure, 1.0, 1.0, 1.0); }"
);
var gradientSubtractShader = compileShader(
  gl.FRAGMENT_SHADER,
  "precision highp float; precision mediump sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uVelocity; vec2 boundary (in vec2 uv) {     uv = min(max(uv, 0.0), 1.0);     return uv; } void main () {     float L = texture2D(uPressure, boundary(vL)).x;     float R = texture2D(uPressure, boundary(vR)).x;     float T = texture2D(uPressure, boundary(vT)).x;     float B = texture2D(uPressure, boundary(vB)).x;     vec2 velocity = texture2D(uVelocity, vUv).xy;     velocity.xy -= vec2(R - L, T - B);     gl_FragColor = vec4(velocity, 0.0, 1.0); }"
);

var textureWidth = void 0;
var textureHeight = void 0;
var density = void 0;
var velocity = void 0;
var divergence = void 0;
var curl = void 0;
var pressure = void 0;

initFramebuffers();

var clearProgram = new GLProgram(baseVertexShader, clearShader);
var displayProgram = new GLProgram(baseVertexShader, displayShader);
var splatProgram = new GLProgram(baseVertexShader, splatShader);
var advectionProgram = new GLProgram(
  baseVertexShader,
  support_linear_float ? advectionShader : advectionManualFilteringShader
);
var divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
var curlProgram = new GLProgram(baseVertexShader, curlShader);
var vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
var pressureProgram = new GLProgram(baseVertexShader, pressureShader);
var gradienSubtractProgram = new GLProgram(
  baseVertexShader,
  gradientSubtractShader
);

function initFramebuffers() {
  textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
  textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;

  var iFormat = ext.internalFormat;
  var iFormatRG = ext.internalFormatRG;
  var formatRG = ext.formatRG;
  var texType = ext.texType;

  density = createDoubleFBO(
    0,
    textureWidth,
    textureHeight,
    iFormat,
    gl.RGBA,
    texType,
    support_linear_float ? gl.LINEAR : gl.NEAREST
  );
  velocity = createDoubleFBO(
    2,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    support_linear_float ? gl.LINEAR : gl.NEAREST
  );
  divergence = createFBO(
    4,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    gl.NEAREST
  );
  curl = createFBO(
    5,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    gl.NEAREST
  );
  pressure = createDoubleFBO(
    6,
    textureWidth,
    textureHeight,
    iFormatRG,
    formatRG,
    texType,
    gl.NEAREST
  );
}

function createFBO(texId, w, h, internalFormat, format, type, param) {
  gl.activeTexture(gl.TEXTURE0 + texId);

  var texture = gl.createTexture();

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

  var fbo = gl.createFramebuffer();

  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0
  );
  gl.viewport(0, 0, w, h);
  gl.clear(gl.COLOR_BUFFER_BIT);

  return [texture, fbo, texId];
}

function createDoubleFBO(texId, w, h, internalFormat, format, type, param) {
  var fbo1 = createFBO(texId, w, h, internalFormat, format, type, param);
  var fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param);

  return {
    get first() {
      return fbo1;
    },
    get second() {
      return fbo2;
    },
    swap: function swap() {
      var temp = fbo1;

      fbo1 = fbo2;
      fbo2 = temp;
    }
  };
}

var blit = (function() {
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
    gl.STATIC_DRAW
  );
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array([0, 1, 2, 0, 2, 3]),
    gl.STATIC_DRAW
  );
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);

  return function(destination) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };
})();

var lastTime = Date.now();

update();

function update() {
  resizeCanvas();

  var dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
  lastTime = Date.now();

  gl.viewport(0, 0, textureWidth, textureHeight);

  if (splatStack.length > 0) {
    for (var m = 0; m < splatStack.pop(); m++) {
      var color = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
      var x = canvas.width * Math.random();
      var y = canvas.height * Math.random();
      var dx = 1000 * (Math.random() - 0.5);
      var dy = 1000 * (Math.random() - 0.5);

      splat(x, y, dx, dy, color);
    }
  }

  advectionProgram.bind();
  gl.uniform2f(
    advectionProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);
  gl.uniform1i(advectionProgram.uniforms.uSource, velocity.first[2]);
  gl.uniform1f(advectionProgram.uniforms.dt, dt);
  gl.uniform1f(
    advectionProgram.uniforms.dissipation,
    config.VELOCITY_DISSIPATION
  );
  blit(velocity.second[1]);
  velocity.swap();

  gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.first[2]);
  gl.uniform1i(advectionProgram.uniforms.uSource, density.first[2]);
  gl.uniform1f(
    advectionProgram.uniforms.dissipation,
    config.DENSITY_DISSIPATION
  );
  blit(density.second[1]);
  density.swap();

  for (var i = 0, len = pointers.length; i < len; i++) {
    var pointer = pointers[i];

    if (pointer.moved) {
      splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color);
      pointer.moved = false;
    }
  }

  curlProgram.bind();
  gl.uniform2f(
    curlProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.first[2]);
  blit(curl[1]);

  vorticityProgram.bind();
  gl.uniform2f(
    vorticityProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.first[2]);
  gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2]);
  gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
  gl.uniform1f(vorticityProgram.uniforms.dt, dt);
  blit(velocity.second[1]);
  velocity.swap();

  divergenceProgram.bind();
  gl.uniform2f(
    divergenceProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.first[2]);
  blit(divergence[1]);

  clearProgram.bind();

  var pressureTexId = pressure.first[2];

  gl.activeTexture(gl.TEXTURE0 + pressureTexId);
  gl.bindTexture(gl.TEXTURE_2D, pressure.first[0]);
  gl.uniform1i(clearProgram.uniforms.uTexture, pressureTexId);
  gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
  blit(pressure.second[1]);
  pressure.swap();

  pressureProgram.bind();
  gl.uniform2f(
    pressureProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2]);
  pressureTexId = pressure.first[2];
  gl.activeTexture(gl.TEXTURE0 + pressureTexId);

  for (var _i = 0; _i < config.PRESSURE_ITERATIONS; _i++) {
    gl.bindTexture(gl.TEXTURE_2D, pressure.first[0]);
    gl.uniform1i(pressureProgram.uniforms.uPressure, pressureTexId);
    blit(pressure.second[1]);
    pressure.swap();
  }

  gradienSubtractProgram.bind();
  gl.uniform2f(
    gradienSubtractProgram.uniforms.texelSize,
    1.0 / textureWidth,
    1.0 / textureHeight
  );
  gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.first[2]);
  gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.first[2]);
  blit(velocity.second[1]);
  velocity.swap();

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  displayProgram.bind();
  gl.uniform1i(displayProgram.uniforms.uTexture, density.first[2]);
  blit(null);

  requestAnimationFrame(update);
}

function splat(x, y, dx, dy, color) {
  splatProgram.bind();
  gl.uniform1i(splatProgram.uniforms.uTarget, velocity.first[2]);
  gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
  gl.uniform2f(
    splatProgram.uniforms.point,
    x / canvas.width,
    1.0 - y / canvas.height
  );
  gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
  gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS);
  blit(velocity.second[1]);
  velocity.swap();

  gl.uniform1i(splatProgram.uniforms.uTarget, density.first[2]);
  gl.uniform3f(
    splatProgram.uniforms.color,
    color[0] * 0.1,
    color[1] * 0.3,
    color[2] * 0.3
  );
  blit(density.second[1]);
  density.swap();
}

function resizeCanvas() {
  (canvas.width !== canvas.clientWidth ||
    canvas.height !== canvas.clientHeight) &&
    ((canvas.width = canvas.clientWidth),
    (canvas.height = canvas.clientHeight),
    initFramebuffers());
}

var count = 0;
var colorArr = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2];

canvas.addEventListener("mousemove", function(e) {
  count++;

  count > 25 &&
    ((colorArr = [
      Math.random() + 0.2,
      Math.random() + 0.2,
      Math.random() + 0.2
    ]),
    (count = 0));

  pointers[0].down = true;
  pointers[0].color = colorArr;
  pointers[0].moved = pointers[0].down;
  pointers[0].dx = (e.offsetX - pointers[0].x) * 10.0;
  pointers[0].dy = (e.offsetY - pointers[0].y) * 10.0;
  pointers[0].x = e.offsetX;
  pointers[0].y = e.offsetY;
});

canvas.addEventListener(
  "touchmove",
  function(e) {
    e.preventDefault();

    var touches = e.targetTouches;

    count++;

    count > 25 &&
      ((colorArr = [
        Math.random() + 0.2,
        Math.random() + 0.2,
        Math.random() + 0.2
      ]),
      (count = 0));

    for (var i = 0, len = touches.length; i < len; i++) {
      if (i >= pointers.length) pointers.push(new pointerPrototype());

      pointers[i].id = touches[i].identifier;
      pointers[i].down = true;
      pointers[i].x = touches[i].pageX;
      pointers[i].y = touches[i].pageY;
      pointers[i].color = colorArr;

      var pointer = pointers[i];

      pointer.moved = pointer.down;
      pointer.dx = (touches[i].pageX - pointer.x) * 10.0;
      pointer.dy = (touches[i].pageY - pointer.y) * 10.0;
      pointer.x = touches[i].pageX;
      pointer.y = touches[i].pageY;
    }
  },
  false
);

function m(t) {
  for (
    var e,
      n = document.getElementById(t),
      i = n.innerHTML.replace("&amp;", "&").split(""),
      a = "",
      o = 0,
      s = i.length;
    s > o;
    o++
  ) {
    e = i[o].replace("&", "&amp");
    a += e.trim()
      ? '<span class="letter-' + o + '">' + e + "</span>"
      : "&nbsp;";
  }

  n.innerHTML = a;


};





$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});



$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var scroll;
        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) - 160
        }else{
            scroll =  ($target.offset().top) - 0
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        },300, 'swing', function () {
            //window.location.hash = target;
        });
    });
});

$(window).on('scroll', function () {
   var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight()
    , cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('li a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});