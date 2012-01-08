MUTOSYN.lib = MUTOSYN.lib || {};

(function(){

	// class jQuery
	MUTOSYN.lib.jQuery = {
		_init: function()
		{
			// Is it our jQuery or website's
			var owned = typeof unsafeWindow.jQuery == 'undefined';

			if (owned)
			{
				var head = document.getElementsByTagName('head')[0] || document.documentElement;

				var script = document.createElement('script');
				script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
				script.type = 'text/javascript';
				script.async = true;
				head.insertBefore(script, head.firstChild);
			}
			return owned;
		},

		_waitLoop: function(owned, callback)
		{
			if (typeof unsafeWindow.jQuery == 'undefined')
			{
				window.setTimeout(function(){ jQueryWaitLoop(jQueryOwnage, callback); }, 100);
				return;
			}
			callback(owned ? unsafeWindow.jQuery.noConflict(true) : unsafeWindow.jQuery);
		},

		load: function(callback)
		{
			self._waitLoop(self._init(), callback);
		}
	};

	var self = MUTOSYN.lib.jQuery;
})();
