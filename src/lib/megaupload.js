function addDownloadButton() {
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

function openConfigSubPanel() {
	var configSubPanel = document.getElementById('synologyConfigSubPanel');
	configSubPanel.style.display = 'block';
}

function closeConfigSubPanel() {
	var configSubPanel = document.getElementById('synologyConfigSubPanel');
	configSubPanel.style.display = 'none';
}

function saveConfig() {
	var configSubPanel = document.getElementById('synologyConfigSubPanel');
	var elements = configSubPanel.getElementsByTagName('input');
	
	for (i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.type != "text") {
			continue ;
		}
		var configName = element.id.substring("synologyConfig".length);
		setConfigParameter(configName, element.value);
	}
	closeConfigSubPanel();
}

function createConfigSubPanel() {
	var configSubPanel = document.createElement('div');
	configSubPanel.id = 'synologyConfigSubPanel';
	configSubPanel.style.display = 'none';
	var configValues = ["synologyHost", "synologyPort", "defaultDownloadDestination"];
	for (i = 0; i < configValues.length; i++) {
        var configInputElement = document.createElement('input');
		configInputElement.type = 'text';
		configInputElement.id = 'synologyConfig' + configValues[i];
		configInputElement.value = getConfigParameter(configValues[i]);
		configSubPanel.appendChild(configInputElement);
	}
	var submitButton = document.createElement('button');
	submitButton.innerHTML = 'Save';
	submitButton.addEventListener('click', saveConfig, false);
	configSubPanel.appendChild(submitButton);
  
  return configSubPanel;
}

function addConfigPanel() {
	var importButton = document.evaluate('//a[@class="download_import_but"]', document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
	if (!importButton)
		return;
	var configDiv = document.createElement('div');
	configDiv.innerHTML = '<div class="download_but_bl3"></div>';
	
	var configSubPanel = createConfigSubPanel(configDiv);
	var configLink = document.createElement('button');
	configLink.innerHTML = 'SynologyConfig';
	configLink.style.cssText = 'margin-left:50px;border:none;cursor:pointer;display:block;background-color:transparent;';
	configLink.id = 'synologyConfigLink';
	configLink.title = 'SynologyConfig';
	configLink.addEventListener('click', openConfigSubPanel, false);
	configDiv.appendChild(configLink);
	configDiv.appendChild(configSubPanel);
	importButton.parentNode.insertBefore(configDiv, importButton.nextSibling);
}

function megauploadIntegration() {
	addDownloadButton();
	addConfigPanel();
}
