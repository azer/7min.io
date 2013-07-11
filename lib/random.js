module.exports = random;

function random(){
  return arguments[ Math.floor( Math.random() * arguments.length ) ];
}
