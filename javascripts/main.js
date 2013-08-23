$(document).ready(function() {
	$('.recommendations, #modal-overlay').click(toggleModal)
	$('.accordion-header').click(accordion)
	$('.accordion-content li').click(showDetails)
	$('.accordion-content:first li:first-child').trigger('click')
})

function toggleModal() {
	$('#modal-overlay, #recommendations-modal').fadeToggle()
}

function accordion() {
	$(this).next().slideToggle()
}

function showDetails() {
	var contentSelector = '.all-captions .' + $(this).attr('data-content')
	var image = $(contentSelector + ' .image').clone()
	var caption = $(contentSelector + ' .caption-html').clone()
	$('.macbook-caption, .macbook .screen span').fadeOut(function() {
		$('.macbook .screen span').html(image).fadeIn()
		$('.macbook-caption').html(caption).fadeIn()
	})
}
