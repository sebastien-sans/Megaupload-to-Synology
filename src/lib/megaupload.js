MUTOSYN.lib = MUTOSYN.lib || {};

(function(){ // local scope

	// megaupload class
	MUTOSYN.lib.megaupload =
	{
		createDownloadButton:function()
		{
			return $('<button id="mutosynDownloadButton" title="Send to Sinology"/>');
		},

		addDownloadButton:function()
		{
			var $downloadButton = $('a.download_premium_but');
			if (!$downloadButton) return;

			var $button = self.createDownloadButton();
			$button.click(send_to_sinology);
			$downloadButton.after($button);
		},


		openConfigSubPanel:function()
		{
			var configSubPanel = document.getElementById('synologyConfigSubPanel');
			configSubPanel.style.display = 'block';
		},

		closeConfigSubPanel:function()
		{
			var configSubPanel = document.getElementById('synologyConfigSubPanel');
			configSubPanel.style.display = 'none';
		},

		saveConfig:function()
		{
			var configSubPanel = document.getElementById('synologyConfigSubPanel');
			var elements = configSubPanel.getElementsByTagName('input');

			for (var i = 0; i < elements.length; i++) {
				var element = elements[i];
				if (element.type != "text") {
					continue ;
				}
				var configName = element.id.substring("synologyConfig".length);
				setConfigParameter(configName, element.value);
			}
			self.closeConfigSubPanel();
		},

		createConfigInputElement:function(configValues)
		{
			var configInputElement = document.createElement('input');
			configInputElement.type = 'text';
			configInputElement.id = 'synologyConfig' + configValues[i];
			configInputElement.value = getConfigParameter(configValues[i]);
			configSubPanel.appendChild(configInputElement);
			return configInputElement;
		},

		createConfigSubmitButton:function() {
			var submitButton = document.createElement('button');
			submitButton.innerHTML = 'Save';
			return submitButton;
		},

		createConfigSubPanel:function()
		{
			var configSubPanel = document.createElement('div');
			configSubPanel.id = 'synologyConfigSubPanel';
			configSubPanel.style.display = 'none';
			var configValues = ["synologyHost", "synologyPort", "defaultDownloadDestination"];
			for (var i = 0; i < configValues.length; i++) {
				var configInputElement = self.createConfigInputElement(configValues);
				configSubPanel.appendChild(configInputElement);
			}
			var submitButton = self.createConfigSubmitButton();
			submitButton.innerHTML = 'Save';
			submitButton.addEventListener('click', self.saveConfig, false);
			configSubPanel.appendChild(submitButton);

		return configSubPanel;
		},

		createConfigLink:function()
		{
			var configLink = document.createElement('button');
			configLink.innerHTML = 'SynologyConfig';
			configLink.style.cssText = 'margin-left:50px;border:none;cursor:pointer;display:block;background-color:transparent;';
			configLink.id = 'synologyConfigLink';
			configLink.title = 'SynologyConfig';
			return configLink;
		},

		addConfigPanel:function()
		{
			var importButton = document.evaluate('//a[@class="download_import_but"]', document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue;
			if (!importButton)
				return;
			var configDiv = document.createElement('div');
			configDiv.innerHTML = '<div class="download_but_bl3"></div>';

			var configSubPanel = self.createConfigSubPanel(configDiv);
			var configLink = self.createConfigLink();
			configLink.addEventListener('click', self.openConfigSubPanel, false);
			configDiv.appendChild(configLink);
			configDiv.appendChild(configSubPanel);
			importButton.parentNode.insertBefore(configDiv, importButton.nextSibling);
		},

		megauploadIntegration:function()
		{
			self.addDownloadButton();
			self.addConfigPanel();
		}
	}; // class end

	var self = MUTOSYN.lib.megaupload;
})(); // end local scope
