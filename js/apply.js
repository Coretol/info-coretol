    jQuery(function ($) {
      $('.tab').click(function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('.show').removeClass('show');
        const index = $(this).index();
        $('.stafftype').eq(index).addClass('show');
      });

      $('.accordion .accordion_head').click(function () {
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
      });
    });