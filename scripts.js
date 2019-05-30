$(document).ready(function() {
  $("#form").submit(function(event) {

    var inputName = $("input#Name").val();
    var inputEmail = $("input#Email").val();
    var inputAddress= $("input#Address").val();

    $("#Name2").text(inputName);
    $("#Address2").text(inputAddress);
    $("#Email2").text(inputEmail);

    $("#form").hide();
    $(".order-confirmation").show();

    event.preventDefault();
  });
});
