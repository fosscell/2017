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