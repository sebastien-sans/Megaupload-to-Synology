
var IntegrationEnum = Object.freeze({
	'SILENT':0, // Directly send to Synology *unrecommended*
	'BUTTON':1, // Add a button next to the Premium download button
	'CONFIRM':2 // Ask if should download
});

var integration_type = IntegrationEnum.BUTTON;
