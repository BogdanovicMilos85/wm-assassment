(function ( $ ) {
	'use strict';

	$( document ).ready(
		function () {

      $(".header-inner .icon").click(function(){
        $("#links").toggle();
      });

      $(".header-inner .search-icon").click(function(){
        $("#search-input").toggle();
      });

      $(window).on("scroll", function() {
        let fromTop = $(window).scrollTop();
      
          $(".footer-icon-link--icon-to-top").toggleClass("down", (fromTop > 300));
      });

      $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
      
          $(".footer-icon-link--icon-to-top").toggleClass("down", (fromTop > 300));
      });

		}
	);

})( jQuery );