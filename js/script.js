$("document").ready(function(){
    $('.hover img').mouseover(function() {
        var src = this.src;
        $(".preview img").attr("src", src);
    });
    
    $('.set')
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