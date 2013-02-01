$(document).ready(function() {
	console.log("Completing order...")
	$('.button').click(function (){
		console.log("Button clicked...")
		var id = $(this).attr("id");
		$.post('./done', { id: id });
		$(this).parent().remove();
	});
});
