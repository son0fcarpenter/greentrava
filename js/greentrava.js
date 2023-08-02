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


const event = 'submit';
function handleFormSubmit(event) {  
  // Просим форму не отправлять данные самостоятельно
  event.preventDefault()
  console.log('Отправка!')
}

const applicantForm = document.getElementById('order')
applicantForm.addEventListener('submit', handleFormSubmit)


  // Квиз-----------------------------------------------------------------------------


