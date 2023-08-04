// Свайпер---------------------------------------------------------------
const swiper = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    paginationBulletMessage: 'Здесь название слайда {{index}}',
  },
  // mousewheel: {
  //   invert: true,
  //   releaseOnEdges: true,
  // },
});

// Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [56.32120521710536,44.01251643001838],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 17
      });

      // Создание геообъекта с типом точка (метка).
      var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
              coordinates: [[56.32120521710536,44.01251643001838]] // координаты точки
          }
      });

      var myPlacemark = new ymaps.Placemark([56.32120521710536,44.01251643001838], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Лого1 1.svg',
        iconImageSize: [67, 50],
        iconImageOffset: [-10, -40]
      });


// Размещение геообъекта на карте.
myMap.geoObjects.add(myGeoObject);
myMap.geoObjects.add(myPlacemark);
  }

jQuery(document).ready(function () {
     
     $(".form__phone").mask("+7 (999) 999-99-99"); 
    
   
    jQuery('.form__send').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    form.find('.status').html('форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    });


});



  // Квиз-----------------------------------------------------------------------------


