var readlineSync = require('readline-sync');
var qs = require('querystring'),
                  oauth=
                  {
                  	consumer_key: "8qwH0vaKFlMYoQzF5dEkBwc0E",
                  	consumer_secret: "FoTGqCRCfqaLNGHYK0lWGLutwo8ampLIM6SfQmfedXm4rOPqiN",
                  	token: "103872556-Rkwl6DYs23K9qkIGmFGHHNwdCmjrk2stjmWJsYUR",
                  	token_secret: "wzQRlU6X8gIdzJ7RA97Bb7xnVTjaXezGY74Ul3fwC9k2g",
                  	'oauth-version':1.0
                  },url="https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + handle;
var request = require('request');
var handle = readlineSync.question("Enter the Twitter handle of the user you want to retrieve tweets for: ");

request.get({url:url, oauth:oauth}, function(err,res,body){
	if (err) console.log(err);
	else console.log(body);
})
