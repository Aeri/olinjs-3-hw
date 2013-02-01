$(document).ready(function() {
	var selected = new Array();
	$('#Submit').click(function (){
		var customerName = $('#customerName').val();
		$("input:checkbox:checked").each(function () {
			selected.push($(this).attr('name'));
		});
		$.post('./create', { customerName : customerName, ingredients : selected });
	});
});
