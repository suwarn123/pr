//Js for Navbar
$(document).ready(function () {
            $('.menu-toggle').click(function () {
                $('.navbar').toggleClass('active')
            })
            $('ul li').click(function () {
                $(this).siblings().removeClass('active');
                $(this).toggleClass('active');
            });
        });

//Js for Navbar
//Navbar Fixed top

//Navbar Fixed top
//This is the js for owl carousel 
var owl = $('.owl-carousel');
		owl.owlCarousel({
			margin: 0,
			nav: false,
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
		$('.play').on('click', function () {
			owl.trigger('play.owl.autoplay', [1000])
		})
		$('.stop').on('click', function () {
			owl.trigger('stop.owl.autoplay')
		})
//This is the js for owl carousel 
