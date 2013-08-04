$(document).ready(function() {
	$('.recommendations, #modal-overlay').click(toggleModal)
	hideSlideshowExceptFirstProject()
	startSlideshow()
})

var toggleModal = function() {
	$('#modal-overlay').fadeToggle();
	$('#recommendations-modal').toggle();
function hideSlideshowExceptFirstProject() {
	$('.projects li').slice(1).hide()
}

function startSlideshow() {
	var timer = setInterval(function() {
		$('.projects li').first().appendTo('.projects').fadeOut(1000)
		$('.projects li').first().fadeIn(1000)
	}, 6000)
}
