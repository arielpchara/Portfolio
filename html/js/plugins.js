(function($) {
	$.fn.parallax = function(scroll) {
		var element = $(this);
		$(scroll).scroll(function() {
			var top = $(scroll).scrollTop();
			element.css({
				backgroundPosition : 'center ' + top/2 + 'px'
			});
		});
		return this;
	};
	
	$.fn.fullHeight = function() {
		$docHeight = $(window).height();
		$headHeight = $("header").height();
		$footHeight = $("footer").height();
		var element = $(this);
		element.css({
			'height' : $docHeight - $footHeight - $headHeight
		});
		$(window).resize(function(){
			element.fullHeight();
		});
		return this;
	};
	
	

	window.addEventListener("hashchange", function(){
		var hash = location.hash;
		$.scrollToHash(hash);
		location.hash = "";
	}, false);
	
	$.scrollToHash = function(hash,time){
		var link = hash.replace('#', '');
		time = time==null?1000:time;
		if( link.search("\/") > 0){
			parts = link.split("/");
			link = parts[0];
		}
		$(document.body).scrollTo($("section[scroll='"+link+"']"), time);
	};
	
	
})(jQuery);