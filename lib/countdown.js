var iter     = require('iter'),
    after    = require('after-time'),
    format   = require('new-format'),
    current  = require('./current'),
    play     = require('./play'),
    template = require('./templates')['countdown.html'];

module.exports = countdown;
module.exports.render = render;

function countdown(secs, callback){
  current.countdown(secs);

  current.secs(secs);

  iter(secs)
    .done(callback)
    .run(function(next, i){

      if(secs - i < 4) play();

      after('1s', function(){
        current.secs(secs - i - 1);
        next();
      });

    });
}

function render(exercise){
  return format(template, {
    exercise: exercise || ''
  });
}
