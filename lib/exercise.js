var format    = require('new-format'),
    current   = require('./current'),
    template  = require('./templates')['exercise.html'];

module.exports = newExercise;

function newExercise(options, index){
  var obj, rest;

  rest = options.rest || false;

  obj = {
    index : index,
    key   : rest ? 'rest' : options.key,
    title : rest ? 'Rest' : options.title,
    secs  : rest ? 10 :  options.secs,
    song  : rest ? undefined : options.song,
    rest  : rest
  };

  obj.render = newRenderer(obj);
  obj.start  = startExercise(obj);

  return obj;
}

function newRenderer(exercise){
  return function(){
    return format(template, exercise);
  };
}

function startExercise(exercise){
  return function(callback){
    current.exercise(exercise);
  };
}
