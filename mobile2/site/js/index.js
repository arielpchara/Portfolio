
var flipsnap;
var ajuste = function() {
	$docWidth = $(window).width();
	$docHeight = $(window).height();
	$headHeight = $("#header").height();
	$footHeight = $("#footer").height();
	$(".page").css({
		'width' : $docWidth,
		'height' : $docHeight - $footHeight - $headHeight
	});
	$(".flipsnap").css({
		'width' : $docWidth*5
	});
	flipsnap = Flipsnap('.flipsnap');
};


$(function(){
	
	ajuste();
	$(window).resize(ajuste);
	
	window.menu = $("#menu");
	window.header = $("#header");
	window.header.find("a.voltar").click(function(){
    	flipsnap.toPrev();
	});
	
	window.header.find("a.menu").click(function(){
		window.menu.toggleClass('left center');
	});
	
	window.footer = $("#footer");
	window.footer.find(".content>a").click(function(){
		console.log()
		var i = $(this).index("#footer .content>a");
		flipsnap.moveToPoint(i);
		window.menu.removeClass('center').addClass('left');
	});
	
	FastClick.attach(document.body);
});
