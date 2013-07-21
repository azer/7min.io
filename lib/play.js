var current   = require("./current"),
    exercises = require('./exercises'),
    sound     = require('./sound-button').val,
    playing;

current.paused.subscribe(function(val){
  if (val == true && playing) {
    R.player.pause();
    playing = false;
  }

  if (val == false && !playing) {
    R.player.play();
    playing = true;
  }
});

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

      playing = true;
    }
  } catch (exc) {}
}

function song(){
  var exercise = current.exercise(),
      index = exercise ? exercise.index + 1 : 0;

  return exercises.list[index].song;
}
