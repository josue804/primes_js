var primeNumber = function(number) {
  var primeNumbersArray = [];
  var count = 0;

  for(var i = number; i !== 1; --i) {
    count = 0;
    for(var k = 2; k < i; ++k) {
      if(i % k === 0) {
        ++count;
      }
    }

    if(count === 0) {
      primeNumbersArray.push(i);
    }
  }

  return primeNumbersArray.reverse();
};


$(function() {
  $("form#primeNumber").submit(function(event) {
    var number = parseInt($("input#input").val());
    var result = primeNumber(number);
    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
