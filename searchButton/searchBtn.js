document.getElementById("inpt_search").onfocus(function () {
  console.log("activated");
  $(this).parent("label").addClass("active");
});

document.getElementById("inpt_search").onblur(function () {
  if ($(this).val().length == 0) $(this).parent("label").removeClass("active");
});
