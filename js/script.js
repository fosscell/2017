$(document).ready(function() {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    if (!isMobile.any()) {
        $('.section-head').each(function() {
            var text = $(this).text()
            if(text != "About FOSSMeet") {
                $(this).remove();
            }
        });
        
        $('#fullpage').fullpage({
            menu: '#menu',
            lockAnchors: true,
            anchors:['Main', 'About', 'Events', 'Speakers', 'Sponsors', 'Contact'],
            navigation: true,
            navigationPosition: 'right',
            showActiveTooltip: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            fadingEffect:true,
            faddingEffect:'sections',

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

            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            controlArrows: true,
            verticalCentered: true,
    //        sectionsColor : ['#eae8dd', '#4BBFC3', '#7BAABE', 'whitesmoke', '#f4f2f0'],
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,

            sectionSelector: '.section',
            slideSelector: '.slide',

            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
    };
    
    $('#menu li').click(function(){
        $.fn.fullpage.moveTo($(this).attr('data-menuanchor'), 1);
     });
    
    $( '#menu-btn' ).click(function(){
        $('.responsive-menu').toggleClass('expand');
    });
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
