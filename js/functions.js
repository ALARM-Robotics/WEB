$(document).ready(function() {
	$('#nav a').click(function() {
		pageId = $(this).attr('href');
		num = $('#nav a').index(this);
		$(pageId).parent().animate({scrollTop: (465 * num)}, 'slow');
	});
});