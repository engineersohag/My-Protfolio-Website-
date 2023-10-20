// add-page-Preloader

var preloader = document.getElementById('loading');

function loading(){
    preloader.style.display = 'none';
}


$('#navIcon').click(function(){
	$('.responsive-nav').show();
});


// isotop-part

// init Isotope
var $grid = $('.item-ditals').isotope({
  // options
});
// filter items on button click
$('.item-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
