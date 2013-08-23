$(document).ready(function() {
	$('.recommendations, #modal-overlay').click(toggleModal)
	$('.accordion-header').click(accordion)
	$('.accordion-content li').click(showDetails)
	showDetails('.all-captions .a1')
})

function toggleModal() {
	$('#modal-overlay, #recommendations-modal').fadeToggle()
}

function accordion() {
	$(this).next().slideToggle()
}

function showDetails(selector) {
	var contentSelector = selector || '.all-captions .' + $(this).attr('data-content')
	var image = $(contentSelector + ' .image').clone()
	var caption = $(contentSelector + ' .caption-html').clone()
	$('.macbook-caption, .macbook .screen span').fadeOut(function() {
		$('.macbook .screen span').html(image).fadeIn()
		$('.macbook-caption').html(caption).fadeIn()
	})
}
