/*
|=================================================
| base_layout.js contain following files/features
|=================================================
| * init.js
| * has preloader on page load
| * sidebar.js
|=================================================
*/

"use strict";

window.addEventListener('DOMContentLoaded', (event) => {

   /*
   |=================================================
   | preloader.js
   |=================================================
   */

   //console.log('DOM fully loaded and parsed');
   document.querySelector("body").style.visibility = "visible";

   // fire on Page load
   window.addEventListener('load', (event) => {

      //show preloader until page loading
      $('.preloader').fadeOut(600, function() {
         $(this).remove();
      });

   });















   /*
   |=================================================
   | sidebar.js
   |=================================================
   */

   $(".sidebar-menu .navbar").append($(".menuContent .navbar-nav").clone());
   const nav = $("nav.navbar");
   var navExpandBreakpoint = "";

   function navBreakpoint() {
      return nav.hasClass("navbar-expand-sm") ? (navExpandBreakpoint = "sm", 576) : nav.hasClass("navbar-expand-md") ? (navExpandBreakpoint = "md", 768) : nav.hasClass("navbar-expand-lg") ? (navExpandBreakpoint = "lg", 992) : nav.hasClass("navbar-expand-xl") ? (navExpandBreakpoint = "xl", 1200) : void 0
   }

   function elem(e) {
      return document.querySelector(e)
   }
   $("sidebar").addClass("d-" + navExpandBreakpoint + "-none"), $(document).ready(function() {
      //var e = $(".navbar").outerHeight();
      $("#main__nav").sticky({
         topSpacing: 0
      })
      /*, 
          $(".hamburger").css({
              top: (e - $(".hamburger").outerHeight()) / 2
          });*/
      //$("header").outerHeight(), e = $(".navbar").outerHeight();

      $(document).on("show.bs.dropdown", ".dropdown", function() {
         $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(), $(this).find(".dropdown-toggle").delay(300).addClass("active")
      }), $(document).on("hide.bs.dropdown", ".dropdown", function() {
         $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(), $(this).find(".dropdown-toggle").delay(300).removeClass("active")
      })
   });
   var touchSurface = elem("body"),
      sidebar = elem(".sidebar"),
      sidebarWidth = sidebar.offsetWidth,
      startX = "",
      change = "",
      sidebarOpened = !1,
      minTouchLeft = 30,
      navbarToggler = elem(".navbar-toggler"),
      sidebarOverlay = elem(".sidebar-overlay"),
      hamburgerBtn = elem(".hamburger"),
      content = elem(".content");
   const __SETTING = {
      drawerTrans: "transform 500ms ",
      overlayTrans: "all 1s ease-in 500ms"
   };
   var winWide = $(window).outerWidth();
   if (winWide < navBreakpoint()) {
      function handleStart(e) {
         sidebarOpened || (startX = e.changedTouches[0].clientX) < minTouchLeft && (sidebarOverlay.style.opacity = 0, sidebarOverlay.style.display = "block", sidebar.style.transition = "none", sidebarOverlay.style.transition = "none")
      }

      function handleMove(e) {
         sidebarOpened || startX < minTouchLeft && (change = e.changedTouches[0].clientX - startX) - sidebarWidth < 0 && (sidebar.style.transform = "translateX(" + (change - sidebarWidth) + "px)", sidebarOverlay.style.opacity = change / sidebarWidth)
      }

      function handleEnd(e) {
         sidebarOpened || startX < minTouchLeft && (change < sidebarWidth / 3 ? sidebarClose() : sidebarOpen())
      }

      function sidebarHandlerStart(e) {
         sidebarOverlay.style.display = "block", sidebar.style.transition = "none", sidebarOverlay.style.transition = "none", sidebarOpened && (startX = e.changedTouches[0].clientX)
      }

      function sidebarHandlerMove(e) {
         sidebarOpened && (change = e.changedTouches[0].clientX - startX) < 0 && (sidebar.style.transform = "translateX(" + change + "px)", sidebarOverlay.style.opacity = (sidebarWidth + change) / sidebarWidth)
      }

      function sidebarHandlerEnd(e) {
         sidebarOpened && change < 0 && (change < 0 - sidebarWidth / 3 ? sidebarClose() : sidebarOpen())
      }

      function handleCancel(e) {}

      function sidebarOpen() {
         sidebarOverlay.style.display = "block", sidebar.style.transform = "translateX(0px)", sidebar.style.transition = __SETTING.drawerTrans, sidebarOverlay.style.transition = __SETTING.overlayTrans, sidebarOpened = !0, hamburgerBtn.classList.add("is-active")
      }

      function sidebarClose() {
         sidebarOverlay.style.display = "none", sidebar.style.transform = "translateX(-" + sidebarWidth + "px)", sidebar.style.transition = __SETTING.drawerTrans, sidebarOverlay.style.transition = __SETTING.overlayTrans, sidebarOpened = !1, hamburgerBtn.classList.remove("is-active")
      }

      function sidebarToggle() {
         sidebarOpened ? sidebarClose() : sidebarOpen()
      }
      document.addEventListener("DOMContentLoaded", () => {
         touchSurface.addEventListener("touchstart", handleStart, !1), touchSurface.addEventListener("touchend", handleEnd, !1), touchSurface.addEventListener("touchmove", handleMove, !1), sidebar.addEventListener("touchstart", sidebarHandlerStart, !1), sidebar.addEventListener("touchmove", sidebarHandlerMove, !1), sidebar.addEventListener("touchend", sidebarHandlerEnd, !1)
      }), sidebarOverlay.addEventListener("click", () => {
         sidebarClose()
      }), navbarToggler.addEventListener("click", () => {
         sidebarToggle()
      })
   }






   /*
   |=================================================
   | init.js
   |=================================================
   */
   /*new universalParallax().init({
   	speed: 4
   });*/
   /*var wow = new WOW(
   	{
   	boxClass:     'wow',      // default
   	animateClass: 'animate__animated', // default
   	offset:       120,          // default
   	mobile:       true,       // default
   	live:         true,        // default
   	delay:        300
   	}
   )
   wow.init();*/
   // waves initialization
   //button
   Waves.init();
   Waves.attach('.flat-button', ['waves-button']);
   Waves.attach('.flat-button-light', ['waves-button', 'waves-light']);
   Waves.attach('.float-button', ['waves-button', 'waves-float']);
   Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);

   // icon
   Waves.attach('.flat-icon', ['waves-circle']);
   Waves.attach('.flat-icon-light', ['waves-circle', 'waves-light']);
   Waves.attach('.float-icon', ['waves-circle', 'waves-float']);
   Waves.attach('.float-icon-light', ['waves-circle', 'waves-float', 'waves-light']);

   // box
   Waves.attach('.flat-box', ['waves-block']);
   Waves.attach('.flat-box-light', ['waves-block', 'waves-light']);
   Waves.attach('.float-box', ['waves-block', 'waves-float']);
   Waves.attach('.float-box-light', ['waves-block', 'waves-float', 'waves-light']);
   Waves.attach('.waves-image');

   // navigation 
   Waves.attach('.nav-link', ['waves-block']);
   Waves.attach('.dropdown-item', ['waves-block']);
   //Waves.attach('.nav-link', ['waves-block', 'waves-light']);


   /*
   Waves.attach('#snarl-demo', ['waves-button', 'waves-float']);

   Snarl.setDefaultOptions({
       timeout: 5000
   });

   $('#snarl-demo').click(function() {
       Snarl.addNotification({
           title: 'Snarl Notification',
           text: 'You clicked the Waves button!'
       });
   });

   */
});