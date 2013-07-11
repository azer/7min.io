var format   = require('new-format'),
    dom      = require('dom'),
    template = require('./templates')['sound-button.html'],
    onSetup  = require('./on-setup');

onSetup(function(){

  dom('.sound').on('click', function(){
    toggle();

    dom('.sound')
      .removeClass('on')
      .removeClass('off')
      .addClass(val() ? 'on' : 'off');

  });
});

module.exports = {
  val: val,
  render: render
};

function label(){
  return 'Music ' + ( val() ? 'On' :  'Off' );
}

function toggle (){
  val(!val());
}

function render(){
  return format(template, {
    'state-class': val() ? 'on' : 'off'
  });
}

function val(newValue){
  if ( arguments.length && newValue === false ) {
    localStorage['nosound'] = 't';
  } else if(arguments.length) {
    delete localStorage['nosound'];
  }

  return localStorage['nosound'] != 't';
}
