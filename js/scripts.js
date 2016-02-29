$(document).ready(function() {
	
 FastClick.attach(document.body);
 
 $('.n-section6__btn').click(function(){
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
 });

 var slider1 = new Swiper('.n-section1__slider',{
  	spaceBetween: 620,
  	speed: 1400,
  	loop: true,
  	effect: 'fade',
  	runCallbacksOnInit: false,
  	fade: {
	  crossFade: true
	},
	onSlideChangeStart: function(swiper) {
		$('.n-first').stop().animate({"opacity":0},200,function(){			
			$('.n-first').addClass('rotate-1');
			$('.n-first').css('opacity',1);
		});
		
		$('.n-second').stop().animate({"opacity":0},600,function(){			
			$('.n-second').addClass('rotate-1');
			$('.n-second').css('opacity',1);
		});				
	},
	onSlideChangeEnd: function(swiper) {
		$('.n-first').removeClass('rotate-1');
		$('.n-second').removeClass('rotate-1');
	},
  	nextButton: '.n-section1__arrR',
    prevButton: '.n-section1__arrL',
    breakpoints: {	    
	    1280: {
	      spaceBetween: 120
	    }
	  }
  });
  
  var slider2 = new Swiper('.slider2_1',{
  	speed: 500,
  	spaceBetween: 0,
  	slidesPerView: 6,
  	nextButton: '.slider2_1-r',
    prevButton: '.slider2_1-l',
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
	    }
	    
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
	    }  
	  }); 
  }
  
  if (bowser.msie) {
    var slider5_2 = new Swiper('.slider2',{
	  	spaceBetween: 880,
	  	speed: 500,	  	
	  	loop: true,
	  	pagination: '.slider2pag',
        paginationClickable: true,	  	
	    runCallbacksOnInit: false,
	  	onSlideChangeStart: function() {
	    	$('.slider2pic').find('img').stop().animate({'opacity':0},'slow');
	    },
	    onSlideChangeEnd: function(swiper) {
	    	for (var i=0; i<swiper.slides.length; i++) {
	    		var length = swiper.slides[i].className.split(' ').length;
	    		var slide = swiper.slides[i].className.split(' ')[length-1];
	    		if (slide == "swiper-slide-active") {
	    			var src = swiper.slides[i].getAttribute('data-pic');
	    			$('.slider2pic').find('img').attr('src',src);
	    			$('.slider2pic').find('img').stop().animate({'opacity':1},'slow');
	    		}	    	
	    	}	    	
	    }
	    
	  }); 
  }  else {
	  var slider5_2 = new Swiper('.slider2',{
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
	  	pagination: '.slider2pag',
        paginationClickable: true,	  	
	    runCallbacksOnInit: false,
	    onSlideChangeStart: function() {
	    	$('.slider2pic').find('img').stop().animate({'opacity':0},'slow');
	    },
	    onSlideChangeEnd: function(swiper) {
	    	for (var i=0; i<swiper.slides.length; i++) {
	    		var length = swiper.slides[i].className.split(' ').length;
	    		var slide = swiper.slides[i].className.split(' ')[length-1];
	    		if (slide == "swiper-slide-active") {
	    			var src = swiper.slides[i].getAttribute('data-pic');
	    			$('.slider2pic').find('img').attr('src',src);
	    			$('.slider2pic').find('img').stop().animate({'opacity':1},'slow');
	    		}	    	
	    	}	    	
	    }  
	  }); 
  }
  
  if (bowser.msie) {
    var slider5_3 = new Swiper('.slider3',{
	  	spaceBetween: 880,
	  	speed: 500,	  	
	  	loop: true,
	  	pagination: '.slider3pag',
        paginationClickable: true,	  	
	    runCallbacksOnInit: false,
	  	onSlideChangeStart: function() {
	    	$('.slider3pic').find('img').stop().animate({'opacity':0},'slow');
	    },
	    onSlideChangeEnd: function(swiper) {
	    	for (var i=0; i<swiper.slides.length; i++) {
	    		var length = swiper.slides[i].className.split(' ').length;
	    		var slide = swiper.slides[i].className.split(' ')[length-1];
	    		if (slide == "swiper-slide-active") {
	    			var src = swiper.slides[i].getAttribute('data-pic');
	    			$('.slider3pic').find('img').attr('src',src);
	    			$('.slider3pic').find('img').stop().animate({'opacity':1},'slow');
	    		}	    	
	    	}	    	
	    }
	    
	  }); 
  }  else {
	  var slider5_3 = new Swiper('.slider3',{
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
	  	pagination: '.slider3pag',
        paginationClickable: true,	  	
	    runCallbacksOnInit: false,
	    onSlideChangeStart: function() {
	    	$('.slider3pic').find('img').stop().animate({'opacity':0},'slow');
	    },
	    onSlideChangeEnd: function(swiper) {
	    	for (var i=0; i<swiper.slides.length; i++) {
	    		var length = swiper.slides[i].className.split(' ').length;
	    		var slide = swiper.slides[i].className.split(' ')[length-1];
	    		if (slide == "swiper-slide-active") {
	    			var src = swiper.slides[i].getAttribute('data-pic');
	    			$('.slider3pic').find('img').attr('src',src);
	    			$('.slider3pic').find('img').stop().animate({'opacity':1},'slow');
	    		}	    	
	    	}	    	
	    }  
	  }); 
  }
  
  
  var slider6 = new Swiper('.n-section8__slider__container',{
  	spaceBetween: 620,
  	speed: 800,
  	loop: true,
  	nextButton: '.n-section8__arrR',
    prevButton: '.n-section8__arrL',
    
  });
  $('.n-modal__close').click(function(){
  	$('.n-modal').animate({'right':500 * -1},700,'easeInOutCubic');
  });
  
  $('.popup').click(function(e){
  	e.preventDefault();
  	//$('.n-modal').css('top',$(document).scrollTop());
  	$('.n-modal').animate({'right':0},700,'easeInOutCubic');
  	/*$(this).tooltipster('show',function(){
  		alert(1);
  	});*/
  });
  
  /*$(document).tooltip({
  	position: { my: "center bottom+50", at: "center bottom" }, 	
  });*/
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
  
  
    
});