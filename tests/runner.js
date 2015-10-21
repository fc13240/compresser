var colors = require('colors');

function pass(msg){
	msg = '[pass] '+msg;
	console.log(msg.green);
}
function fail(){
	msg = '[fail] '+msg;
	console.log(msg.red);
}
pass('the first pass');
fail('should be 1');