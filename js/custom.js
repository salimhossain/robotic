(function ($, Drupal) {

  "use strict";
  
  Drupal.behaviors.zircon = {
    attach: function (context, settings) {
      
      $('.btn-btt').smoothScroll({speed: 300}).hide();
      
      $(window).scroll(function() {
        //$('.btn-btt').hide();
        //alert('ssh');
        if($(window).scrollTop() > 50) {
            $('.btn-btt').show();
            //$('#navbar').removeClass('navbar-static-top');
            $('#navbar').addClass('scrolled');
          }
          else {
            $('.btn-btt').hide();
            $('#navbar').removeClass('scrolled');
          }
     }).resize(function(){
        if($(window).scrollTop() > 50) {
            $('.btn-btt').show();
          }
          else {
            $('.btn-btt').hide();
          }
      }); 


    $('.dropdown-toggle').click(function() {
      var location = $(this).attr('href');
      window.location.href = location;
      return false;
    });

    $('.carousel-indicators li').click(function(e){
        e.stopPropagation();
      $('#roboticCarousel').carousel($(this).data('slide-to')-1); 
    });

    // Sticky header top dynamic padding.
    var headerHight = jQuery( "#navbar" ).height();
    jQuery("header#navbar + div").css("margin-top", headerHight + "px");


    }
  };
})(jQuery, Drupal);


