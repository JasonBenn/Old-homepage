$(document).ready(function() {
	$('.recommendations, #modal-overlay').click(toggleModal)
	$('.accordion-header').click(accordion)
})

function toggleModal() {
	$('#modal-overlay, #recommendations-modal').fadeToggle()
}

function accordion() {
	$('.accordion-content').hide();
	$(this).next().show()
}
