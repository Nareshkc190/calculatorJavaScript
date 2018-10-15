var b = "";
$(document).ready(function() {
  var a = document.getElementById('calculatorInput');
    $(".inputElements").on("click", function() {
        a.innerHTML += ($(this).text());
         b = a.innerHTML;
        console.log(b)
});

$(".evaluate").on("click", function() {

  try {
  var c  = eval(b);
  a.innerHTML = c;
}catch(err) {
      a.innerHTML = err.message;
  }
});

$(".clear").on("click", function() {
  a.innerHTML = "";
});
});
