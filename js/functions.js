jQuery(document).ready(function($) {
	var topMenuItem = $('.main-nav > .main-nav-item');
	if (topMenuItem.length > 3 && $('.main-nav').width() > 750)
		{
			topMenuItem.last().addClass('lastItem');
			alert('gogo');

}




	
});