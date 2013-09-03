$(document).ready(function() {
	$('li').click(function() {
		var id = $(this).attr('id')
		$('.circle').removeClass().addClass('circle ' + id)
	})
})
