
// Init AOS
function aos_init() {
    AOS.init({
    duration: 1000,
    once: true
    });
}
$(window).on('load', function () {
    aos_init();
});



  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      },
      1024: {
        items: 2
      }
    }
  });

$('.counter').counterUp({
                delay: 10,
                time: 1000
            });