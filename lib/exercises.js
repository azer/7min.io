var program     = require('./program'),
    newExercise = require('./exercise'),
    current     = require('./current'),
    exercises   = {
      list  : [],
      start : start,
      next  : next
    };

program.forEach(function(item, ind){
  exercises.list.push(newExercise(item, ind));
});

module.exports = exercises;

function next(){
  current.exercise( exercises.list[ current.exercise().index + 1 ] || exercises.list[0] );
}

function start(){
  exercises.list[0].start();
}
