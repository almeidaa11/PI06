$( document ).ready(function() {
  
    // scroll para as seções
  
    let navBtn = $('.nav-item');
  
    let homeSection = $('#homeSlider');
    let aboutSection = $('#about-area');
    let ferramentasSection = $('#service-area')
    let teamSection = $('#team-area');
    let contactSection = $('#contact-area');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'home-menu') {
        scrollTo = homeSection;
      } else if(btnId == 'about-menu') {
        scrollTo = aboutSection;
      }else if(btnId == 'service-menu') {
        scrollTo = ferramentasSection;
      } else if(btnId == 'team-menu') {
        scrollTo = teamSection;
      } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
      } else {
        scrollTo = homeSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 1500);
    });
  
  });