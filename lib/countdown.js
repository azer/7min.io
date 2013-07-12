var iter       = require('iter'),
    after      = require('after-time'),
    format     = require('new-format'),
    pubsub     = require('pubsub'),
    current    = require('./current'),
    play       = require('./play'),
    template   = require('./templates')['countdown.html'],
    onContinue = pubsub();

module.exports = countdown;
module.exports.render = render;

function countdown(secs, callback){
  current.countdown(secs);

  current.secs(secs);

  iter(secs)
    .done(callback)
    .run(function(next, i){
      if(secs - i < 4) play();

      if ( current.paused() ) {
        onContinue(tick);
      }

      function tick(){
        after('1s', function(){
          current.secs(secs - i - 1);
          next();
        });
      }
    });
}

function render(exercise){
  return format(template, {
    exercise: exercise || ''
  });
}
