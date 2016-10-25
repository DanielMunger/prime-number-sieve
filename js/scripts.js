var upperLimit;
var numberArray= [];

var createArray = function() {
  for (i=2; i<upperLimit; i+=1){
    numberArray.push(i);
  }
}
var findPrimes = function() {
  for (var i=2; i<numberArray.length; i+=1) {
    numberArray.forEach(function(number){

      if (number % i === 0 && number != i){
        var index = numberArray.indexOf(number);
        numberArray.splice(index, 1);
      }
    });
  }
}


//

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    upperLimit=parseInt($("input#limit").val());
    // debugger;
    createArray();
    findPrimes();
    $("#output").text(numberArray);

  });
});
