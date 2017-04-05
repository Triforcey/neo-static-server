var SerialPort = require('serialport');
var rpio = require('rpio');
// Enough pins to generate two octals per instant.
var pins = [7, 11, 12, 13, 15, 16, 18, 22, 29, 31, 32, 33, 35, 36, 37, 38];
for (var i = 0; i < pins.length; i++) {
	rpio.open(pins[i], rpio.INPUT, rpio.PULL_OFF);
}
setInterval(function () {
	var output = 0;
	var digitValue = 1;
	var possiblePins = [];
	for (var i = 0; i < pins.length; i++) {
		possiblePins.push(i);
	}
	var selectedPins = [];
	for (var i = 0; i < 8; i++) {
		selectedPins.push(pins[possiblePins.splice(Math.floor(Math.random() * possiblePins.length), 1)[0]]);
	}
	for (var i = 0; i < 8; i++) {
		if (rpio.read(selectedPins[i])) output += digitValue;
		digitValue *= 2;
	}
	console.log(output);
}, parseInt(process.env.PIN_DELAY) || 10);

var size = [parseInt(process.env.WIDTH) || 8, parseInt(process.env.HEIGHT) || 8];
var image = [];
for (var i = 0; i < size[1]; i++) {
	var tempRow = [];
	for (var j = 0; j < size[0]; j++) {
		tempRow.push([0, 0, 0]);
	}
}
/*var port = new SerialPort(process.env.SERIAL_PORT, {baudRate: 115200});
port.on('open', function () {
	setInterval(function () {
		var outString = '';
	}, !isNaN(process.env.FPS) ? 1 / parseInt(process.env.FPS) * 1000 : 10);
});*/
