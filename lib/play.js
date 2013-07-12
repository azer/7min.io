var current   = require("./current"),
    exercises = require('./exercises'),
    sound     = require('./sound-button').val,
    playing;

module.exports = play;

function play(){
  var next;

  try {
    next = song();

    if ( next && sound() ){
      R.player.play({
        source: next.key,
        initialPosition: next.start || 0
      });
    }
  } catch (exc) {}
}

function song(){
  var exercise = current.exercise(),
      index = exercise ? exercise.index + 1 : 0;

  return exercises.list[index].song;
}
