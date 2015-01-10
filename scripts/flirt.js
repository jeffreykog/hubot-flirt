// Description:
//   Let hubot flirt with an user. Hubot is very social
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot flirt with <user> - Flirt with <user>
//
// Author:
//   jk-5, reening

var fs = require('fs');
var messages = require("../flirts.json");

module.exports = function(robot) {
  robot.respond(/flirt with @?(.+)/i, function(msg){
    var name = msg.match[1];
    var user = robot.brain.userForName(name);
    var target = name;
    if(user){
      target = user.name;
    }
    var n = Math.floor(Math.random() * messages.length);
    msg.send(msg.message.user.name + ' ' + messages[n].replace('%s', target));
  });
};
