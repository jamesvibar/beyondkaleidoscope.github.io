(function() {
	document.addEventListener("DOMContentLoaded", function() {
	
		let scene = document.getElementById('jv-scene');
		let parallaxInstance = new Parallax(scene, {
			hoverOnly: false
		});

	});

	$(function() {
		// speakerClick();
		smoothScroll();
		hideNav();

		gridderRun();
		exhibitorsGallery();
	});

	function gridderRun() {
	    $('.gridder').gridderExpander({
	        scroll: true,
	        scrollOffset: 30,
	        scrollTo: "panel",                  // panel or listitem
	        animationSpeed: 1000,
	        animationEasing: "easeInOutExpo",
	        showNav: true,                      // Show Navigation
	        nextText: "Next",                   // Next button text
	        prevText: "Prev",               // Previous button text
	        closeText: "Close",                 // Close button text
	        onStart: function(){
	            //Gridder Inititialized
	        },
	        onContent: function(){
	            //Gridder Content Loaded
	        },
	        onClosed: function(){
	            //Gridder Closed
	        }
	    });
	}

	function hideNav() {
		let element = $('#speakers');

		$(window).scroll(function() {
			if(element.length) {
				let height = $(window).scrollTop();

				if(height > element.offset().top - 50) {
					$('.site-nav').addClass('visible');
				} else {
					$('.site-nav').removeClass('visible');
				}
			}
		});
	}

	function exhibitorsGallery() {
	  $('.exhibitors-gallery').slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		centerMode: true,
		variableWidth: true,
		pauseOnHover: false
	  });
	}

	function smoothScroll() {
		$(document).on('click', 'a[href^="#"]', function (event) {
		    event.preventDefault();

		    $('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 1000);
		});
	}

	function speakerClick() {
		$('.speaker-bubble').on('click', function(e){
			e.preventDefault();
			$('.speaker-bubble').removeClass('active');
			$(this).addClass('active');
			let name = $(this).attr("data-name");
			let info = $(this).attr("data-info");
			$("#name").text(name);
			$("#info").text(info);

			$('html, body').animate({
		        scrollTop: $('#infoContainer').offset().top
		    }, 1000);
		});
	}
}());