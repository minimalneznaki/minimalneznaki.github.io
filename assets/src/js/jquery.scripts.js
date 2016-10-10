var resizer = function() {
    var mb = window.matchMedia( "(max-width: 767px)" );
    var pc = window.matchMedia( "(min-width: 1200px)" );  
    
};
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        $('#site-wrapper').removeClass('show-nav');
    } else {
        $('#site-wrapper').addClass('show-nav');
    }
}

//FUNKCJE
$( document ).ready(function() {
	var win = $('html,body');
    var header = $('header');
	
    //TOGGLE MENU
    $('#menu_toggle').click(function(){
        $(this).toggleClass('is-active');
        toggleNav();
    });
    
    //LAZY LOAD - images
    $('.bttrlazyloading').bttrlazyloading({
        backgroundcolor: 'transparent',
        animation: 'flipInX',
        placeholder: 'data:image/svg+xml;utf8,<svg width="52px" height="52px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-spin"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g transform="translate(50 50)"><g transform="rotate(0) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(45) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0.12s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.12s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(90) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0.25s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.25s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(135) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0.37s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.37s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(180) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0.5s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.5s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(225) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0.62s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.62s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(270) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0.75s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.75s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(315) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#000"><animate attributeName="opacity" from="1" to="0.1" begin="0.87s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.87s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g></g></svg>'
    });
    
    //LAZY LOAD - backgrounds
    $(".lazyBG").lazyload({
        load : function(elements_left, settings) {
            $(this).addClass('bgloaded');
        }
    });    
   
    //TOP SLIDER
    var slider = new Swiper('#slider .swiper-container', {
        pagination: '#slider .swiper-pagination',
        nextButton: '#slider .swiper-button-next',
        prevButton: '#slider .swiper-button-prev',
        paginationClickable: true,
        effect: 'fade',
        loop: true,
        autoplay: 3000
    });
  
	//SCROLL TO
	$('[target="scroll"]').each(function (){
		var target = $($(this).attr('href'));

		$(this).click(function (){
			win.stop().animate({scrollTop: target.offset().top - header.outerHeight()}, 600);
			return false;
		});
	});
    
    $(".fancybox").fancybox();
    
    //EVENTS
    window.addEventListener('resize', resizer, false);
    resizer();
});
 
$( window ).load(function() {   
    console.log('windows loaded');
});