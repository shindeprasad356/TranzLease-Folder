// var $buoop = {
//   required: {
//       e: -4,
//       f: 0,
//       o: -3,
//       s: -1,
//       c: 0
//   },
//   insecure: true,
//   api: 2021.04
// };

// function $buo_f() {
//   var e = document.createElement("script");
//   e.src = "js/update.min.js";
//   document.body.appendChild(e);
// };
// try {
//   document.addEventListener("DOMContentLoaded", $buo_f, false)
// } catch (e) {
//   window.attachEvent("onload", $buo_f)
// }
setInterval(function() {
  setTimeout(function() {
      $('#overlay').fadeOut();
  }, 3000)
}, 3000);

$(window).load(function() {
  $(".loader").delay(000).fadeOut("slow");
  $("#overlayer").delay(000).fadeOut("slow");
  $('#overlay').fadeOut();


  setInterval(function() {

      $('.firstlside').addClass('animate__backInLeft');
      setTimeout(function() {

          $('#Tranzlease_Logo').addClass('animate__backInUp');
          $('.firstlside').addClass('animate__backInLeft');
      }, 7000)

  }, 6000);


});
//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

      $("#topBtn").fadeIn("slow");
  } else {

      $("#topBtn").fadeOut("slow");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(".about-us").click(function() {
  $(".about-us-menu").toggleClass("opens");
});
$(document).click(function(e) {
  $(".about-us-menu").removeClass("opens");

});
$(".login-btn").click(function() {
  $(".login-btn-menu").toggleClass("opens");
});

$(document).ready(function() {




  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
      $('.scroll-animations .animated').each(function() {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('fadeInLeft');
          }
      });
  });



  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //     document.getElementById("navbar").style.padding = "8px 0px";
  //     // document.getElementById("logo").style.fontSize = "25px";
  //   } else {
  //     document.getElementById("navbar").style.padding = "18px 0px";
  //     // document.getElementById("logo").style.fontSize = "35px";
  //   }
  // }


  // make touch slide
  $('.carousel').on('touchstart', function(event) {
      const xClick = event.originalEvent.touches[0].pageX;
      $(this).one('touchmove', function(event) {
          const xMove = event.originalEvent.touches[0].pageX;
          const sensitivityInPx = 5;

          if (Math.floor(xClick - xMove) > sensitivityInPx) {
              $(this).carousel('next');
          } else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
              $(this).carousel('prev');
          }
      });
      $(this).on('touchend', function() {
          $(this).off('touchmove');
      });
  });

  $(".clients .more").click(function() {
      $(".honeycomb").toggleClass("open");
  });

  // Detect request animation frame
  var scroll = window.requestAnimationFrame ||
      // IE Fallback
      function(callback) {
          window.setTimeout(callback, 1000 / 60)
      };
  var elementsToShow = document.querySelectorAll('.show-on-scroll');

  function loop() {

      Array.prototype.forEach.call(elementsToShow, function(element) {
          if (isElementInViewport(element)) {
              element.classList.add('is-visible');
          } else {
              element.classList.remove('is-visible');
          }
      });

      scroll(loop);
  }

  // Call the loop for the first time
  loop();

  // Helper function from: http://stackoverflow.com/a/7557433/274826
  function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
          (rect.top <= 0 &&
              rect.bottom >= 0) ||
          (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
          (rect.top >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
  }

  if ($(window).width() < 560) {
      $('.technologys .tech').removeClass('inline-photo show-on-scroll right');
  } else {
      $('.technologys .tech').addClass('inline-photo show-on-scroll right');
  }

  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
          menuBtn.classList.add('open');
          menuOpen = true;
      } else {
          menuBtn.classList.remove('open');
          menuOpen = false;
      }
  });

});