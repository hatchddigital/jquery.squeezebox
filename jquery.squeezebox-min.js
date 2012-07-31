/**
 * Squeezebox jQuery plugin
 *
 * @author: Jimmy Hillis <jimmy@hatchd.com.au>
 * @version: 0.1
 * @see: http://github.com/hatchddigital/jquery.squeezebox
 *
 * The following code builds a required JS object and jQuery
 * function for an accordian-like function. It allows a set of
 * content to show a single area at once, sliding up like a
 * squeezebox, when switching between them.
 *
 */(function(e){var t=window.console,n=function(e){this.that=this;this.options=e};e.fn.squeezebox=function(t){t=t||{};return this.each(function(){var t=e(this),r=new n,i=t.find(".squeezebox-pleat")||[],s=i.find(".squeezebox-content"),o=!1;e(s).each(function(){e(this).css("height",e(this).height())});s.addClass("collapse");o=t.find(".current");o.length||(o=t.find(".squeezebox-pleat").first().addClass("current").removeClass("collapse"));o.addClass("current").find(".squeezebox-content").removeClass("collapse");i.find(".squeezebox-head").on("click",function(t){var n=e(this),r=n.parents(".squeezebox-pleat");t.preventDefault();i.removeClass("current");s.addClass("collapse");n.next(".squeezebox-content").removeClass("collapse");r.addClass("current")})})}})(window.jQuery);