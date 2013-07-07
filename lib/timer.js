var format    = require('new-format'),
    template  = require("./templates")['timer.html'],
    countdown = require('./countdown'),
    exercises = require('./exercises'),
    progress  = require('./progress'),
    started   = false;

module.exports = {
  render: render
};

function render(){
  return format(template, {
    countdown: countdown.render(),
    progress: progress.render()
  });
}
