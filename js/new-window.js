$(document).ready(function() {

  $(".mymagicoverbox").click(function() {
    $('#blackout').fadeIn(300);
    var iddiv = $(this).attr("iddiv");
    $('#' + iddiv).fadeIn(300);
    $('#blackout').attr('opendiv', iddiv);
    return false;
  });

  $('#blackout, .mymagicoverbox_fermer').click(function() {
    var iddiv = $("#blackout").attr('opendiv');
    $('#blackout').fadeOut(300);
    $('#' + iddiv).fadeOut(300);
  });

});
