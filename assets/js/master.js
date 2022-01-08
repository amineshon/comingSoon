	/* ===== LOADER OVERLAY ===== */

	 jQuery(function ($) {
	'use strict';

	jQuery(document).ready(function ($) {

		/* ===== jQuery Varibles ===== */

			mainSlider();
			ContentSlider();
			testimonialSlider();
			testimonialSliderThree();
			clientSlider();
			blogGridSlider();
			teamSlider();
			parallaxEffect();
			parallaxBackground();

		/* ===== PRELOADER  ===== */

		      $("#loader-overlay").delay(500).fadeOut();
	        $(".loader").delay(1000).fadeOut("slow");

	        $(window).trigger("scroll");
	        $(window).trigger("resize");

	        if (window.location.hash){

	            var hash_offset = $(window.location.hash).offset().top;
	            $("html, body").animate({
	                scrollTop: hash_offset
	            });
	  }


		/* ===== COUNTERS  ===== */

		$('.counter').counterUp({
            delay: 20,
            time: 4000
    });

		/* ===== SKILLS BAR ===== */

    $('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0
    });

    /* ===== Parallax Stellar ===== */


    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: true,
        verticalScrolling: !isMobile.any(),
        scrollProperty: 'scroll',
        responsive: true
    });

		/* ===== PIE CHARTS  ===== */

		$(function() {
				$('.chart-01').easyPieChart({
					easing: 'easeOutBounce',
					barColor: '#212121',
					trackColor: '#eeeeee',
          scaleColor: false,
					scaleLength: 2,
					size: 150, //110
					animate:{
						duration:2000,
						enabled:true
					},
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});

				$('.chart-02').easyPieChart({
					easing: 'easeOutCirc',
					barColor: '#ffffff',
					trackColor: '#212121',
          scaleColor: false,
					scaleLength: 2,
					size: 120, //110
					animate:{
						duration:2000,
						enabled:true
					},
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});

				$('.chart-03').easyPieChart({
					easing: 'easeInQuad',
					barColor: '#BF0731',
					trackColor: '#212121',
          scaleColor: false,
					scaleLength: 2,
					size: 140, //110
					animate:{
						duration:2000,
						enabled:true
					},
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
		});


	/* ===== COUNTDOWN ===== */

	if ($('.countdown').length > 0) {
        $(".countdown").countdown({
            date: "21 dec 2018 12:00:00",
            format: "on"
        });

	}

  /* ===== SLICK SLIDERS ===== */

	/* ~~~ Hero Half Slider ~~~ */
	function mainSlider(){
	$(".default-slider").slick({
        dots: true,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Content Slider ~~~ */
	function ContentSlider(){
	$(".text-content-slider").slick({
        dots: false,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
				fade: true,
 				cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: true,
				  }
				}
  		]
      });
	}

	/* ~~~ Testimonials Slider ~~~ */
	function testimonialSlider(){
	$(".testimonial").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
		centerPadding: '0',
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}

	/* ~~~ Testimonial Slider 3 ~~~ */
	function testimonialSliderThree(){
	$(".testimonial-style-6").slick({
        dots: true,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0',
				responsive: [
		    	{
				  breakpoint: 480,
				  settings: {
					arrows: false,
				  }
				}
  		]
      });
	}

	/* ~~~ Client Slider ~~~ */
	function clientSlider() {
	$(".client-slider").slick({
		slidesToShow: 6,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
		dots:false,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}

	/* ~~~ Team Slider ~~~ */
	function teamSlider() {
	$(".team-slider").slick({
		slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 4000,
		dots:false,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}


	/* ===== ONE PAGE SCROLLER ===== */

	$('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
  });

	$(window).on("scroll", function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop >34){
					$(".nav-scrollspy-onepage").addClass("fixed-menu");
			}else {
					$(".nav-scrollspy-onepage").removeClass("fixed-menu");
			}
	});

	/* ===== TYPE IT ===== */

	$('.type-it').typeIt({
		speed: 100,
		cursor:true,
		breakLines:false,
		lifeLike:true,
		startDelete:false,
		loop:true,
    strings: ['themes', 'apps', 'design']
  });

	$('.type-it-2').typeIt({
		speed: 100,
		cursor:true,
		breakLines:false,
		lifeLike:true,
		startDelete:false,
		loop:true,
    strings: ['parallax', 'particles', 'creative', 'agency', 'marketing']
  });

  /* ===== FIT VIDEOS ===== */
	$(".fit-videos").fitVids();

  /* ===== PARALLAX EFFECTS===== */
	function parallaxEffect() {
    	$('.parallax-effect').parallax();
	}

	function parallaxBackground() {
		$('.parallax-bg').parallaxBackground();
	}

	/* ~~~ Blog Grid Slider ~~~ */
	function blogGridSlider() {
    $(".blog-grid-slider").slick({
				dots: false,
        infinite: true,
        centerMode: true,
				autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
				centerPadding: '0'
		});
	}

	/* ===== SEARCH OVERLAY ===== */

	  var wHeight = window.innerHeight;
	  //search bar middle alignment
	  $('#fullscreen-searchform').css('top', wHeight / 2);
	  //reform search bar
	  jQuery(window).resize(function() {
		wHeight = window.innerHeight;
		$('#fullscreen-searchform').css('top', wHeight / 2);
	  });
	  // Search
	  $('#search-button').on('click', function () {
	 	$("div.fullscreen-search-overlay").addClass("fullscreen-search-overlay-show");
	  });
	  $('a.fullscreen-close').on('click', function () {
		$("div.fullscreen-search-overlay").removeClass("fullscreen-search-overlay-show");
	  });


  /* ===== CONTACT FORM ===== */

	$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "assets/php/contact.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = data.class;
                    var messageText = data.message;

                    var alertBox = '<div class="' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
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


	/* ===== REVOLUTION SLIDER MAIN ===== */

	var revapi347,
	tpj=jQuery;

	tpj(document).ready(function() {

	if(tpj("#rev_slider_1078_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1078_1");
				}else{
					$("#rev_slider_1078_1").show().revolution({
						sliderType:"standard",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"zeus",
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								tmp: '<div class="tp-title-wrap"> <span class="tp-arr-titleholder">{{title}}</span><span class="tp-arr-imgholder"></span></div>',
								left: {
									h_align:"center",
									v_align:"bottom",
									h_offset:-70,
									v_offset:50
								},
								right: {
									h_align:"center",
									v_align:"bottom",
									h_offset:30,
									v_offset:50
								}
							}
							,
							bullets: {
								enable:true,
								hide_onmobile:false,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								direction:"vertical",
								h_align:"right",
								v_align:"center",
								h_offset:40,
								v_offset:50,
								space:15,
								style: 'uranus',
        				tmp: '<span class="tp-bullet-inner"></span>'
							}
						},
						viewPort: {
							enable:false,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[600,600,500,400],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
							type:"mouse",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
			}

			if(tpj("#rev_slider_1078_2").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_1078_2");
						}else{
							$("#rev_slider_1078_2").show().revolution({
								sliderType:"standard",
								jsFileLocation:"revolution/js/",
								sliderLayout:"fullscreen",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
									keyboardNavigation:"off",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
		 							mouseScrollReverse:"default",
									onHoverStop:"off",
									touch:{
										touchenabled:"on",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
									,
									arrows: {
										style:"hebe",
										enable:false,
										hide_onmobile:true,
										hide_under:600,
										hide_onleave:true,
										hide_delay:200,
										hide_delay_mobile:1200,
										tmp: '<div class="tp-title-wrap"> <span class="tp-arr-titleholder">{{title}}</span><span class="tp-arr-imgholder"></span></div>',
										left: {
											h_align:"left",
											v_align:"center",
											h_offset:30,
											v_offset:0
										},
										right: {
											h_align:"right",
											v_align:"center",
											h_offset:30,
											v_offset:0
										}
									}
									,
									bullets: {
										enable:false,
										hide_onmobile:false,
										hide_under:600,
										hide_onleave:true,
										hide_delay:200,
										hide_delay_mobile:1200,
										direction:"horizontal",
										h_align:"center",
										v_align:"bottom",
										h_offset:0,
										v_offset:30,
										space:15,
										style: 'uranus',
		        				tmp: '<span class="tp-bullet-inner"></span>'
									}
								},
								viewPort: {
									enable:false,
									outof:"pause",
									visible_area:"80%",
									presize:false
								},
								responsiveLevels:[1240,1024,778,480],
								visibilityLevels:[1240,1024,778,480],
								gridwidth:[1240,1024,778,480],
								gridheight:[600,600,500,400],
								lazyType:"none",
								parallax: {
									type:"mouse",
									origo:"slidercenter",
									speed:2000,
									levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
									type:"mouse",
								},
								shadow:0,
								spinner:"off",
								stopLoop:"off",
								stopAfterLoops:-1,
								stopAtSlide:-1,
								shuffle:"off",
								autoHeight:"off",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
	}

	/* ===== REVOLUTION SLIDER STUDIO ===== */

	if(tpj("#rev_slider_1174_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1174_1");
				}else{
					$("#rev_slider_1174_1").show().revolution({
						sliderType:"hero",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:400,
							levels:[10,15,20,25,30,35,40,-10,-15,-20,-25,-30,-35,-40,-45,55],
							type:"scroll",
						},
						shadow:0,
						spinner:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "60px",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							disableFocusListener:false,
						}
					});
	}

	if(tpj("#rev_slider_1058_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_1058_1");
                }else{
                    $("#rev_slider_1058_1").show().revolution({
                        sliderType:"hero",
												jsFileLocation:"revolution/js/",
                        sliderLayout:"fullscreen",
                        dottedOverlay:"none",
                        delay:9000,
                        navigation: {
                        },
                        responsiveLevels:[1240,1024,778,480],
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:[1240,1024,778,480],
                        gridheight:[868,768,960,720],
                        lazyType:"none",
                        parallax: {
                            type:"scroll",
                            origo:"slidercenter",
                            speed:1000,
                            levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                            type:"scroll",
                        },
                        shadow:0,
                        spinner:"spinner2",
                        autoHeight:"off",
                        fullScreenAutoWidth:"off",
                        fullScreenAlignForce:"off",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "60",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            disableFocusListener:false,
                        }
                    });
                }


	/* ===== ACCORDIONS ===== */

    $('.accordion-style-01 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ion-android-remove"></i>');
    });

    $('.accordion-style-01 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ion-android-add"></i>');
    });

		$('.accordion-style-02 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ion-android-remove"></i>');
    });

    $('.accordion-style-02 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ion-android-add"></i>');
    });

    $('.accordion-style-03 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('ion-chevron-up').removeClass('ion-chevron-down');
    });

    $('.accordion-style-03 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('ion-chevron-up').addClass('ion-chevron-down');
    });

    $('.accordion-style-04 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('ion-chevron-up').removeClass('ion-chevron-down');
    });

    $('.accordion-style-04 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('ion-chevron-up').addClass('ion-chevron-down');
    });

		$('.accordion-style-05 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('ion-chevron-up').removeClass('ion-chevron-down');
    });

    $('.accordion-style-05 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('ion-chevron-up').addClass('ion-chevron-down');
    });




	/* ===== CBP PORTFOLIO ===== */

	 $(window).on('load', function(){

		 var wow = new WOW({
				offset: 100,
				mobile: false
			  }
			);
			wow.init();


		$('#portfolio-gallery').cubeportfolio({
			filters: '#portfolio-gallery-filter',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'frontRow',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: '',
			mediaQueries: [{
				width: 1500,
				cols: 5
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'overlayBottomAlong',
			displayType: 'bottomToTop',
			displayTypeSpeed: 300,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
		});

		$('#js-grid-masonry-projects').cubeportfolio({
			filters: '#js-filters-masonry-projects',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'foldLeft',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: '',
			mediaQueries: [{
				width: 1500,
				cols: 5
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'zoom',
			displayType: 'fadeIn',
			displayTypeSpeed: 100,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'

		});

	});


	/* === MAGNIFIC POPUP === */

		$('.magnific-lightbox').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			fixedContentPos: false
			// other options
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

	});

	/* ===== BACK TO TOP  ===== */

	$(window).on ('scroll', function(e) {
		if ($(this).scrollTop() >= 50) {
			$('#return-to-top').fadeIn(200);
		} else {
			$('#return-to-top').fadeOut(200);
		}
	});

	$('#return-to-top').on ('click', function(e) {
		$('body,html').animate({
			scrollTop : 0
		}, 500);
	});

	/* ===== GOOGLE MAPS  ===== */

	/* ~~~ Default Map ~~~ */
	if($("#myMap").length>0){var $latitude=42.008315,$longitude=-88.163807,$map_zoom=12,$marker_url="assets/images/pin.png",style=[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],map_options={center:new google.maps.LatLng($latitude,$longitude),zoom:$map_zoom,panControl:!0,zoomControl:!0,mapTypeControl:!0,streetViewControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:style},map=new google.maps.Map(document.getElementById("myMap"),map_options),marker=new google.maps.Marker({position:new google.maps.LatLng($latitude,$longitude),map:map,visible:!0,icon:$marker_url}),contentString='<div id="mapcontent"><p>Grandy Studio</p></div>',infowindow=new google.maps.InfoWindow({maxWidth:320,content:contentString});google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)})}

	/* ~~~ Dark Style Map ~~~ */
	if($("#map-style-2").length>0){var $latitude=42.008315,$longitude=-88.163807,$map_zoom=12,$marker_url="assets/images/pin.png",style=[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}],map_options={center:new google.maps.LatLng($latitude,$longitude),zoom:$map_zoom,panControl:!0,zoomControl:!0,mapTypeControl:!0,streetViewControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:style},map=new google.maps.Map(document.getElementById("map-style-2"),map_options),marker=new google.maps.Marker({position:new google.maps.LatLng($latitude,$longitude),map:map,visible:!0,icon:$marker_url}),infowindow=new google.maps.InfoWindow({maxWidth:320,content:contentString});google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)})}

	/* ~~~ Light Style Map ~~~ */
		if($("#map-style-3").length>0){var $latitude=42.008315,$longitude=-88.163807,$map_zoom=12,$marker_url="assets/images/pin.png",style=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],map_options={center:new google.maps.LatLng($latitude,$longitude),zoom:$map_zoom,panControl:!0,zoomControl:!0,mapTypeControl:!0,streetViewControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:style},map=new google.maps.Map(document.getElementById("map-style-3"),map_options),marker=new google.maps.Marker({position:new google.maps.LatLng($latitude,$longitude),map:map,visible:!0,icon:$marker_url}),infowindow=new google.maps.InfoWindow({maxWidth:320,content:contentString});google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)})}


	});

/*End Jquery*/
});
