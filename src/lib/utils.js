function xh_request(method, host, uri, params)
{
	var options = {
		method:		method == 'POST' ? 'POST' : 'GET',
		headers:	{ 'Content-Type':'application/x-www-form-urlencoded' },
		url:		'http://'+host+'/'+uri + (method == 'GET' ? '?' + params : '')
	}
	if (method == 'POST') options.data = params;
	GM_xmlhttpRequest(options);

}

function getConfigParameter(key, defaultValue) {
	var value = localStorage[key] || defaultValue;
	if (value == undefined) {
		throw "undefined value";
	}
	return value;
}

function setConfigParameter(key, value) {
	localStorage[key]=value;
}
