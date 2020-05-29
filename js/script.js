$(document).ready(function(){  
  
  $('.menu-burger').on('click', function() {

    $(this).toggleClass('menu-burger_close');

    $('.header-content__menu').slideToggle(200, function() {

      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
      
    });
    
  });
  

  $('.btn').on('click', function () {

    var titleValue = $(this).val();   
  
    document.querySelector('.callback-form__title').innerHTML = titleValue;

    $('.popup-page').fadeIn();
    $('body').css('overflow', 'hidden');

  });
  

  $('.popup-block__btn').on('click', function () { 
    $('.popup-page').fadeOut();
    $('body').css('overflow', 'auto');
  });


  $('.popup-page').on('click', function (e) {    
    if (e.target == this) 
      e.preventDefault(),
      $('.popup-page').fadeOut(),
      $('body').css('overflow', 'auto');    
  });


  $("a[href^='#']").on('click', function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, {
      duration: 1000,
      easing: 'swing'
    });
    return false;
  });  


  $('.callback-form__phone').inputmask({"mask": "+7 (999) 999-9999"});
  
  $('form').each(function () {
    $(this).validate({      
      rules: {
        Телефон: {
          required: true,
        },
        Имя: {
          required: true,          
        }
      },
      messages: {
        Телефон: {
          required: 'Обязательное поле для заполнения'
        },
        Имя: {
          required: 'Обязательное поле для заполнения'
        }
      },
      submitHandler(form) {
        let th = $(form);

        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
          
        }).done(() => {
            alert ('Ваша заявка принята. Мы свяжемся с вами в ближайше время!');
            $('.popup-page').fadeOut();
            $('body').css('overflow', 'auto');

            th.trigger('reset');

          });
          
        return false;
      }
    });
    
  });

});
