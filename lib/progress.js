var format     = require('new-format'),
    pubsub     = require('pubsub'),
    exercises  = require('./exercises').list,
    current    = require('./current'),
    templates  = require("./templates"),
    onRendered = pubsub();

var onlyExercises = exercises.filter(function(el){
  return !el.rest;
});

module.exports = {
  onRendered : onRendered,
  render     : render
};

function isNextTo(a, b){
  if (a.index == b.index + 1) {
    return true;
  }

  if ( a.index == b.index + 2 && exercises[b.index + 1].rest ) {
    return true;
  }
}

function render(){
  if ( ! current.exercise() ) return '';

  var circles = '',
      i, len;

  i = -1;
  len = onlyExercises.length;

  while ( ++i < len ) {
    circles += format(templates['circle.html'], {
      next: isNextTo(onlyExercises[i], current.exercise()) ? 'next' : '',
      done: current.exercise().index >= onlyExercises[i].index ? 'done' : '',
      key: onlyExercises[i].key
    });
  }

  return format(templates['progress.html'], {
    title: current.exercise().title,
    circles: circles
  });
}
