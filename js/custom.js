$(document).ready(function () {
// sticky nav scroll

$(window).on('scroll',function() {
  if($(window).scrollTop()){
    $('.scroll-header').addClass('white');
  }
  else{
    $('.scroll-header').removeClass('white');
  }
  
});

// scroll btn
$(function(){
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 1000, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 400, // Animation in speed (ms)
    animationOutSpeed: 400, // Animation out speed (ms)
    scrollText: 'Scroll to top', // Text for element
    activeOverlay:false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});

  // button animation
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");
 
 });

    // counter jq code
    $('.counter').counterUp({
        delay:10,
        time:2000
    });


    // type js start
    var typed = new Typed('.typed', {
      strings: [
        'Web Designer',
        'Web Developer',
        'Full Stack Web Developer',
      ],
      stringsElement: null,
      typeSpeed:50,
      startDelay:20,
      backSpeed: 50,
      smartBackspace: true,
      shuffle: false,
      backDelay: 700,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    
      // count of loopp
      loop: true,
      loopCount:50,
    
      /**
       * @property {boolean} showCursor show cursor
       * @property {string} cursorChar character for cursor
       * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
       */
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    
      /**
       * @property {string} attr attribute for typing
       * Ex: input placeholder, value, or just HTML text
       */
      attr: null,
    
      /**
       * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
       */
      bindInputFocusEvents: false,
    
      /**
       * @property {string} contentType 'html' or 'null' for plaintext
       */
      contentType: 'html',
    
      /**
       * Before it begins typing
       * @param {Typed} self
       */
      onBegin: (self) => {},
    
      /**
       * All typing is complete
       * @param {Typed} self
       */
      onComplete: (self) => {},
    
      /**
       * Before each string is typed
       * @param {number} arrayPos
       * @param {Typed} self
       */
      preStringTyped: (arrayPos, self) => {},
    
      /**
       * After each string is typed
       * @param {number} arrayPos
       * @param {Typed} self
       */
      onStringTyped: (arrayPos, self) => {},
    
      /**
       * During looping, after last string is typed
       * @param {Typed} self
       */
      onLastStringBackspaced: (self) => {},
    
      /**
       * Typing has been stopped
       * @param {number} arrayPos
       * @param {Typed} self
       */
      onTypingPaused: (arrayPos, self) => {},
    
      /**
       * Typing has been started after being stopped
       * @param {number} arrayPos
       * @param {Typed} self
       */
      onTypingResumed: (arrayPos, self) => {},
    
      /**
       * After reset
       * @param {Typed} self
       */
      onReset: (self) => {},
    
      /**
       * After stop
       * @param {number} arrayPos
       * @param {Typed} self
       */
      onStop: (arrayPos, self) => {},
    
      /**
       * After start
       * @param {number} arrayPos
       * @param {Typed} self
       */
      onStart: (arrayPos, self) => {},
    
      /**
       * After destroy
       * @param {Typed} self
       */
      onDestroy: (self) => {}
    });
    
    // type js end


    // aos master scroll effect
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });

    AOS.init({
        useClassNames: true,
        initClassName: false,
        animatedClassName: 'animated',
      });

      // mixitup portfolio gallery
      var mixer = mixitup('.mixer');
      $('.service-section').parallax({imageSrc: 'imgs/bg-img.jpg'});

      


      });

