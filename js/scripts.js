var numeralArray = ["M","CM","D","CD","C","XD","L","XL","X","IX","V","IV","I"];
var valuesArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

var romanCalculations = function (numberInput) {
  var romanArray = [];

  for (var numeralIndex = 0; numeralIndex < 13; numeralIndex++) {
    if (numberInput >= valuesArray[numeralIndex]) {
      var numeralCount = Math.floor(numberInput/valuesArray[numeralIndex]);
      numberInput = numberInput - (valuesArray[numeralIndex] * numeralCount);
      for (var letterIndex = 0; letterIndex < numeralCount; letterIndex++)
        romanArray.push(numeralArray[numeralIndex]);
    }
  }
  var romanString = romanArray.join("");
  return romanString;
}

var convertToRoman = function(numberInput) {
  var integerInput = parseInt(numberInput);

  if (integerInput > 3999 || integerInput < 0) {
    return false;
  } else if (integerInput === 0){
    return 0;
  } else {
    return romanCalculations(numberInput);
  }
}

// Front end magic
$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#number").val();

    var result = convertToRoman(numberInput);
    $("#result").show();
    if (result) {
      $(".number").text(result);
    } else if ( result === 0) {
      $(".number").text("We don't believe in zero, try to be a little more positive");
    } else {
      $(".number").text("They said beware the ides of March, but numbers 4000 and above or 0 and under aren't that great either");
    }
  });
});
