(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.stopVideoModal('#video-review-modal--one', '#video-review-iframe--one');
  HelloWorldDevsTysonSteele.stopVideoModal('#video-review-modal--two', '#video-review-iframe--two');
  HelloWorldDevsTysonSteele.stopVideoModal('#video-review-modal--three', '#video-review-iframe--three');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    items: 1,
    margin: 40,
    navText: [
      '<i class="icon-chevron-left"></i>',
      '<i class="icon-chevron-right"></i>'
    ],
    responsive: {
      768: {
        items: 2
      }
    }
  });
  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      550: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 2,
    navText: [
      '<img src="assets/team-arrow-left.png">',
      '<img src="assets/team-arrow-right.png">'
    ],
    responsive: {
      480: {
        items: 3
      },
      768: {
        items: 4
      }
    },
    margin: 10
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // Remove last name from team cards
  $('.team-card__title').each(function() {
    var firstWord = $(this).text().split(' ');
    $(this).text(firstWord[0]);
  });

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '33.6392813,-111.8949859', '33.6392813,-111.8949859');


}(jQuery, HelloWorldDevsTysonSteele));

