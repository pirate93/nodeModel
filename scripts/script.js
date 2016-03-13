$(document).on('ready', function () {
	var selector = 'li a'
	$(selector).on('click', function(e){
		e.preventDefault();
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
});
