var request = require('request');
var slackbot = require('./slackbot-new');
var fs = require('fs');

var botKey = "xoxb-2686276489-465948777747-HkAErDMguD5nRY3Vo3OEyDwY";
var taIDs = "U361Q3GPP,U2JU26MPS,U42S89JCX,U2BGW8TS7,U3K0RFJAY,U5Q1G6L91,U4A9PV49F".split(",");

var bot = new slackbot(botKey);

var ribsBot = require('./core-bot-functions')(bot, taIDs);
var easterEggs = require('./easter-eggs')(bot, taIDs);

bot.use(ribsBot);

for (var key in easterEggs) {
	bot.use(easterEggs[key]);
}

bot.connect();
