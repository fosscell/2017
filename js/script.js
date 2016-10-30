$("document").ready(function(){
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
        $('.hover img').mouseover(function() {
            var src = this.src;
            $(".preview img").attr("src", src);
        });

        wow = new WOW({
          boxClass: 'wow',      // default
          animateClass: 'animated', // default
          offset: 0,          // default
          mobile: false,       // default
          live: true        // default
        });

        wow.init();

        smoothScroll.init({
            speed: 1500,
            easing: 'easeInOutCubic',
            updateURL: false,
        });

        $('.set, .content')
            .jScrollPane({
                mouseWheelSpeed: 70,
                autoReinitialise: true
            })
            .bind(
                'mousewheel',
                function(e) {
                    e.preventDefault();
                }
            );
    } else {
        $('.preview, .logo').remove();
        
        var images = $('.set').children();
        var remove = [0, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        for(i = 0; i < remove.length; i++) {
            images[remove[i]].remove();
        }
        $('.filler').addClass('divider').removeClass('filler');

        var array = ["FOSSMeet '16 Website", "Why Sponsor Us", "Previous Sponsors", "Reach Us"];

        var j = 0;
        if(screen.width < 800) {
            $("#main-menu li").each(function(i) {
                $(this).text(array[j++]);
            });
        }

        $("#main-menu li").click(function(i) {
            var $menu = $('#main-menu');
            if (this.checked) {
                $menu.hide();
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].checked = false;
                }
            } else {
                $menu.show()
                 if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            }
        });
        
        $('#main-menu').smartmenus();

        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            $mainMenuState.change(function(e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() {
                        $menu.css('display', '');
                    });
                } else {
                    $menu.show().slideUp(250, function() {
                        $menu.css('display', '');
                    });
                }
            });
                // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    }
});

var DisplayMessageInModal = function(heading, message){
  $('.modal-body').html(message);
  $('.modal-title').html(heading);
  $($("#ViewBrochureModal").modal());
};

var DisplaySpecialLink = function(url, desc){
  DisplayMessageInModal(desc, "<iframe src='" + url + "' width='100%' height='100%' />");
};

var PreviewURL = function(url){
  DisplaySpecialLink("https://docs.google.com/gview?embedded=true&url=" + url, "<a href='" + url + "' style='text-decoration: none;' download='FOSSMeet17.pdf'>Download Brochure</a>");
};

smoothScroll.init({
    speed: 1500,
    easing: 'easeInOutCubic',
    updateURL: false,
});

/*$(window).load(function() 
      {       
        $(".page-load-spinner").fadeOut("slow");  
      })
*/

