if (unsafeWindow.console)
	var log = unsafeWindow.console.log;

if (integration_type != IntegrationEnum.BUTTON) {
	var download = integration_type == IntegrationEnum.BUTTON || confirm('Send to Sinology?');
	if (download) send_to_sinology();
}
MUTOSYN.lib.megaupload.megauploadIntegration();