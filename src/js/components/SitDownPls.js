document.addEventListener('DOMContentLoaded', function() {


  //*1.Селект(Выбор) в codepen-е. Здесь два селекта объединиkb в один код с помощью переменных(const)*//
  //Селект Москва
  const citySelect = () => {
    const element = document.querySelector('.header__city-select');
      const choices = new Choices(element, {
        searchEnabled: false,//убирает Ентер*/
        /*работает если отключить searchEnabled: false. будет поиск по селекту*/
        noResultsText: 'Ничего не найдено'
      }); 
  };
  
  citySelect();
  
  //Селект Диваны
  // const сategoriesSelect = () => {
  //   const element = document.querySelector('.header__сategoriesSelect');
  //     const choices = new Choices(element, {
  //       searchEnabled: false,//убирает Ентер*/
  //       /*работает если отключить searchEnabled: false. будет поиск по селекту*/
  //       noResultsText: 'Ничего не найдено'
  //     }); 
  // };
  
  // сategoriesSelect();
  
  //Селект Диваны
  const selector = document.querySelector(".header__сategories-select")  
  
    const choices = new Choices(selector, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices header__сategories-form',
       },
    });



    /*Клик БУРГЕР-Саши*/
	 // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
	 const burger = document.querySelector('#burger');
	 const menu = document.querySelector('#menu');

	 burger.addEventListener('click',  function() {
		 burger.classList.add('open');
		 
		 menu.classList.toggle('is-active');
		 
		 if (menu.classList.contains('is-active')) {
			menu.style.transition = 'transform .7s ease-in-out';
		}
	 });
	 menu.addEventListener('transitionend', function () {
		 if (!menu.classList.contains('is-active')) {
		     menu.style.transition = '';
			 burger.classList.remove('open');
		}
	 });




  // slider-hero Не удалять//
  const swiperOb = document.querySelector(".hero")// Для обёртки if
  if (swiperOb) { // Обёртка if. Спасение Gulp-а от null в браузере
	  const heroSwiper = new Swiper('.hero__slider', {
		speed: 3000,//Интервал ожидания
		effect: 'slide',//Слайдер постепенно исчезает.
		
		autoplay: {
		  delay: 5000,//Интервал ожидания
		  disableOnInteraction: false,
		},

	  // If we need pagination(Разбивка на страницы)
		pagination: {
		  el: ".hero__pagination",
		  clickable: true,
		  renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		  },
		},
	  });
    };

    //js-код первого объединёный. Варин код//
  /*Ещё(Смотреть больше товаров) button - divan__btn*/
  // const list = document.getElementById('list-further');
  // const btn = document.querySelector('.divan__btn > .divan__span_js');
  //btn.innerHTML = "Смотреть больше товаров"; <- Нужен при нескольких списков//
  // const moreButton = document.getElementById('more1');
  // moreButton.addEventListener('click', function () {
  //   list.classList.toggle('full');
  //   (btn.innerHTML === 'Смотреть больше товаров') ? btn.innerHTML = 'Свернуть' : btn.innerHTML = 'Смотреть больше товаров';
  // }); 



  //Слайдер offer - Специальные предложения
  const swiperOf = document.querySelector(".offer")// Для обёртки if
  if (swiperOf) { // Обёртка if. Спасение Gulp-а от null в браузере
  const offerSwiper = new Swiper(".offer__swiper-container", {
    slidesPerGroup:3,
    slidesPerView:"auto",
    breakpoints: {
      210: {
        slidesPerGroup:1,
        spaceBetween: 32,
      },

      747: {
        slidesPerGroup:2,
        spaceBetween: 32,
      },

      976: {
        slidesPerGroup:3,
        spaceBetween: 32,
      }},

      //Бесконечное листание страниц
      speed: 3000,//Интервал ожидания

      autoplay: {
        delay: 5000,//Интервал ожидания
        disableOnInteraction: false,      
      },

      //Кнопки навигации
      navigation:  {
        nextEl:".offer__btn_next",
        prevEl:".offer__btn_prev",
        disabledClass: 'offer__btn-disabled'
      }
    });
  };

  

  //divan__btn_moreJs-Смотреть больше товаров//
  windowWidth = document.documentElement.clientWidth;   
  const moreBtn = document.querySelector(".divan__btn_moreJs"), ratingList = document.querySelector(".divan__list_js");
  const divanBtn = document.querySelector(".divan__btn")// Для обёртки if
  if (divanBtn) { // Обёртка if. Спасение Gulp-а от null в браузере
    let immediatelyShownCount;
    immediatelyShownCount = windowWidth >= 1350 ? 8 : 8;
    for (let e = 0; e < ratingList.childElementCount; ++e)
        e >= immediatelyShownCount && (ratingList.children[e].style.display = "none",
        ratingList.children[e].style.opacity = "0",
        ratingList.children[e].style.transform = "translateY(40px) scaleX(.8)");
    moreBtn.addEventListener("click", ()=>{
        let e;
        const t = document.documentElement.clientWidth;
        e = t >= 1350 || t <= 1021 ? 4 : 3;
        const r = ratingList.querySelectorAll(".divan__item_js");
        let s = 100;
        r.forEach(e=>{
            "none" === window.getComputedStyle(e).display && (e.style.display = "inline-flex",
            setTimeout(()=>{
                e.style.opacity = "1",
                e.style.transform = "translateY(0) scaleX(1)"
            }, s),
            s += 100)
        }),
        moreBtn.style.display = "none"
    });   
  };   



  //swiper - Полезное useful
  const swiperOus = document.querySelector(".useful")//Для обёртки if
  if (swiperOus) {//Обёртка if. Спасение Gulp-а от null в браузере
    const usefulSwiper = new Swiper('.useful__swiper-container', {
      // Дополнительные параметры
      direction: 'horizontal',
      loop: false,

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

      //slidesPerView: 'auto',
      slidesPerGroup: 1,//Одна картинка - один шаг
      spaceBetween: 12,


      //Кнопки навигации
      navigation: {
        nextEl: '.useful__btn_next',
        prevEl: '.useful__btn_prev',
        disabledClass: 'useful__btn-disabled',
      },

      breakpoints: {
        580: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 12,
        },


        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 32,
        },

        999: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 32,
        },

        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 32,
        },
    
        1225: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 31,
        },
      },


      //Бесконечное листание страниц
      speed: 3000,//Интервал ожидания

      autoplay: {
        delay: 5000,//Интервал ожидания
        disableOnInteraction: false,      
      }

    });
  };//Обёртка if 



  // Слоник модал - main-form
  const btnCloseBuy = document.querySelector('.main-form__modal-close_js');
  const modalBuy = document.querySelector('.main-form__slonik_js');
  if (modalBuy) {
    btnCloseBuy.addEventListener('click', function () {
      document.querySelector('.main-form__slonik_js').classList.toggle('main-form__slonik_js_active');
    });
    modalBuy.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy.classList.remove('main-form__slonik_js_active');
      document.querySelector('.main-form__slonik-sps_js').classList.remove('main-form__slonik-sps_js_active');
    });
  }
  

  // Активность кнопки - галка и Отправить(.main-form__btn_filled:disabled)
  const formDis = document.querySelector(".form-disabled");
  if (formDis) {
    const e = formDis.querySelector(".checkbox-disabled");
    if (e) {
      const t = formDis.querySelector(".main-form__btn_jsDis");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  }


  // inputmask - Телефон main-form
  const form = document.querySelector('.main-form__form_js');
  if (form) {// Обёртка if. Спасение Gulp-а от null в браузере 
    const telSelector = form.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    new window.JustValidate('.main-form__form_js', {
      rules: {
        name: {
			  required: true,
			  minLength: 2,
			  maxLenght: 10,
			  strength: {
          custom: '^[А-яёЁ\s-]'//только по русски текст
          //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
          //custom: '^[a-yeO\s]+$'только по английски текст
			  }
        },  
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        checkbox: { // Обязательная галка
        required: true
        }
      },
      colorWrong: '#ff6972',
      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },
        email: {
          email: 'Недопустимый формат',
          required: 'Введите email'
        },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 10 символов без +7'
        },
        checkbox: {
          required: 'Поставьте галочку',
          function: 'Здесь должна быть галка'
        }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        }


        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.main-form__slonik_js').classList.toggle('main-form__slonik_js_active');
        document.querySelector('.main-form__slonik-sps_js').classList.toggle('main-form__slonik-sps_js_active');
      }
    })
  }


  

  //*Плавный скролл по якорям. В любое место можно кинуть.*//
  $(function(){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $
    (target).offset().top},800);
      return false;
    })
  });

});