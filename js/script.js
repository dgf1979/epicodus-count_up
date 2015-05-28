"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var foo = function(bar) {
  return false;
};

var countUp = function(upTo, countBy) {
  var results = [];

  for (var i = countBy; i <= upTo; i += countBy) {
    results.push(i);
  }

  return results;
}
