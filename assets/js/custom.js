/**
 * Add Javascript
 */

jQuery(document).ready(function($) {

	$("#main-navigation .sf-menu, #main-navigation ul.menu, #main-navigation ul.main-menu").wrap("<div class=\'meanmenu-wrapper\'></div>");
	$("#main-navigation .meanmenu-wrapper").meanmenu({
		meanScreenWidth: "767",
		meanRemoveAttrs: true,
		meanMenuContainer: "#header-inside",
		meanMenuClose: ""
	});

  $("#main-navigation ul.sf-menu").supersubs({
    minWidth: 12,
    maxWidth: 17,
    extraWidth: 1
  }).superfish();

	var	headerHeight = $("#header").height();
	$(window).scroll(function() {
	if(($(this).scrollTop() > headerHeight) && ($(window).width() > 767)) {
		$("body").addClass("onscroll");
		$("body").css("paddingTop", (headerHeight)+"px");
		if( $(this).scrollTop() > headerHeight+40 ) {
		$("body").addClass("show");
		$("#header-inside-right img").addClass("hiddden");
		}
	} else {
		$("body").removeClass("onscroll");
		$("body").removeClass("show");
		$("#header-inside-right img").removeClass("hidden");
		$("body").css("paddingTop", (0)+"px");
		$("body.logged-in").css("paddingTop", (64)+"px");
	}
	});

});
