/* 
 *This is so the page scrolls to the bottom of the science pages when loading. 
 */
$(window).load(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 2000);
});

