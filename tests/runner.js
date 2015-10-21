var colors = require('colors');

function pass(msg){
	msg = '[pass] '+msg;
	console.log(msg.green);
}
pass('hello');