//scrollify//
$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      updateHash:  false,
      scrollbars:  true,
	  touchScroll: true,
	  easing: "easeOutExpo",
	  offset : 0,
	  scrollSpeed: 1000,
    });
});
//Hamburger menu///
function openMenu() {
  document.getElementById('navbar').style.height = "100%"
}
function closeMenu() {
  document.getElementById('navbar').style.height = "0%"
}
//smooth scroll//
$(function(){
    $('.menu-item a, .scroll-down a').on('click',function(){
        $('html,body').animate({
           scrollTop: $($.attr(this,'href')).offset().top
        },1000);
        return false
    });
});