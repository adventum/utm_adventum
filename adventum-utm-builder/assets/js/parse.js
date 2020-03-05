//Функция парсинга хешей
function parse(hash){
  $.ajax({
    url: 'https://us-central1-advinternal-251711.cloudfunctions.net/generateUTM',
    type: 'GET',
    dataType: 'json',
    crossorigin: true,
    data: {parse: hash},
    success: function (data){
      $('#client_name').val(data['client_val']);
      $('#client_name').trigger('change');
      $('#product_name').find('option').remove().end();
      $('#product_name').append('<option value = "'+ data['product_val'] +'">'+ data['product_name'] +'</option>').find('option:first').attr("selected","selected");
      $('#campaign_name').val(data['campaign_name']);
      if (data['https'] == 1){
        $('#https').prop('checked', true);
        $('#website_link').val('https://' + data['website_link']);
      } else{
        $('#https').prop('checked', false);
        $('#website_link').val('http://' + data['website_link']);
      }
      $('#source').val(data['source_val']);
      $('#source').trigger('change');
      $('#medium').find('option').remove().end();
      $('#medium').append('<option value = "'+ data['medium_val'] +'">'+ data['medium_name'] +'</option>').find('option:first').attr("selected","selected");
      $('#geo').val(data['geo_val']);
      if (data['supergeo'] == 1){
        $('#supergeo').prop('checked', true);
      } else{
        $('#supergeo').prop('checked', false);
      }
      $('#target_type').find('option').remove().end();
      $('#target_type').append('<option value = "'+ data['target_type_val'] +'">'+ data['target_type_name'] +'</option>').find('option:first').attr("selected","selected");
      $('#audience').find('option').remove().end();
      $('#audience').append('<option value = "'+ data['audience_val'] +'">'+ data['audience_name'] +'</option>').find('option:first').attr("selected","selected");
      $('#ad_format').find('option').remove().end();
      $('#ad_format').append('<option value = "'+ data['ad_format_val'] +'">'+ data['ad_format_name'] +'</option>').find('option:first').attr("selected","selected");
      if (data['age_from'] != 0){
        $('#age_from').val(data['age_from']);
      } else{
        $('#age_from').val('');
      }
      if (data['age_to'] != 0){
        $('#age_to').val(data['age_to']);
      } else{
        $('#age_to').val('');
      }
      $('#sex').val(data['sex_val']);
      if (data['ab_test'] != 0){
        $('#ab_test').val(data['ab_test']);
      } else{
        $('#ab_test').val('');
      }
      if (data['comment'] != 0){
        $('#comment').val(data['comment']);
      } else{
        $('#comment').val('');
      }
      if (data['placement'] != 0){
        $('#placement').val(data['placement']);
      } else{
        $('#placement').val('');
      }
      if (data['desktop'] == 1){
        $('#desktop').prop('checked', true);
      } else{
        $('#desktop').prop('checked', false);
      }
      if (data['mobile'] == 1){
        $('#mobile').prop('checked', true);
      } else{
        $('#mobile').prop('checked', false);
      }
    },
    error: function (jqxhr, textStatus, error){
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err);
      alert( "Request Failed: " + err);
    }
  });
};
