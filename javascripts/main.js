$(document).ready(function() {
	$('.recommendations, #modal-overlay').click(toggleModal)
	$('.accordion-header').click(accordion)
})

function toggleModal() {
	$('#modal-overlay, #recommendations-modal').fadeToggle()
}

function accordion() {
	$(this).next().slideToggle()
}
