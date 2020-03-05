// Функция получения короткого URL
function get_short_url(long_url)
{
    $.getJSON(
        "https://api-ssl.bitly.com/v3/shorten",
        {
            "format": "json",
            "access_token": "45bf0ee1397b469f7849883193eb07b9c8bac094",
            "longUrl": encodeURI(long_url)
        })
        .done(function(data){
          console.log( "Bit.ly data: " + data.data.url );
          $('#shortlink_result').text(data.data.url);
        })
        .fail(function(jqxhr, textStatus, error){
          var err = textStatus + ", " + error;
          console.log( "Request Failed: " + err );
        });
};
