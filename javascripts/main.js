$(document).ready(function() {
	$('.recommendations, #modal-overlay').click(toggleModal)
})

var toggleModal = function() {
	$('#modal-overlay').fadeToggle();
	$('#recommendations-modal').toggle();
}
