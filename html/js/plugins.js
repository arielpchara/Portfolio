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
	
})(jQuery);