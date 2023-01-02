// Mobile Menu Open & close
jQuery(document).ready(function() {
    jQuery.noConflict()
    jQuery('.hamburger_icon').click(function(e) {
        jQuery('.mobile_menu').addClass('active');
    });
    jQuery('.menu_close').click(function(e) {
        jQuery('.mobile_menu').removeClass('active');
    });
});


// Banner slider 
jQuery(document).ready(function() {
    jQuery('.banner_slider_home').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: true,
        fade: true,
    });

});