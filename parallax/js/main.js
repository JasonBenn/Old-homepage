$(document).ready(function() {

	$('.img').each(function(index, element) {

		var w = $(window)
		var imgTop = $(this).offset().top
		var imgHeight = $(this).height()

		$(window).scroll(function() {
			if ($(window).scrollTop() > 1000) {
				$('.header').addClass('header-small')
			} else {
				$('.header').removeClass('header-small')
			}

			if ((w.scrollTop() + w.height()) > imgTop &&
					(imgTop + imgHeight) > w.scrollTop()) {

				var y = -w.scrollTop() / 5 + (200 * index)
				var yPos = '50% ' + y + 'px'
				$(element).css({ backgroundPosition: yPos })
			}
		})
	})
})
