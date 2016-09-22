$("document").ready(function(){
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

    $('.set, .content, .grid')
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
  DisplaySpecialLink("https://docs.google.com/gview?embedded=true&url=" + url, "<a href='" + url + "' style='text-decoration:none;' download='true'>Download Brochure</a>");
};
