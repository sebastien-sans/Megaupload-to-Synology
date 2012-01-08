MUTOSYN.utils.loadCss();

MUTOSYN.lib.jQuery.load(function(jQuery){
	$ = jQuery;
	if (integration_type != IntegrationEnum.BUTTON)
	{
		var download = integration_type == IntegrationEnum.BUTTON || confirm('Send to Sinology?');
		if (download) send_to_sinology();
	}
	MUTOSYN.lib.megaupload.megauploadIntegration();
});

// end script scope
})();