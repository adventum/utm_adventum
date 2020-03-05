$(document).ready(function() {

/*
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
  */

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
      'True View' //17
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
      'true_view'
    ]
  ];

  let geo = [
    [
      'Россия',
      'Москва и область',
      'Россия и мир',
      'Мир',
      'Москва',
      'Московская область',
      'РФ кроме(Москва и область)',
      'Северо-Западный федеральный округ',
      'Южный федеральный округ',
      'Северо-Кавказский федеральный округ',
      'Уральский федеральный округ',
      'Сибирский федеральный округ',
      'Центральный федеральный округ',
      'Приволжский федеральный округ',
      'Дальневосточный федеральный округ',
      'Россия - Запад',
      'Россия - Восток + ДВ'
    ],
    [
      'rf', //0
      'mmo', //1
      'rf_mir', //2
      'mir', //3
      'msk', //4
      'mo', //5
      'rf_nomno', //6
      'rf_szfo', //7
      'rf_yufo', //8
      'rf_skfo', //9
      'rf_urfo', //10
      'rf_sibfo', //11
      'rf_cfo', //12
      'rf_pfo', //13
      'rf_dvfo', //14
      'rf_zapad', //15
      'rf_vostok' //16
    ]
  ];

  function setModel(){
    switch ($('#auto_brand').val()){
      case 'not_set':
        auto_model = [];
        break;
      case 'Audi':
        auto_model = [
          '100',
          'A3',
          'A4',
          'A5',
          'A6',
          'A7',
          'A8',
          'Q3',
          'Q5',
          'Q7',
          'Q8'
        ];
        break;
      case 'BMW':
        auto_model = [
          '1 серия',
          '2 серия',
          '3 серия',
          '4 серия',
          '5 серия',
          '6 серия',
          '7 серия',
          'X1',
          'X2',
          'X3',
          'X4',
          'X5',
          'X6',
          'X7'
        ];
        break;
      case 'Cadillac':
        auto_model = [
          'ATS',
          'BLS',
          'CT6',
          'CTS',
          'CTS-V',
          'DeVille',
          'Escalade',
          'Seville',
          'SRX',
          'STS',
          'XT5'
        ];
        break;
      case 'Chevrolet':
        auto_model = [
          'Aveo',
          'Captiva',
          'Cruze',
          'Epica',
          'Express',
          'Lacetti',
          'Lanos',
          'Niva',
          'Orlando',
          'Tahoe',
          'TrailBlazer'
        ];
        break;
      case 'Citroen':
        auto_model = [
          'Berlingo',
          'C-Crosser',
          'C-Elysee',
          'C3',
          'C3 Picasso',
          'C4',
          'C4 Picasso',
          'C5',
          'DS4',
          'SpaceTourer',
          'Xsara Picasso'
        ];
        break;
      case 'Daewoo':
        auto_model = [
          'Damas',
          'Espero',
          'Gentra',
          'Lacetti',
          'Lanos',
          'Leganza',
          'Magnus',
          'Matiz',
          'Nexia',
          'Nubira',
          'Winstorm'
        ];
        break;
      case 'Ford':
        auto_model = [
          'C-MAX',
          'EcoSport',
          'Escape',
          'Explorer',
          'Fiesta',
          'Focus',
          'Fusion',
          'Galaxy',
          'Kuga',
          'Mondeo',
          'S-MAX'
        ];
        break;
      case 'Great Wall':
        auto_model = [
          'Coolbear',
          'Deer',
          'Hover',
          'Hover H3',
          'Hover H5',
          'Hover H6',
          'Hover M2',
          'Hover M4',
          'Safe',
          'Sailor',
          'Wingle'
        ];
        break;
      case 'Honda':
        auto_model = [
          'Accord',
          'Civic',
          'CR-V',
          'Crosstour',
          'Fit',
          'HR-V',
          'Legend',
          'Odyssey',
          'Pilot',
          'Prelude',
          'Stepwgn'
        ];
        break;
      case 'Hyundai':
        auto_model = [
          'Accent',
          'Creta',
          'Elantra',
          'Getz',
          'Grand Starex',
          'i40',
          'ix35',
          'Santa Fe',
          'Solaris',
          'Sonata',
          'Tucson'
        ];
        break;
      case 'Infiniti':
        auto_model = [
          'EX',
          'FX',
          'G',
          'JX',
          'M',
          'Q50',
          'QX50',
          'QX56',
          'QX60',
          'QX70',
          'QX80'
        ];
        break;
      case 'Jeep':
        auto_model = [
          'Cherokee',
          'Commander',
          'Compass',
          'Grand Cherokee',
          'Liberty',
          'Renegade',
          'Wrangler'
        ];
        break;
      case 'Kia':
        auto_model = [
          'Ceed',
          'Cerato',
          'Mohave',
          'Optima',
          'Picanto',
          'Rio',
          'Sorento',
          'Soul',
          'Spectra',
          'Sportage',
          'Stinger'
        ];
        break;
      case 'Land Rover':
        auto_model = [
          'Defender',
          'Discovery',
          'Discovery Sport',
          'Freelander',
          'Range Rover',
          'Range Rover Evoque',
          'Range Rover Sport',
          'Range Rover Velar',
          'Series III'
        ];
        break;
      case 'Lexus':
        auto_model = [
          'CT',
          'ES',
          'GS',
          'GX',
          'IS',
          'LS',
          'LX',
          'NX',
          'RX',
          'SC',
          'UX'
        ];
        break;
      case 'MINI':
        auto_model = [
          'Cabrio',
          'Clubman',
          'Countryman',
          'Coupe',
          'Hatch',
          'Paceman',
          'Roadster'
        ];
        break;
      case 'Mazda':
        auto_model = [
          '3',
          '323',
          '5',
          '6',
          '626',
          'BT-50',
          'CX-5',
          'CX-7',
          'CX-9',
          'MPV',
          'Tribute'
        ];
        break;
      case 'Mercedes-Benz':
        auto_model = [
          'A-klasse',
          'C-klasse',
          'E-klasse',
          'GL-klasse',
          'GLA-klasse',
          'GLC',
          'GLE',
          'GLS-klasse',
          'M-klasse',
          'S-klasse',
          'V-klasse'
        ];
        break;
      case 'Mitsubishi':
        auto_model = [
          'ASX',
          'Carisma',
          'Colt',
          'Eclipse Cross',
          'Galant',
          'L200',
          'Lancer',
          'Montero Sport',
          'Outlander',
          'Pajero',
          'Pajero Sport'
        ];
        break;
      case 'Nissan':
        auto_model = [
          'Almera',
          'Almera Classic',
          'Juke',
          'Murano',
          'Pathfinder',
          'Primera',
          'Qashqai',
          'Teana',
          'Terrano',
          'Tiida',
          'X-Trail'
        ];
        break;
      case 'Opel':
        auto_model = [
          'Antara',
          'Astra',
          'Combo',
          'Corsa',
          'Frontera',
          'Insignia',
          'Meriva',
          'Mokka',
          'Omega',
          'Vectra',
          'Zafira'
        ];
        break;
      case 'Peugeot':
        auto_model = [
          '206',
          '207',
          '3008',
          '307',
          '308',
          '4007',
          '406',
          '407',
          '408',
          'Partner',
          'Traveller'
        ];
        break;
      case 'Porsche':
        auto_model = [
          '356',
          '911',
          '911 GT2',
          '911 GT3',
          '924',
          '944',
          'Boxster',
          'Cayenne',
          'Cayman',
          'Macan',
          'Panamera'
        ];
        break;
      case 'Renault':
        auto_model = [
          'Arkana',
          'Duster',
          'Fluence',
          'Kangoo',
          'Kaptur',
          'Koleos',
          'Logan',
          'Megane',
          'Sandero',
          'Scenic',
          'Symbol'
        ];
        break;
      case 'Skoda':
        auto_model = [
          '105, 120',
          'Fabia',
          'Fabia RS',
          'Felicia',
          'Kodiaq',
          'Octavia',
          'Octavia RS',
          'Rapid',
          'Roomster',
          'Superb',
          'Yeti'
        ];
        break;
      case 'SsangYong':
        auto_model = [
          'Actyon',
          'Actyon Sports',
          'Istana',
          'Korando',
          'Korando Sports',
          'Kyron',
          'Musso',
          'Rexton',
          'Rodius',
          'Stavic',
          'Tivoli'
        ];
        break;
      case 'Subaru':
        auto_model = [
          'Forester',
          'Impreza',
          'Impreza WRX',
          'Impreza WRX STi',
          'Legacy',
          'Legacy Lancaster',
          'Outback',
          'Tribeca',
          'WRX',
          'WRX STi',
          'XV'
        ];
        break;
      case 'Suzuki':
        auto_model = [
          'Alto',
          'Baleno',
          'Escudo',
          'Grand Vitara',
          'Ignis',
          'Jimny',
          'Liana',
          'Splash',
          'Swift',
          'SX4',
          'Vitara'
        ];
        break;
      case 'Toyota':
        auto_model = [
          'Auris',
          'Avensis',
          'Camry',
          'Corolla',
          'Fortuner',
          'Highlander',
          'Hilux',
          'Land Cruiser',
          'Land Cruiser Prado',
          'Prius',
          'RAV4'
        ];
        break;
      case 'Volkswagen':
        auto_model = [
          'Caddy',
          'Caravelle',
          'Golf',
          'Jetta',
          'Multivan',
          'Passat',
          'Passat CC',
          'Polo',
          'Tiguan',
          'Touareg',
          'Transporter',
          'Teramont'
        ];
        break;
      case 'Volvo':
        auto_model = [
          '850',
          'S40',
          'S60',
          'S80',
          'V40 Cross Country',
          'V60 Cross Country',
          'V90 Cross Country',
          'XC40',
          'XC60',
          'XC70',
          'XC90'
        ];
        break;
      case 'ГАЗ':
        auto_model = [
          '12 ЗИМ',
          '13 Чайка',
          '21 Волга',
          '24 Волга',
          '3102 Волга',
          '31029 Волга',
          '3110 Волга',
          '31105 Волга',
          '69',
          'Volga Siber',
          'М-20 Победа'
        ];
        break;
      case 'Лада (ВАЗ)':
        auto_model = [
          '2107',
          '2110',
          '2112',
          '2114',
          '2115',
          '2121 (4x4)',
          'Granta',
          'Kalina',
          'Largus',
          'Priora',
          'Vesta'
        ];
        break;
      case 'УАЗ':
        auto_model = [
          '3151',
          '3153',
          '3159',
          '3160',
          '3162 Simbir',
          '469',
          'Hunter',
          'Patriot',
          'Pickup'
        ];
        break;
    };
    $('#auto_model').find('option').remove().end();
    for (var i = 0; i < auto_model.length; i++) {
      $('#auto_model').append(new Option(auto_model[i], auto_model[i], false, false)).trigger('change').find('option:first').attr("selected","selected");
    };
    $('#auto_model').append(new Option('Не задано', 'Не задано', true, true)).trigger('change');
  };

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
      case 'direct_buying':
        allowed_medium = [1,6];
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
      case 'direct_buying':
        allowed_targeting = [0];
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
      case 'direct_buying':
        allowed_adformat = [3,7,11,13];
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

  $('#auto_brand').on('change', function(event){
    setModel();
  });

  //getClients();
  setMedium();
  setTargeting();
  setAdFormat();
  setModel();
});
