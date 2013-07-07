var format    = require('new-format'),
    exercises = require('./exercises').list,
    current   = require('./current'),
    templates = require("./templates");

module.exports = {
  render: render
};

var onlyExercises = exercises.filter(function(el){
  return !el.rest;
});

function render(){
  if ( ! current.exercise() ) return '';

  var circles = '';

  var i = -1, len = onlyExercises.length;
  while ( ++i < len ) {
    console.log('==>', i, onlyExercises[i], current.exercise());
    circles += format(templates['circle.html'], {
      done: current.exercise().index > onlyExercises[i].index ? 'done' : ''
    });
  }

  return format(templates['progress.html'], {
    title: current.exercise().title,
    circles: circles
  });
}
