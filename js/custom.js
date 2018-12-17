/* 
=======================================
   Work section
======================================= 
*/
$(function() {
   $('#work').magnificPopup({
      delegate: 'a',
      type:'image',
      gallery: {
         enabled: true
      }
   });
 });

 /* 
=======================================
   Team section
======================================= 
*/

$(function(){
   $("#team-members").owlCarousel({
      autoplay: true,
      items: 3,
      loop: true,
      smartSpeed: 700,
      autoplayHoverPause: true
   });
})