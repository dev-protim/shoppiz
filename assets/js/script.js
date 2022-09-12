jQuery(function ($) {

    'use strict';

    // Hero carousel starts
    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        smartSpeed: 500
    })
    // Hero carousel ends

    // Masontry starts
    var $grid = $('.isotope-grid').isotope({
        // options
      });
    $('.isotope-group').on( 'click', 'li', function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // Masontry ends

    // Collection carousel starts
    $('.collection-carousel').owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        items: 3,
        // autoplay: false,
        // smartSpeed: 500,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })
    // Collection carousel ends
});