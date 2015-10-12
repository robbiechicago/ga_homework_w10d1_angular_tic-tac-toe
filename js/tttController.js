angular.module('tttApp', [])
  .controller('TttController', TttController);

function TttController() {
  var ox = 'NOUGHT'

  this.move = move

  function move() {
    if (ox === 'NOUGHT') {
      ox = "CROSS";
      console.log(ox);
    } else {
      ox = "NOUGHT";
      console.log(ox);
    };
  };


};