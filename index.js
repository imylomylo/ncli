var vorpal = require('vorpal')();
vorpal.delimiter('ncli$').show();

vorpal
      .command('duck', 'Outputs "rabbit"')
      .action(function(args, callback) {
        this.log('Wabbit');
        callback();
      });

vorpal
	.command('now', "Now in unixtime")
	.action(function(args, cb){
		const self = this;
		now();
		cb();
	});

vorpal
	.command('hacker', "post to the #hacker")
	.action(function(args, cb){
		const self = this;
		hacker();
		cb();
	});

vorpal
	.command('promptstext', 'Asks questions')
	.action(function(args, cb){
		const self = this;
		promptstext();
		cb();
	});

vorpal
	.command('promptsselect', 'Asks questions')
	.action(function(args, cb){
		const self = this;
		promptsselect();
		cb();
	});





function now(){

var Datetime = require('machinepack-datetime');

	// Construct a new JS timestamp from the current time.
	console.log(Datetime.now({}).execSync());
//	console.log(Datetime.now);
}

function promptsselect(){

var prompts = require('machinepack-prompts');
var rxtext = '';

prompts.text({
	message: 'Where do you want to post?',
	paginated: false,
	choices: [{name: 'hacker', value: 'some-unique-identifier'}]
}).exec({
	error: function(err){},
	success: function(result){
		console.log('Result: ' + result);
	}

});
}

function promptstext(){

var prompts = require('machinepack-prompts');
var rxtext = '';

prompts.text({
	message: 'What do you want to post?',
	protect: true,
	expectJson: false,
	exampleValue: 'why does it always rain?'
}).exec({
	error: function(err){},
	success: function(result){
		console.log('Result: ' + result);
	}

});
}
