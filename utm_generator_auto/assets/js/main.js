$(document).ready(function() {
  mode = 'generate_campaign';
  $('.form_group_adgroup_name').attr('hidden', 'hidden');
  $('.placement').attr('hidden', 'hidden');
  $('select').select2({
    theme: 'bootstrap4',
  });

  //Проверка аутентификации
  $('#login_form_link').click();

  // Переключение режимов работы
  $('#mode .btn').on('change', function(event){
    if ($(this).find('input').val() == 'generate_campaign') {
      $('.form_group_adgroup_name').attr('hidden', 'hidden');
      $('#adgroup_name').val('');
      $('.leftpane').find('input').removeAttr('readonly');
      $('.leftpane').find('input[type="checkbox"]').removeAttr('disabled');
      $('.leftpane').find('select').removeAttr('disabled');
      $('.rightpane').find('textarea').prop('readonly', true);
      $('.rightpane').find('textarea').text('');
      $('.bd-clipboard').show();
      $('.rightpane').find('.form-group').show();
      $('#hash_result').hide();
      $('#btn_start').text('Сгенерировать');
      mode = 'generate_campaign';
    } else if ($(this).find('input').val() == 'generate_adgroup') {
      $('.form_group_adgroup_name').removeAttr('hidden');
      $('.leftpane').find('input').removeAttr('readonly');
      $('.leftpane').find('input[type="checkbox"]').removeAttr('disabled');
      $('.leftpane').find('select').removeAttr('disabled');
      $('.rightpane').find('textarea').prop('readonly', true);
      $('.rightpane').find('textarea').text('');
      $('.bd-clipboard').show();
      $('.rightpane').find('.form-group').show();
      $('#hash_result').hide();
      $('#btn_start').text('Сгенерировать');
      mode = 'generate_adgroup';
    } else{
      $('.leftpane').find('input').prop('readonly', true);
      $('.leftpane').find('input[type="checkbox"]').prop('disabled', true);
      $('.leftpane').find('select').prop('disabled', true);
      $('.rightpane').find('textarea').removeAttr('readonly');
      $('.bd-clipboard').hide();
      $('.rightpane').find('.form-group').hide();
      $('#hash_result').show();
      $('#start_button').show();
      $('#btn_start').text('Спарсить');
      mode = 'parse';
    }
  });

  $('#campaign_name').on('change', function(event){
    $('#campaign_name').removeClass('is-invalid');
    $('#campaign_name_result').removeClass('is-invalid');
  });

  //Проверка на ошибки
  function checkErrors(){
    if ($('#website_link').val() == '') {
      alert('Введите ссылку на рекламируемую страницу');
      return false
    }
    if (~$('#website_link').val().toLowerCase().indexOf('utm_source') ||
        ~$('#website_link').val().toLowerCase().indexOf('utm_medium') ||
        ~$('#website_link').val().toLowerCase().indexOf('utm_campaign') ||
        ~$('#website_link').val().toLowerCase().indexOf('utm_content') ||
        ~$('#website_link').val().toLowerCase().indexOf('utm_term')) {
          alert('Ссылка на сайт уже содержит utm-метки. Удалите utm-метки из ссылки');
          return false
        }
    if ($('#campaign_name').val() == '') {
      alert('Введите название кампании');
      return false
    }
    if ($('#adgroup_name').val() == '' && mode == 'generate_adgroup') {
      alert('Введите название группы объявлений');
      return false
    }
    return true
  }

  // Обработка нажатия на кнопку "Сгенерировать"
  $('#btn_start').on('click', function(event){
      if (mode == 'generate_campaign' || mode == 'generate_adgroup'){
        if (checkErrors()){
          generate();
        }
      };
      if (mode == 'parse') {
        parse($('#hash').val());
      };
  });

  // Нажатия на кнопку "Скопировать"
  $('.btn-clipboard').on('click', function(event){
    var text = $(this).parent().parent().find('textarea').eq(0).text();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  });

  // Обработка нажатия на кнопку "Войти"
  $('#btn_login').on('click', function(event){
    email = $('#email').val();
    password = $('#password').val();
    authUser(email, password)
  });

}); //EOF
