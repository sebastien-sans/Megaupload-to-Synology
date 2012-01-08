// ==UserScript==
// @name           Megaupload to Synology
// @namespace      Laymain
// @include        http://www.megaupload.com/?d=*
// ==/UserScript==

// begin script scope
(function(){

// jQuery
var $;

// extension namespace
var MUTOSYN = {};

// gResources: contains stored images
var gResources = {};

// Debug
var GM_log = GM_log || (unsafeWindow.console ? unsafeWindow.console.log : undefined);
