// Buisiness Logic



// User Interface Logic
$(document).ready(function(){
  var height = parseInt(prompt("How tall are you?"));
  if (height < 45) {
    alert (height);
    $("#carousel").show();
  } else if (height > 60) {
    $("#coaster").show();
  } else {
    $("#ship").show();
  };
});
