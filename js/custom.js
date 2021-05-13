
  var typed = new Typed('.type', {
    strings: ['Coder', 'Developer','Wordpress Expert','Shopify Expert','FB Marketer'],
    smartBackspace: true, // Default value
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 1500,
    loop: true,
     loopCount: Infinity,
     showCursor: true,
     cursorChar: '//',
  });

// init Isotope
var $grid = $('grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });





