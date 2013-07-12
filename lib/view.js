var dom       = require('dom'),
    event     = require('event'),
    current   = require("./current"),
    timer     = require('./timer'),
    countdown = require('./countdown'),
    exercises = require('./exercises'),
    progress  = require('./progress'),
    onSetup   = require('./on-setup'),
    started;

module.exports = {
  setup: setup
};

function pause(){
  if ( current.paused() ) {
    current.paused(false);
    return;
  }

  current.paused(true);
}

function refreshProgress(){
  var timer = dom('.timer');
  dom('.progress').remove();
  timer.html(timer.html() + progress.render());
  progress.onRendered.publish();
}

function setup(){
  current.exercise.subscribe(onExerciseChange);
  current.secs.subscribe(onSecsChange);

  dom('.container').html(timer.render());

  onSetup.publish();

  event.bind(window, 'keypress', start);
  //event.bind(window, 'click', start);
  event.bind(window, 'touchend', function(event){
    var blacklist = ['span', 'a', 'path', 'svg'];
    if ( blacklist.indexOf(event.target.tagName.toLowerCase()) > -1 ) return;
    start();
  });
}

function start(){
  if(started) return pause();

  started = true;

  dom('.info').css('display', 'none');
  dom('.timer .start').css('display', 'none');
  dom('.timer .countdown').css('display', 'block');

  countdown(3, exercises.start);
}

function onExerciseChange(exercise){
  refreshProgress();

  var el = dom('.countdown');

  dom('.countdown .exercise').remove();

  el.addClass('exercise-view');

  if(exercise.rest){
    el.addClass('rest');
  } else {
    el.removeClass('rest');
  }

  el.html(el.html() + exercise.render());

  countdown(exercise.secs, exercises.next);
}

function onSecsChange(secs){
  dom('.countdown .num').html(secs);
}
