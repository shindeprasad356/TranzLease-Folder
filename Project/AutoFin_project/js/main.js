$(document).ready(function() {
  $("button.close, .bg-wrap .slider-wrap .carousel-indicators li").click(function(){
  $(".bg-wrap .slider-wrap .carousel-inner").toggleClass("close");
});

// $(".form-check.checkbox-rounded").click(function(){
//   $(".top-btn-wrap .fac-car").addClass("show");
// });


  $(".contact").hover(function(){
      $(".contact").delay( 8000 ).toggleClass("open");  
  });


// var timeoutHandler = null;
// $(".wrh .title").hover(function(){
//     $( ".contact" ).removeClass('hide'); 
//     if (timeoutHandler) clearTimeout(timeoutHandler);

//     timeoutHandler = setTimeout(function()
//     {
//         $( ".contact" ).addClass('hide');

//     }, 2000);
// });

// $('#car-card-slider').bind('mousewheel', function() {
//     $(this).carousel('next');
// });




$('#car-card-slider').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
         $(this).carousel('prev');
    } else {
       $(this).carousel('next');
    }
});


 
$(".form-check-input").prop("checked", false);
    $(".form-check-input").click(function () {

        if ($(this).is(":checked")) {

            //checked
            $(this).addClass("selected");
            $(".top-btn-wrap .fac-car").addClass("show");

        } else {
            //unchecked
            $(this).removeClass("selected");
            $(".top-btn-wrap .fac-car").removeClass("show");
        }

    })  
});




if (navigator.userAgent.indexOf("Firefox") != -1)
{
  // do something
  $(window).on('wheel', function(event){

    // deltaY obviously records vertical scroll, deltaX and deltaZ exist too
    if(event.originalEvent.deltaY < 0){
        // wheeled up
       
        $('#car-card-slider').carousel('prev');
    }
    else {
        // wheeled down
         $('#car-card-slider').carousel('next');
    }
});

}

$(".plan-details-section .card-view .btn-wrap .close-fullscreen").click(function(){
  $(".plan-details-section .card-view").toggleClass("full-screen");
  $(".plan-details-section .card-view .btn-wrap .close-fullscreen").attr("title", "Minimize Scrren");
});