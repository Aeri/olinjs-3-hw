$(document).ready(function() {
  var selectedIng = new Array();
  $('#Submit').click(function (){
    console.log("Has been clicked");
    var customerName = $('#customerName').val();
    console.log("Got names.");
    $("input:checkbox:checked").each(function () {
      selectedIng.push($(this).attr('name'));
    console.log("Got selected ingredients.");
    });
    $.post('./create', { customerName : customerName, ingredients : selectedIng}, 
	function(data){
	console.log("Is this working yet?");
	document.location.href='/order';});
  });
});
