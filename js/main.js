(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	

$(document).ready(function(){
	  $('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:true,
    	animateIn: 'zoomIn',
    	animateOut: 'slideOutRight',
    	autoplay:true,
    	autoplayTimeout:5000,
	    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});
