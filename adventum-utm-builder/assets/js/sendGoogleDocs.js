// https://script.google.com/macros/s/AKfycbxvGz453Da3j1ZgNEfh6LwTxdxviENFr8BqZDzPpI2fgaj6Snk/exec
function sendData(){
  var client_name = $('#client_name').val();
  var product_name = $('#product_name').val();
  var campaign_name = $('#campaign_name').val();
  var website_link = $('#website_link').val();
  if ($('#https').is(':checked')){
    var https = true;
  } else{
    var https = false;
  }
  var source = $('#source option:selected').text();
  var medium = $('#medium option:selected').text();
  var geo = $('#geo option:selected').text();
  if ($('#supergeo').is(':checked')){
    var supergeo = true;
  } else{
    var supergeo = false;
  }
  var target_type = $('#target_type option:selected').text();
  var audience = $('#audience option:selected').text();
  var ad_format = $('#ad_format option:selected').text();
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
  var sex = $('#sex option:selected').text();
  if ($('#add_link').val()){
    var add_link = $('#add_link').val();
  } else{
    var add_link = 0;
  }
  if ($('#ab_test').val()){
    var ab_test = $('#ab_test').val();
  } else{
    var ab_test = 0;
  }
  if ($('#comment').val()){
    var comment = $('#comment').val();
  } else{
    var comment = 0;
  }
  if ($('#desktop').is(':checked')){
    var desktop = true;
  } else{
    var desktop = false;
  }
  if ($('#mobile').is(':checked')){
    var mobile = true;
  } else{
    var mobile = false;
  }
  if ($('#shortlink').is(':checked')){
    var shortlink = true;
  } else{
    var shortlink = false;
  }
  if ($('#campaign_name_result').text() != ''){
    var campaign_name_result = $('#campaign_name_result').text();
  } else{
    var campaign_name_result = 0;
  }
  if ($('#utm_result').text() != ''){
    var utm_result = $('#utm_result').text();
  } else{
    var utm_result = 0;
  }
  if ($('#calltracking_name_result').text() != ''){
    var calltracking_name_result = $('#calltracking_name_result').text();
  } else{
    var calltracking_name_result = 0;
  }
  if ($('#shortlink_result').text() != ''){
    var shortlink_result = $('#shortlink_result').text();
  } else{
    var shortlink_result = 0;
  }

  $.post('https://script.google.com/macros/s/AKfycbxvGz453Da3j1ZgNEfh6LwTxdxviENFr8BqZDzPpI2fgaj6Snk/exec',{
    client_name: client_name,
    product_name: product_name,
    campaign_name: campaign_name,
    website_link: website_link,
    https: https,
    source: source,
    medium: medium,
    geo: geo,
    supergeo: supergeo,
    target_type: target_type,
    audience: audience,
    ad_format: ad_format,
    age_from: age_from,
    age_to: age_to,
    sex: sex,
    add_link: add_link,
    ab_test: ab_test,
    comment: comment,
    desktop: desktop,
    mobile: mobile,
    shortlink: shortlink,
    campaign_name_result: campaign_name_result,
    utm_result: utm_result,
    calltracking_name_result: calltracking_name_result,
    shortlink_result: shortlink_result
  }).done(function(data){
    console.log('Данные отправлены в Google Sheets');
  }).fail(function(jqxhr, textStatus, error){
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  });
};
