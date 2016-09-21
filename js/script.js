$("document").ready(function(){
    $('.hover img').mouseover(function() {
        var src = this.src;
        console.log(src);
        
        $(".preview img").attr("src", src);
    });
});