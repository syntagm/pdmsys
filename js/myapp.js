// JavaScript Document
function DOMLoaded()  {
	
	document.addEventListener("deviceready", phonegapLoaded, false);
		
	}

function phonegapLoaded( )  {
	
	$(function()  {
		
	$("body").append ("<h1>Amistar is loading </h1>");
		
	});
	
	var element = document.getElementById('deviceInfo');
	
	element.innerHTML = 'Device name: ' + device.name + '<br/>' +
								   'Platform: ' + device.platform + '<br/' +
								   'Devices UUID: ' + device.uuid + '<br/' +
								   'OS version: ' + device.version + '<br/' ;
								   
	
	}
	
function alert()  {
	
	navigator.notification.alert(
								 
	'Welcome to Syngenta Amistar digital PI',
	dismissed,
	'Syntagm Research',
	'Done'
	
	);
	
	
}

function dismissed()  {
	
	$(function ()  {
				
				$("body").append("<h2> Loaded</h2>");
				
				});
}
				
function alert()  {
	
	navigator.notification.alert(
								 
	'Welcome to Syngenta Amistar digital PI',
	dismissed,
	'Syntagm Research',
	'Done'
	
	);
	
	
}

function dismissed()  {
	
	$(function ()  {
				
				$("body").append("<h2> Loaded</h2>");
				
				});
}
				
function beep() { navigator.notification.beep(3);}
