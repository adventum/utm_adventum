$(document).ready(function() {

  var clients_products=[];

  function getClients(){
    $.ajax({
      url: 'https://us-central1-advinternal-251711.cloudfunctions.net/getClients',
      type: 'GET',
      dataType: 'json',
      crossorigin: true,
      success: function (data){
        clients_products = data;
        for(var i=0;i<data['clients'].length;i++){
          $('#client_name').append('<option value = "'+ data['clients'][i]['name'] +'">'+ data['clients'][i]['name'] +'</option>').find('option:first').attr("selected","selected");
        };
        for (var j=0;j<data['clients'][0]['products'].length;j++){
          $('#product_name').append('<option value = "'+ data['clients'][0]['products'][j] +'">'+ data['clients'][0]['products'][j] +'</option>').find('option:first').attr("selected","selected");
        };
      },
      error: function (jqxhr, textStatus, error){
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err);
        alert( "Request Failed: " + err);
      }
    });
  };

  let medium = [
    [
      'Оплата за клик (cpc)', //0
      'Оплата за показы (cpm)',//1
      'Оплата за действия (cpa)',//2
      'Email',//3
      'Оплата за лиды (cpl)',//4
      'Продвижение в соцсетях (social-promo)',//5
      'Просмотры (cpv)',//6
      'Оплата за подписчика (cpf)',//7
      'SMS' //8
    ],
    [
      'cpc',
      'cpm',
      'cpa',
      'email',
      'cpl',
      'social-promo',
      'cpv',
      'cpf',
      'sms'
    ]
  ];

  let targeting = [
    [
      'Статичное размещение', //0
      'Поисковые запросы',//1
      'Группы в соцсетях',//2
      'Ремаркетинг и базы',//3
      'Look-a-like',//4
      'Супергео',//5
      'Аудиторный таргетинг',//6
      'Автотаргетинг',//7
      'Интересы',//8
      'Категории',//9
      'Блогеры' //10
    ],
    [
      'static',
      'keywords',
      'social_groups',
      'remarketing',
      'look_a_like',
      'supergeo',
      'builtin_audience',
      'nokeywords',
      'interests',
      'categories',
      'bloggers'
    ]
  ];

  let ad_format = [
    [
      'Смарт-баннеры', //0
      'МКБ',//1
      'Видео',//2
      'ТГБ',//3
      'Текст',//4
      'Промопост в ленте',//5
      'Карусель',//6
      'Баннер',//7
      'Лидформа',//8
      'Канвас',//9
      'Pre-roll',//10
      'Пост/Статья',//11
      'All-roll',//12
      'Нативный формат',//13
      'Пины', //14
      'Билборды', //15
      'SMS', //16
      'True View', //17
      'Эксклюзив', //18
      'Мультиформат' //19
    ],
    [
      'smart_banners',
      'mkb',
      'video',
      'tgb',
      'text',
      'promopost',
      'carousel',
      'banner',
      'leadform',
      'canvas',
      'pre_roll',
      'post',
      'all_roll',
      'native',
      'pins',
      'billboards',
      'sms',
      'true_view',
      'exclusive',
      'multiformat'
    ]
  ];

  function setProduct(){
    current_client = $('#client_name').val();
    $('#product_name').find('option').remove().end();
    for (var i = 0; i < clients_products['clients'].length; i++) {
      if (clients_products['clients'][i]['name'] == current_client){
        for (var j = 0; j < clients_products['clients'][i]['products'].length; j++){
          $('#product_name').append('<option value = "'+ clients_products['clients'][i]['products'][j] +'">'+ clients_products['clients'][i]['products'][j] +'</option>').find('option:first').attr("selected","selected");
        };
      };
    };
  };

  function setMedium() {
    var allowed_medium = new Array();
    switch ($('#source').val()) {
      case 'yandex_search':
        allowed_medium = [0,6];
        break;
      case 'yandex_network':
        allowed_medium = [0,6];
        break;
      case 'yandex_media':
        allowed_medium = [1];
        break;
      case 'yandex_display':
        allowed_medium = [1,6];
        break;
      case 'google_search':
        allowed_medium = [0,6];
        break;
      case 'google_network':
        allowed_medium = [0,6];
        break;
      case 'dv360':
        allowed_medium = [1,6];
        break;
      case 'dv360_dcm':
        allowed_medium = [1,6];
        break;
      case 'facebook':
        allowed_medium = [0,1,2,4,5,7];
        break;
      case 'instagram':
        allowed_medium = [0,1,2,4,5,7];
        break;
      case 'facebook-instagram':
        allowed_medium = [0,1,2,4,5,7];
        break;
      case 'vk':
        allowed_medium = [0,1,2,4,5,7];
        break;
      case 'mytarget':
        allowed_medium = [0,1,2,4,5,7];
        break;
      case 'telegram':
        allowed_medium = [2,5];
        break;
      case 'getintent':
        allowed_medium = [0,1,6];
        break;
      case 'getintent_dcm':
        allowed_medium = [0,1,6];
        break;
      case 'beeline':
        allowed_medium = [0,1];
        break;
      case 'soloway':
        allowed_medium = [0,1,6];
        break;
      case 'segmento':
        allowed_medium = [0,1];
        break;
      case 'criteo':
        allowed_medium = [0];
        break;
      case 'sociomantic':
        allowed_medium = [0];
        break;
      case 'email':
        allowed_medium = [3];
        break;
      case 'nativeroll':
        allowed_medium = [6];
        break;
      case 'yandex_navigator':
        allowed_medium = [1];
        break;
      case 'yandex_maps':
        allowed_medium = [1];
        break;
      case '2gis':
        allowed_medium = [1];
        break;
      case 'sms':
        allowed_medium = [8];
        break;
      case 'youtube':
        allowed_medium = [2,5];
        break;
      case 'direct_buying':
        allowed_medium = [1,6];
        break;
      case 'yandex_market':
        allowed_medium = [0,2];
        break;
      case 'firstdata':
        allowed_medium = [0,1];
        break;
    };
    $('#medium').find('option').remove().end();
    for (var i = 0; i < allowed_medium.length; i++) {
      var medium_name = medium[0][allowed_medium[i]];
      var medium_val = medium[1][allowed_medium[i]];
      $('#medium').append('<option value = "'+ medium_val +'">'+ medium_name +'</option>').find('option:first').attr("selected","selected");
    }
  };

  function setTargeting() {
    var allowed_targeting = new Array();
    switch ($('#source').val()) {
      case 'yandex_search':
        allowed_targeting = [1,3,4,5,6,7];
        break;
      case 'yandex_network':
        allowed_targeting = [1,3,4,5,6,7];
        break;
      case 'yandex_media':
        allowed_targeting = [1,3,6];
        break;
      case 'yandex_display':
        allowed_targeting = [3,8,9];
        break;
      case 'google_search':
        allowed_targeting = [1,3,4,5,6,7];
        break;
      case 'google_network':
        allowed_targeting = [1,3,4,5,6,7];
        break;
      case 'dv360':
        allowed_targeting = [1,3,6];
        break;
      case 'dv360_dcm':
        allowed_targeting = [1,3,6];
        break;
      case 'facebook':
        allowed_targeting = [0,2,3,4,5,6,10];
        break;
      case 'instagram':
        allowed_targeting = [0,2,3,4,5,6,10];
        break;
      case 'facebook-instagram':
        allowed_targeting = [0,2,3,4,5,6,10];
        break;
      case 'vk':
        allowed_targeting = [0,2,3,4,5,6,10];
        break;
      case 'mytarget':
        allowed_targeting = [1,2,3,4,5,6,10];
        break;
      case 'telegram':
        allowed_targeting = [0,2,10];
        break;
      case 'getintent':
        allowed_targeting = [0,1,3,6];
        break;
      case 'getintent_dcm':
        allowed_targeting = [0,1,3,6];
        break;
      case 'beeline':
        allowed_targeting = [3,6];
        break;
      case 'soloway':
        allowed_targeting = [3,6];
        break;
      case 'segmento':
        allowed_targeting = [3,6];
        break;
      case 'criteo':
        allowed_targeting = [3];
        break;
      case 'sociomantic':
        allowed_targeting = [3];
        break;
      case 'email':
        allowed_targeting = [0,3,4,6];
        break;
      case 'nativeroll':
        allowed_targeting = [6];
        break;
      case 'yandex_navigator':
        allowed_targeting = [6];
        break;
      case 'yandex_maps':
        allowed_targeting = [0,6];
        break;
      case '2gis':
        allowed_targeting = [6];
        break;
      case 'sms':
        allowed_targeting = [3,6];
        break;
      case 'youtube':
        allowed_targeting = [10];
        break;
      case 'direct_buying':
        allowed_targeting = [0];
        break;
      case 'yandex_market':
        allowed_targeting = [0];
        break;
      case 'firstdata':
        allowed_targeting = [6];
        break;
    };
    $('#target_type').find('option').remove().end();
    for (var i = 0; i < allowed_targeting.length; i++) {
      var targeting_name = targeting[0][allowed_targeting[i]];
      var targeting_val = targeting[1][allowed_targeting[i]];
      $('#target_type').append('<option value = "'+ targeting_val +'">'+ targeting_name +'</option>').find('option:first').attr("selected","selected");
    }
  };

  function setAdFormat() {
    var allowed_adformat = new Array();
    switch ($('#source').val()) {
      case 'yandex_search':
        allowed_adformat = [1,4];
        break;
      case 'yandex_network':
        allowed_adformat = [0,1,2,3,7];
        break;
      case 'yandex_media':
        allowed_adformat = [7,12];
        break;
      case 'yandex_display':
        allowed_adformat = [12];
        break;
      case 'google_search':
        allowed_adformat = [4];
        break;
      case 'google_network':
        allowed_adformat = [2,3,7,10];
        break;
      case 'dv360':
        allowed_adformat = [7,12,13,17];
        break;
      case 'dv360_dcm':
        allowed_adformat = [7,12,13,17];
        break;
      case 'facebook':
        allowed_adformat = [2,3,5,6,7,8,9,11];
        break;
      case 'instagram':
        allowed_adformat = [2,3,5,6,7,8,9,11];
        break;
      case 'facebook-instagram':
        allowed_adformat = [2,3,5,6,7,8,9,11];
        break;
      case 'vk':
        allowed_adformat = [2,3,5,6,7,8,9,11];
        break;
      case 'mytarget':
        allowed_adformat = [2,3,5,6,7,8,9,11];
        break;
      case 'telegram':
        allowed_adformat = [11];
        break;
      case 'getintent':
        allowed_adformat = [7,12];
        break;
      case 'getintent_dcm':
        allowed_adformat = [7,12];
        break;
      case 'beeline':
        allowed_adformat = [7];
        break;
      case 'soloway':
        allowed_adformat = [7,12];
        break;
      case 'segmento':
        allowed_adformat = [7];
        break;
      case 'criteo':
        allowed_adformat = [7];
        break;
      case 'sociomantic':
        allowed_adformat = [7];
        break;
      case 'email':
        allowed_adformat = [2,3,5,6,7,8,9,11];
        break;
      case 'nativeroll':
        allowed_adformat = [2];
        break;
      case 'yandex_navigator':
        allowed_adformat = [7,14,15];
        break;
      case 'yandex_maps':
        allowed_adformat = [7];
        break;
      case '2gis':
        allowed_adformat = [14,15];
        break;
      case 'sms':
        allowed_adformat = [16];
        break;
      case 'youtube':
        allowed_adformat = [10,13,18];
        break;
      case 'direct_buying':
        allowed_adformat = [3,7,11,13];
        break;
      case 'yandex_market':
        allowed_adformat = [3];
        break;
      case 'firstdata':
        allowed_adformat = [5,6,7,19];
        break;
    };
    $('#ad_format').find('option').remove().end();
    for (var i = 0; i < allowed_adformat.length; i++) {
      var ad_format_name = ad_format[0][allowed_adformat[i]];
      var ad_format_val = ad_format[1][allowed_adformat[i]];
      $('#ad_format').append('<option value = "'+ ad_format_val +'">'+ ad_format_name +'</option>').find('option:first').attr("selected","selected");
    }
  };

  $('#source').on('change', function(event){
    setMedium();
    setTargeting();
    setAdFormat();
    if ($('#source').val() == 'direct_buying'){
      $('.placement').removeAttr('hidden');
    } else{
      $('.placement').attr('hidden', 'hidden');
      $('#placement').val('');
    }
  });

  $('#client_name').on('change', function(event){
    setProduct();
  });

  $('#btn_generate').on('change', function(event){
    setMedium();
    setTargeting();
    setProduct();
    setAdFormat();
  });

  getClients();
  setMedium();
  setTargeting();
  setAdFormat();
});
