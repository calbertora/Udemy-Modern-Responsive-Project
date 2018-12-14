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
   $("#team-members").owlCarousel();
});