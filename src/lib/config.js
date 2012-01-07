var synology_host = 'nas:5000';
var destination = 'Archives/Downloads';
var synology_user = 'admin';
var synology_password  = 'admin';

var IntegrationEnum = Object.freeze({
	'SILENT':0, // Directly send to Synology *unrecommended*
	'BUTTON':1, // Add a button next to the Premium download button
	'CONFIRM':2 // Ask if should download
});

var integration_type = IntegrationEnum.BUTTON;

