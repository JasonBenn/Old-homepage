$(document).ready(function() {
	$('.recommendations').click('#recommendations-modal', showModal)
	$('.books').click('#books-modal', showModal)
	$('#modal-overlay').click(hideModal)
	hideSlideshowExceptFirstProject()
	startSlideshow()
})

var showModal = function(modalSelector) {
	$('#modal-overlay').fadeIn()
	$(modalSelector.data).show()
}

var hideModal = function() {
	$('#modal-overlay, #recommendations-modal, #books-modal').fadeOut()
}

function hideSlideshowExceptFirstProject() {
	$('.projects li').slice(1).hide()
}

function startSlideshow() {
	var timer = setInterval(function() {
		$('.projects li').first().appendTo('.projects').fadeOut(1000)
		$('.projects li').first().fadeIn(1000)
	}, 6000)
}
