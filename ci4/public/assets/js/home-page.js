/*
|==================================================
| Index of combined js files
|==================================================
| * onload.js (time & date)
| * slideMenu.js
| * slider-1.js
|==================================================
*/





"use strict";
/*
|==================================================
| VANILA JS
|==================================================
*/
function is_touch_enabled() {
   return ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0);
}




/*
|==================================================
| JQUERY DEPENDED
|==================================================
*/
$(document).ready(() => {
   /*
   |==================================================
   | * time & date
   |==================================================
   */
   function p(e) { return e.toString().padStart(2, '0'); }
   setInterval(() => {
      var d = new Date(),
         h = d.getHours(),
         m = h >= 12 ? "PM" : "AM";
      (h = (h %= 12) || 12),
      (document.querySelector(".header__time").innerHTML =
         //	["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()] +
         //	", " +
         p(d.getDate()) +
         "-" + ["Jan", "Feb", "Mar", "Apr", "May",
"Jun", "Jul", "Aug", "Sep", "Oct",
"Nov", "Dec"][d.getMonth()] +
         "-" +
         d.getFullYear() +
         " [" + p(h) + ":" +
         p(d.getMinutes()) +
         ":" +
         p(d.getSeconds()) +
         " " + m + " IST]");
   }, 1e3);



   /*
   |==================================================
   | * slideMenu.js
   |==================================================
   */
$(".latest-news").sticky({topSpacing:55,zIndex: 2});

   /*
   |==================================================
   | * slideMenu.js
   |==================================================
   */
   $(".slide__menu").slick({
      slidesToShow: 2,
      autoplay: true,
      centerMode: true,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" ></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" ></i></button>',
      responsive: [
         {
            breakpoint: 568,
            settings: {
               slidesToShow: 2,
               slideToScroll: 2,
               autoplay: true,
               centerPadding: "10px"
            }
			},
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slideToScroll: 2,
               autoplay: true,
               centerPadding: "20px"
            }
			}
		]
   });






   /*
   |==================================================
   | * slider-1.js
   |==================================================
   */
   var time = 5;
   var $bar,
      isPause,
      tick,
      percentTime;
   //pauseBtn = $(".slider-progress .fa-pause"),
   //playBtn = $(".slider-progress .fa-play");

   var sliderOne = $('.slider__1');
   sliderOne.on('beforeChange', function() {
      startProgressbar();
   });

   sliderOne.slick({
      draggable: true,
      speed: 500,
      adaptiveHeight: false,
      dots: true,
      mobileFirst: true,
      pauseOnDotsHover: true,
      cssEase: 'cubic-bezier(0.1, 0.9, 1.0, 0.01)',
      arrows: false
   });
   $bar = $('.slider__1-progressbar');
   if (is_touch_enabled()) {
      sliderOne.on("touchstart", () => {
         pause();
      })
      sliderOne.on("touchend", () => {
         play();
      })
   } else {
      sliderOne.on({
         mouseenter: function() {
            // isPause = true;
            pause();
         },
         mouseleave: function() {
            //isPause = false;
            play();
         }
      })
   }
   //pauseBtn.click(()=>{ pause();}); playBtn.click(()=>{ play();})
   function play() {
      isPause = false;
      //pauseBtn.show();playBtn.hide();
   }

   function pause() {
      isPause = true;
      //pauseBtn.hide();playBtn.show();
   }

   function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
   }

   function interval() {
      if (isPause === false) {
         percentTime += 1 / time; //(time+0.1);
         $bar.css({
            width: percentTime + "%"
         });
         if (percentTime >= 100)
         {
            sliderOne.slick('slickNext');
            startProgressbar();
         }
         play();
      } else {
         pause();
      }
   }

   function resetProgressbar() {
      $bar.css({
         width: 0 + '%'
      });
      clearTimeout(tick);
   }
   startProgressbar();
   // ============== //slider__1 ================ //
});