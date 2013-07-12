var iter       = require('iter'),
    after      = require('after-time'),
    format     = require('new-format'),
    current    = require('./current'),
    play       = require('./play'),
    template   = require('./templates')['countdown.html'],
    cb;

current.paused.subscribe(function(now, old){
  if ( now == false && old == true ) tick();
});

module.exports = countdown;
module.exports.render = render;
module.exports.tick = tick;

function countdown(secs, callback){
  cb = callback;
  current.countdown(secs);
  current.secs(secs + 1);
  tick();
}

function render(exercise){
  return format(template, {
    exercise: exercise || ''
  });
}

function tick (){
  if( current.paused() ) return;

  current.secs(current.secs() - 1);

  if( current.secs() < 4) play();

  if ( current.secs() <= 0 ) return cb();

  after('1s', tick);
}
