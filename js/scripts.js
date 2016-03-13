
$(document).ready(function() {
	
 jQuery.scrollSpeed(100, 800);
	
 FastClick.attach(document.body);
 
 function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
 }
 
 
 /*$('.n-section6__btn').click(function(){
 	$('.n-section6__items').css('height','auto'); 
 	$('.n-section6__bg').parallax('destroy');
 	$('.n-section6__bg').parallax({
	  	imageSrc: 'img/wall.png',
	  	positionX: '10px',
	  	positionY: '0px',
	  	iosFix: true,
	  	msieFix: true,
	  	androidFix: true
	  });	
 });*/

 function mobpop() {
 	if (isMobileWidth()) {
 		$('.mobpop').css('visibility','hidden');
 		$('.mobpop').css('left','-100%');
 		$('#page').css('height','auto');
 	}   	    	
 }
 
 function restoreMenu() {
 	if (!isMobileWidth()) {
		/*$('.n-mob-list').css({'left':'0'});    		
		$('.n-mob-list').css('visibility','visible');*/	
		$('.parallax-mirror').show();
		$('.sections').show();	    	   			
	}
	if (isMobileWidth()) {
		$('.n-mob-list').css({'left':'-100%'});    		
		$('.n-mob-list').css('visibility','hidden');			    	   			
	}
 }
 
 $(window).on('resize',mobpop);
 $(window).on('resize',restoreMenu);
 
 function windowOpen($window) {
 	if (isMobileWidth()) {
	  	if ($window.css('visibility') == 'hidden') {	    		    	
				$window.css('visibility','visible');								
		    	$window.animate({'left':'0px'},'300',function(){
		    		$('#page').css('height',parseInt($window.find('.n-mob__container').outerHeight()+100));	
		    		$('.parallax-mirror').hide();
					$('.sections').hide();
					//$('.n-mob-menu').css('position','absolute');
					$('html, body').css({'overflow':'hidden'});    		
		    	});    	
	  	} else {
	  		$('.parallax-mirror').show();
			$('.sections').show();
	  		$window.animate({'left':'-100%'},'300',function(){
	  			$window.css('visibility','hidden');
	  			$('.n-mob-menu').css('position','fixed');
	  			$('html, body').css({'overflow':'visible'});   			  			
	  		});
	  		$('#page').css('height','auto'); 
	  	};
 	}
 }
 
 $('.burger').click(function(){
 	$(this).toggleClass('burger-active');
 	windowOpen($('.n-mob-list'));
 });

 var effectReady = false;
 var effectTimer;
 var delay = 50;
 
 function append($oldC, $container, word, $head) { 
  	$container.append(word);  	
  	addEffect($container, callback, $oldC, $head); 	
  }
  
  var addEffect = (function() {
  	var count = 0; 	
  	 	
  	return function($container, callback, $oldC, $head) {
  		var length = $container.find('i').length;
  		var words = $oldC;
  		if (effectReady) {
  			count = 0;
  			effectReady = false;
  			clearTimeout(effectTimer);
  		}
  		effectTimer = setTimeout(function(){		 		
			  $container.find('i').eq(count).addClass('in');  		
			  if (length != count) {
			  	callback(words, $container, $head);
			  } else {
			  	toggleWords(words, $head);
			  }		  		
			  count++;		
  		},delay);	
  	};
  })();
  
  function callback(words, $container, $head) { 	
  	addEffect($container, callback, words, $head);
  };
  
  function done() {
  	effectReady = true;
  	console.log('готово');
  	animateHead($('.n-effect2'));
  }
  
 var toggleWords = (function() {
  	var count = 0;	
	return function(words, $head) {		
		if (effectReady) {
  			count = 0;
  		}   				
  				
		var length = words.length;		
		if (count < length) {			
			var word = singleWord(words[count]);
			if ($head.hasClass('n-effect')) {
				append(words, $('.n-section1__infoblock__header').find('b'), word, $head);
			}
			if ($head.hasClass('n-effect2')) {				
				append(words, $('.n-section1__infoblock__info').find('b'), word, $head);
			}	
			
		} else {
			done();		
			return;
		}
		count++;
	};
	
 })();
   
  function animateHead($head) {
   	var $container = $head.find('b');
   	var words = $container.html().split('<rt>');  	
   	toggleWords(words, $head);		
  }
   
  function singleWord($word) {
   	var tmp = $word.match(/(<([^>]+)>)/ig);
   	var word = $word.replace(/(<([^>]+)>)/ig, '').split('');
   	  	
   	var wordTransform = word.map(function(item) {  			
	   	var tag = '<i>' + item + '</i>';
	   	return tag; 			
    });
    
   	wordTransform.unshift(tmp[0]);
   	wordTransform.push(tmp[1]);
   	wordTransform.push(' ');
   		
   	return wordTransform.join('');
  }
     
 var slider1 = new Swiper('.n-section1__slider',{
  	spaceBetween: 620,
  	speed: 1400,
  	loop: true,
  	runCallbacksOnInit: false,
  	resistance: false,
  	fade: {
	  crossFade: true
	},
	onInit: function(swiper) {
		for (var i=0; i<swiper.slides.length; i++) {
		   	var length = swiper.slides[i].className.split(' ').length;
		   	var slide = swiper.slides[i].className.split(' ')[length-1];
		   	if (slide == "swiper-slide-active") {
		   		var index = swiper.slides[i].getAttribute('data-swiper-slide-index');		   		
		   		animateHead($('.n-effect').eq(index));	   		
		   	}	    	
	    }
	},
	onSlideChangeStart: function(swiper) {
		$('.n-section1__infoblock__header').find('b').animate({'opacity':0},300,function(){
			$(this).html(' ');
		});
		$('.n-section1__infoblock__info').find('b').animate({'opacity':0},300,function(){
			$(this).html(' ');
		});								
	},
	onTouchStart: function(swiper) {
				
	},
	onSlideChangeEnd: function(swiper) {
		$('.n-section1__infoblock__header').find('b').html('');
		$('.n-section1__infoblock__header').find('b').css({'opacity':1});
		$('.n-section1__infoblock__info').find('b').html('');
		$('.n-section1__infoblock__info').find('b').css({'opacity':1});
		effectReady = true;	
		clearTimeout(effectTimer);	
		for (var i=0; i<swiper.slides.length; i++) {
		   	var length = swiper.slides[i].className.split(' ').length;
		   	var slide = swiper.slides[i].className.split(' ')[length-1];
		   	if (slide == "swiper-slide-active") {
		   		var index = swiper.slides[i].getAttribute('data-swiper-slide-index');		   		
		   		animateHead($('.n-effect').eq(index));		   			
		   	}	    	
	    }
	},
	
  	nextButton: '.n-section1__arrR',
    prevButton: '.n-section1__arrL',
    breakpoints: {	    
	    1280: {
	      spaceBetween: 120
	    }
	  }
  });
  
  function showContent(arg) {
  	$('.n-section1__infoblock__header').html(arg);
  }
  
  function destroyContent(arg) {
  	arg.find('.n-section1__infoblock__header').html(' ');
  }       
  
  
  
  var slider2 = new Swiper('.slider2_1',{
  	speed: 500,
  	spaceBetween: 0,
  	slidesPerView: 6,
  	nextButton: '.slider2_1-r',
    prevButton: '.slider2_1-l',
    onTouchMove: function(swiper) {
    	$('.popup').tooltipster('hide');
    },
    breakpoints: {
    	/*440: {
	      slidesPerView: 1,
	    },*/
    	600: {
	      slidesPerView: 2,
	    },	
    	760: {
	      slidesPerView: 3,
	    },
    	1024: {
	      slidesPerView: 4,
	    },    
	    1280: {
	      slidesPerView: 5,
	    }
	  }
  });

  var slider2 = new Swiper('.slider2_2',{
  	speed: 500,
  	spaceBetween: 0,
  	slidesPerView: 6,
  	nextButton: '.slider2_2-r',
    prevButton: '.slider2_2-l',   
    breakpoints: {
    	440: {
	      slidesPerView: 1,
	    },
    	600: {
	      slidesPerView: 2,
	    },	
    	760: {
	      slidesPerView: 3,
	    },
    	1024: {
	      slidesPerView: 4,
	    },    
	    1280: {
	      slidesPerView: 5,
	    }
	  }
  });
  if (bowser.msie) {
    var slider5_1 = new Swiper('.slider1',{
	  	spaceBetween: 880,
	  	speed: 500,	  	
	  	loop: true,
	  	pagination: '.slider1pag',
        paginationClickable: true,	  	
	    runCallbacksOnInit: false,
	  	onSlideChangeStart: function() {
	    	$('.slider1pic').find('img').stop().animate({'opacity':0},'slow');
	    },
	    onSlideChangeEnd: function(swiper) {
	    	for (var i=0; i<swiper.slides.length; i++) {
	    		var length = swiper.slides[i].className.split(' ').length;
	    		var slide = swiper.slides[i].className.split(' ')[length-1];
	    		if (slide == "swiper-slide-active") {
	    			var src = swiper.slides[i].getAttribute('data-pic');
	    			$('.slider1pic').find('img').attr('src',src);
	    			$('.slider1pic').find('img').stop().animate({'opacity':1},'slow');
	    		}	    	
	    	}	    	
	    },
	    onTransitionStart: function(swiper) {
			console.log(swiper.translate);
		},
	    
	  }); 
  }  else {
	  var slider5_1 = new Swiper('.slider1',{
	  	spaceBetween: 180,
	  	speed: 500,
	  	effect: 'cube',
	  	cube: {
	         shadow: false,
	         slideShadows: false,
	         shadowOffset: 20,
	         shadowScale: 0.94
	    },
	  	loop: true,
	  	pagination: '.slider1pag',
        paginationClickable: true,	  	
	    runCallbacksOnInit: false,
	    onSlideChangeStart: function() {
	    	$('.slider1pic').find('img').stop().animate({'opacity':0},'slow');
	    },
	    onSlideChangeEnd: function(swiper) {
	    	for (var i=0; i<swiper.slides.length; i++) {
	    		var length = swiper.slides[i].className.split(' ').length;
	    		var slide = swiper.slides[i].className.split(' ')[length-1];
	    		if (slide == "swiper-slide-active") {
	    			var src = swiper.slides[i].getAttribute('data-pic');
	    			$('.slider1pic').find('img').attr('src',src);
	    			$('.slider1pic').find('img').stop().animate({'opacity':1},'slow');
	    		}	    	
	    	}	    	
	    },
	    onTouchMove: function(swiper, event) {
	    	console.log(swiper.translate);
	    },
	    onTransitionStart: function(swiper) {
			
		},  
	  }); 
  }
  
  //slider5_1.setWrapperTranslate(350);
  var controller = new ScrollMagic.Controller({
  	globalSceneOptions: {
		triggerHook: 'onLeave'
	}
  });
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 700})
  .setPin("#pin1")
  //.addIndicators()
  .addTo(controller);
  
  scene.on('progress',function(event) {
  	console.log(event.progress);
  });
  
  //console.log(scene.progress());
  
  
  var slider6 = new Swiper('.n-section8__slider__container',{
  	spaceBetween: 620,
  	speed: 800,
  	loop: true,
  	nextButton: '.n-section8__arrR',
    prevButton: '.n-section8__arrL',
    
  });
  $('.n-modal__close').click(function(){
  	$('.n-modal').animate({'right':550 * -1},700,'easeInOutCubic');
  	$('.n-modal').removeClass('pop-active');
  });
  
  $('.popup').click(function(e){
  	e.preventDefault();
  	$('.n-modal__inside').css('min-height',$('.n-modal__container').outerHeight());
  	//$('.n-modal').css('top',$(document).scrollTop());
  	if ($('.n-modal').hasClass('pop-active')) {
  		$('.n-modal').removeClass('pop-active');
  		$('.n-modal').animate({'right':550 * -1},700,'easeInOutCubic',function(){
  			$('.n-modal').animate({'right':0},700,'easeInOutCubic');
  			$('.n-modal').addClass('pop-active');
  		});
  	} else {
	  	$('.n-modal').addClass('pop-active');
	  	$('.n-modal').animate({'right':0},700,'easeInOutCubic');
  	}
  	/*$(this).tooltipster('show',function(){
  		alert(1);
  	});*/
  });
  
  
 $('.popup').tooltipster({
 	interactive: true,
 	position: "bottom"
 });
 
 var tooltip2 = $('.popup').tooltipster({
 	content: 'ДЕТАЛИ',
 	multiple: true,
 	trigger: 'click',
 	position: "bottom"
 });
  
  $('.n-section2__bg').parallax({
  	imageSrc: 'img/wall.png',
  	positionX: '120px',
  	positionY: '0px',
  	iosFix: true,
  	msieFix: true,
  	androidFix: true
  });
  
  $('.n-section4__bg').parallax({
  	imageSrc: 'img/wall.png',
  	positionX: '10px',
  	positionY: '0px',
  	iosFix: true,
  	msieFix: true,
  	androidFix: true
  });
  $('.n-section5__bg').parallax({
  	imageSrc: 'img/wall.png',
  	positionX: '10px',
  	positionY: '0px',
  	iosFix: true,
  	msieFix: true,
  	androidFix: true
  });
  $('.n-section6__bg').parallax({
  	imageSrc: 'img/wall.png',
  	positionX: '10px',
  	positionY: '0px',
  	iosFix: true,
  	msieFix: true,
  	androidFix: true
  });
  $('.n-section8__bg').parallax({
  	imageSrc: 'img/wall.png',
  	positionX: '10px',
  	positionY: '0px',
  	iosFix: true,
  	msieFix: true,
  	androidFix: true
  });
  
  function fixMenu() {
  	if ($('.tofix').offset().top > 50) {
  		$('.tofix').addClass('tofix-active');
  	} else {
  		$('.tofix').removeClass('tofix-active');
  	}
  	if ($('.tofix').offset().top >= $('.n-section3').offset().top) {
  		$('.n-section3').addClass('tofix2');
  	}	
  	if ($('.n-section3').offset().top < $('#lastpos').offset().top) {
  		$('.n-section3').removeClass('tofix2');
  	}
  }
  
  $(document).on('scroll',function(){
  	fixMenu();	
  });
    
});