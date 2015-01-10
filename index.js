var fs = require("fs");
var path = require("path");

module.exports = function(robot){
  var p = path.resolve(__dirname, "scripts");
  fs.exists(p, function(exists){
    if(exists){
      var dir = fs.readdirSync(p);
      for(var i in dir){
        robot.loadFile(p, dir[i]);
      }
    }
  });
};
