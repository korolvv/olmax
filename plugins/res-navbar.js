(function ($) {

  $.fn.resNavbar = function () {

    var self = this;
    var popper = $(self.data('modal'));
      var popper_fon = $(self.data('modal-fon'));

      popper.find('a').on('click', function () {
        popper.toggleClass(function (index, classs) {
          $('body').removeClass('res-modal-body-hidden');
          $('html').removeClass('res-modal-body-hidden');
          return 'show';
        });
  
        popper_fon.toggleClass(function (index, classs) {
  
          if ($(popper).hasClass('show')) {
            return 'show';
          } else
  
            return 'hidden';
        });
      });

    $( this).on('click', function () {
     
      popper.toggleClass(function (index, classs) {

        if ($(this).hasClass('show')) {
          $('body').removeClass('res-modal-body-hidden');
          $('html').removeClass('res-modal-body-hidden');
        } else{
          $('body').addClass('res-modal-body-hidden', 'hidden');
          $('html').addClass('res-modal-body-hidden', 'hidden');}
        return 'show';
      });

      popper_fon.toggleClass(function (index, classs) {

        if ($(popper).hasClass('show')) {
          return 'show';
        } else

          return 'hidden';
      });
    });
  };
})(jQuery);

$(function(){
  $('#navbar-toggle').resNavbar();
})
