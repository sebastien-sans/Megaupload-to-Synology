function send_to_sinology()
{
	var synology_button = document.getElementById('send_to_sinology');
	if (synology_button) synology_button.parentNode.removeChild(synology_button);
	var uri = 'webman/modules/DownloadStation/dlm/downloadman.cgi';
	var params = 'action=add_url_task&desttext=' + encodeURIComponent(destination) + '&urls=' + encodeURIComponent('["' + document.location.href + '"]');
	var res = xh_request('POST', synology_host, uri, params);
}

