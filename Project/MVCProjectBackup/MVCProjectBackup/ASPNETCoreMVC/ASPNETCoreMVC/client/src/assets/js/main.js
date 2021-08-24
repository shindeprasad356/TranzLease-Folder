$("button.close, .bg-wrap .slider-wrap .carousel-indicators li").click(function(){
  $(".bg-wrap .slider-wrap .carousel-inner").toggleClass("close");
});



  $(".contact").hover(function(){
      $(".contact").delay( 8000 ).toggleClass("open");  
  });


var timeoutHandler = null;
$(".wrh .title").hover(function(){
    $( ".contact" ).removeClass('hide'); 
    if (timeoutHandler) clearTimeout(timeoutHandler);

    timeoutHandler = setTimeout(function()
    {
        $( ".contact" ).addClass('hide');

    }, 2000);
});
