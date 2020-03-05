function checkTokenCookies(){

};

function setTokenCookies(){

};

function authUser(email, password){
  var request = {
    email: email,
    password: password
  }

  $('#form_error_message').hide();

  $.ajax({
    url: 'https://us-central1-advinternal-251711.cloudfunctions.net/auto_utm_login',
    type: 'GET',
    dataType: 'json',
    crossorigin: true,
    data: {auth: JSON.stringify(request)},
    success: function(data){
      if (data['status'] == 'ok'){
        $('#dealer_center_name').find('option').remove().end();
        for (i = 0; i<data['dealer_center_name'].length; i++){
            $('#dealer_center_name').append('<option value = "'+ data['dealer_center_name'][i] +'">'+ data['dealer_center_name'][i] +'</option>').find('option:first').attr("selected","selected");
        };
        $('#login_form_link').click();
      } else{
        $('#form_error_message').html(data['error']);
        $('#form_error_message').show();
      }
    },
    error: function (jqxhr, textStatus, error){
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err);
    }
  });
};
