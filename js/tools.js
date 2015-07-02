$(document).ready(function() {
        $('.carousel').carousel();

        $('.toolsPic').hover(function() {
        $(this).addClass('transition');
 
		    }, function() {
		        $(this).removeClass('transition');
		    });
});