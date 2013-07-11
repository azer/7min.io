var format      = require('new-format'),
    template    = require("./templates")['timer.html'],
    countdown   = require('./countdown'),
    exercises   = require('./exercises'),
    progress    = require('./progress'),
    soundButton = require('./sound-button'),
    started     = false;

module.exports = {
  render: render
};

function render(){
  return format(template, {
    countdown: countdown.render(),
    progress: progress.render(),
    'sound-button': soundButton.render()
  });
}
