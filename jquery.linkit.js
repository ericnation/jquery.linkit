/*
 * name: LinkIt
 * author: Eric Nation
 * version: 0.1.0
 * License: MIT
 */

 (function($) {
 	$.fn.linkIt = function (options) {
 		//settings
		var settings = $.extend({
			href    :null,
			text    :null,
			target  :'_self'
		}, options);

		if (settings.href == null) {
			console.log("You need an href options for linkit to work");
			return this;
		}

		return this.each(function() {
			var object = $(this);
			if (settings.text == null) {
				settings.text = object.text();
			}
			object.wrap('<a target="' + settings.target + '" href="' + settings.href + '"</a>').text(settings.text);
		});



 	}
 }(jQuery));