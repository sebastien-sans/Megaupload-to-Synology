function add_download_button()
{
	var download_button = document.evaluate('//a[@class="download_premium_but"]', document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	if (!download_button)
		return;
	var button = document.createElement('button');
	button.id = 'send_to_sinology';
	button.title = 'Send to Synology';
	button.style.cssText = 'margin-left:50px;border:none;cursor:alias;float:left;height:62px;width:62px;display:block;background-image: url('+gResources.downloadButton+');background-color:transparent;';
	button.addEventListener('click', send_to_sinology, false);
	download_button.parentNode.insertBefore(button, download_button.nextSibling);
}
