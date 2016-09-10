$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: true,
        anchors:['Main', 'About', 'Events', 'Speakers', 'Sponsors', 'Location'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        fadingEffect:true,
        faddingEffect:'sections',
        
        //Scrolling
        continuousHorizontal:true,
        scrollDelay: 2000,
        css3: true,
        scrollingSpeed: 900,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 4000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
//        sectionsColor : ['#eae8dd', '#4BBFC3', '#7BAABE', 'whitesmoke', '#f4f2f0'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
    
    $( '#menu-btn' ).click(function(){
        $('.responsive-menu').toggleClass('expand');
    });
    
    $('#menu li').click(function(){
         $.fn.fullpage.moveTo($(this).attr('data-menuanchor'), 1);
     });
    mapConfig();
});

   $("#lightSlider").lightSlider({
        item:4,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });

hs.graphicsDir = 'img/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.wrapperClassName = 'dark borderless floating-caption';
hs.fadeInOut = true;
hs.dimmingOpacity = .75;

// Add the controlbar
if (hs.addSlideshow) hs.addSlideshow({
    //slideshowGroup: 'group1',
    interval: 5000,
    repeat: false,
    useControls: true,
    fixedControls: 'fit',
    overlayOptions: {
        opacity: .6,
        position: 'bottom center',
        hideOnMouseOut: true
    }
});

var RequestData = function(type, URL, formData, callBack){
  // create a XHR object
  var xhr = new XMLHttpRequest();
  // open the XHR object in asynchronous mode
  xhr.open(type, URL, true);
  /*
    if(type == "POST"){
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');
    }
  */
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // OK! we have a successful response.
      var response = xhr.responseText;
      //console.log('OUTPUT: ' + response);
      // do something else with the response
      callBack(URL, response);
    }
  };
  // GET or POST the URL according to type
  if(type == "GET"){
    xhr.send();
  }
  if(type == "POST"){
    xhr.send(formData);
  }
};
if(document.getElementById('obfuscaytedEMailID')){
    document.getElementById('obfuscaytedEMailID').innerHTML = String.fromCharCode(105,110,102,111,64,102,111,115,115,109,101,101,116,46,105,110);
}
var SENDMAIL_URL = "./lib/send-mail.php";

var SendEmail = function(){
  var formElement = document.querySelector("#contactform");
  var formData = new FormData(formElement);
  RequestData("POST", SENDMAIL_URL, formData, function(u, r){
    if(r.indexOf("success") != -1){
      alert("we are processing your update, and will get back to you as soon as possible");
    }
    else{
      alert("error(s) occured\n-----\n" + r + "\n-----\n");
    }
  });
};
