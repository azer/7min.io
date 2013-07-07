var dom       = require('dom'),
    event     = require('event'),
    current   = require("./current"),
    timer     = require('./timer'),
    countdown = require('./countdown'),
    exercises = require('./exercises'),
    progress  = require('./progress'),
    started;

module.exports = {
  setup: setup
};

function refreshProgress(){
  var timer = dom('.timer');
  dom('.progress').remove();
  timer.html(timer.html() + progress.render());
}

function setup(){
  current.exercise.subscribe(onExerciseChange);
  current.secs.subscribe(onSecsChange);

  dom('.container').html(timer.render());

  event.bind(window, 'keypress', start);
  //event.bind(window, 'click', start);
  event.bind(window, 'touchend', start);
}

function start(){
  if(started) return;

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
