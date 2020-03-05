// Функция проверки и исправления URL-адреса
function checkURL(url){
  url = url.replace('http://','');
  url = url.replace('https://','')
  url = url.replace(/[,+()$~%'":*!|<>{}]/g, '');
  if (url.slice(-1) != '/' & url.includes('#') == false & url.includes('?') == false){
    url += '/';
  }
  return url.toLowerCase();
};

function generate(){
  var client_val = $('#client_name').val();
  var client_name = $('#client_name option:selected').text();
  var product_val = $('#product_name').val();
  var product_name = $('#product_name option:selected').text();
  var campaign_name = cyrill_to_latin($('#campaign_name').val()).toLowerCase();
  if ($('#adgroup_name').val()){
    var adgroup_name = cyrill_to_latin($('#adgroup_name').val()).toLowerCase();
  } else {
    var adgroup_name = 0;
  }
  var website_link = checkURL($('#website_link').val()).toLowerCase();
  var source_val = $('#source').val();
  var source_name = $('#source option:selected').text();
  var medium_val = $('#medium').val();
  var medium_name = $('#medium option:selected').text();
  var geo_val = $('#geo').val();
  var geo_name = $('#geo option:selected').text();
  if ($('#supergeo').is(':checked')){
    var supergeo = 1;
  } else{
    var supergeo = 0;
  }
  var target_type_val = $('#target_type').val();
  var target_type_name = $('#target_type option:selected').text();
  var audience_val = $('#audience').val();
  var audience_name = $('#audience option:selected').text();
  var ad_format_val = $('#ad_format').val();
  var ad_format_name = $('#ad_format option:selected').text();
  if ($('#age_from').val()){
    var age_from = $('#age_from').val();
  } else{
    var age_from = 0;
  }
  if ($('#age_to').val()){
    var age_to = $('#age_to').val();
  } else{
    var age_to = 0;
  }
  var sex_val = $('#sex').val();
  var sex_name = $('#sex option:selected').text();
  if ($('#ab_test').val()){
    var ab_test = cyrill_to_latin($('#ab_test').val()).toLowerCase();
  } else{
    var ab_test = 0;
  }
  if ($('#comment').val()){
    var comment = cyrill_to_latin($('#comment').val()).toLowerCase();
  } else{
    var comment = 0;
  }
  if ($('#desktop').is(':checked')){
    var desktop = 1;
  } else{
    var desktop = 0;
  }
  if ($('#mobile').is(':checked')){
    var mobile = 1;
  } else{
    var mobile = 0;
  }
  if ($('#shortlink').is(':checked')){
    var shortlink = 1;
  } else{
    var shortlink = 0;
  }
  if ($('#placement').val()){
    var placement = cyrill_to_latin($('#placement').val()).toLowerCase();
  } else{
    var placement = 0;
  }

  var request = {
      client_val: client_val,
      client_name: client_name,
      product_val: product_val,
      product_name: product_name,
      campaign_name: campaign_name,
      adgroup_name: adgroup_name,
      website_link: website_link,
      source_val: source_val,
      source_name: source_name,
      medium_val: medium_val,
      medium_name: medium_name,
      geo_val: geo_val,
      geo_name: geo_name,
      supergeo: supergeo,
      target_type_val: target_type_val,
      target_type_name: target_type_name,
      audience_val: audience_val,
      audience_name: audience_name,
      ad_format_val: ad_format_val,
      ad_format_name: ad_format_name,
      age_from: age_from,
      age_to: age_to,
      sex_val: sex_val,
      sex_name: sex_name,
      ab_test: ab_test,
      comment: comment,
      desktop: desktop,
      mobile: mobile,
      placement: placement
  }

  $.ajax({
    url: 'https://us-central1-advinternal-251711.cloudfunctions.net/generateUTM',
    type: 'GET',
    dataType: 'json',
    crossorigin: true,
    data: {request: JSON.stringify(request)},
    success: function (data){
      $('#campaign_name_result').text(data['campaign_name_result']);
      $('#adgroup_name_result').text(data['adgroup_name_result']);
      var utm_result = '';
      if ($('#https').is(':checked')){
        utm_result = 'https://' + data['utm_result'];
        $('#utm_result').text(utm_result);
      } else{
        utm_result = 'http://' + data['utm_result'];
        $('#utm_result').text(utm_result);
      }
      if ($('#add_link').val()){
        var add_link = cyrill_to_latin($('#add_link').val()).toLowerCase();
        $('#utm_result').text($('#utm_result').text() + '|' + add_link)
      }
      $('#calltracking_name_result').text(data['calltracking_name_result']);
      $('#campaign_name_count').html(data['campaign_name_result'].length + ' символов');
      $('#utm_result_count').html(data['utm_result'].length + ' символов');
      $('#calltracking_name_count').html(data['calltracking_name_result'].length + ' символов');
      if ($('#shortlink').is(':checked')){
        get_short_url(utm_result);
      }
      if($('#qr').is(':checked')){
        $('.qr').find('img').remove().end();
        $('.qr').append('<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ encodeURIComponent(utm_result) +'">');
      } else{
        $('.qr').find('img').remove().end();
      }
      // Проверка длины названия кампании для майтаргета и ВК
      if ($('#source').val() == 'mytarget'){
        if (data['campaign_name_result'].length > 99){
          alert('Название кампании должно быть не более 99 символов. Сократите на '+ (data['campaign_name_result'].length - 99) +' символов');
          $('#campaign_name').addClass('is-invalid');
          $('#campaign_name_result').addClass('is-invalid');
        }
      }

      if ($('#source').val() == 'vk'){
        if (data['campaign_name_result'].length > 60){
          alert('Название кампании должно быть не более 60 символов. Сократите на '+ (data['campaign_name_result'].length - 60) +' символов');
          $('#campaign_name').addClass('is-invalid');
          $('#campaign_name_result').addClass('is-invalid');
        }
      }
    },
    error: function (jqxhr, textStatus, error){
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err);
    }
  });
};
