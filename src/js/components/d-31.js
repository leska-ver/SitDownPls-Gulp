document.addEventListener('DOMContentLoaded', function() {
  // console.log(); находит в js-ce ошибку. Deftools


  //Слайдер в слайдере d-31
  const swiperOb = document.querySelector(".d-31")// Для обёртки if
  if (swiperOb) { // Обёртка if. Спасение Gulp-а от null в браузере

    const swiper = new Swiper(".d-31__top-swiper_mySwiper", {
      breakpoints:{
        0: {
          spaceBetween: 25,
          slidesPerView: 2,
          direction: "horizontal",
        },
        580: {
          spaceBetween: 25,
          slidesPerView: 4,
          direction: "vertical",
        },
        999: {
          spaceBetween: 25,
          slidesPerView: 4,
          direction: "horizontal",
          freeMode: true,
          watchSlidesProgress: true,
        },
      }
    });
    const swiper2 = new Swiper(".d-31__top-swiper_mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".d-31__top-button_next",
        prevEl: ".d-31__top-button_prev",
        disabledClass: 'd-31__top-button-disabled'
      },
      thumbs: {
        swiper: swiper,
      },
    });
    const swiper3 = new Swiper(".d-31__top-swiper_mySwiper3", {
      breakpoints:{
        0: {
          spaceBetween: 27,
          slidesPerView: 1,
        },
        580: {
          spaceBetween: 27,
          slidesPerView: 2,
        },
        999: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
        1385: {
          spaceBetween: 70,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        },
      },
      navigation: {
        nextEl: ".d-31__top-button_next",
        prevEl: ".d-31__top-button_prev",
        disabledClass: 'd-31__top-button-disabled'
      }
    });
    const swiper4 = new Swiper(".d-31__top-swiper_mySwiper4", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".d-31__top-button_next",
        prevEl: ".d-31__top-button_prev",
        disabledClass: 'd-31__top-button-disabled'
      },
      thumbs: {
        swiper: swiper3,
      },
    });
  };  



  // Слоник модал - d-31
  const btnCloseBuy = document.querySelector('.d-31__top-modal-close_js');
  const modalBuy = document.querySelector('.d-31__top-slonik_js');
  if (modalBuy) {
    btnCloseBuy.addEventListener('click', function () {
      document.querySelector('.d-31__top-slonik_js').classList.toggle('d-31__top-slonik_js_active');
    });
    modalBuy.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy.classList.remove('d-31__top-slonik_js_active');
      document.querySelector('.d-31__top-slonik-sps_js').classList.remove('d-31__top-slonik-sps_js_active');
    });
  }
 

 // Активность кнопки - галка и Отправить(.d-31__form-btn_filled:disabled)
  const form = document.querySelector(".form-disabled");
  if (form) {
    const e = form.querySelector(".checkbox-jsDis");
    if (e) {
      const t = form.querySelector(".d-31__form-btn_jsDis");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  }


  // inputmask - Телефон/d-31
  const formJs = document.querySelector('.d-31__form-form_js');
  if (formJs) { // Обёртка if. Спасение Gulp-а от null в браузере
	  const telSelector = formJs.querySelector('input[type="tel"]');
	  const inputMask = new Inputmask('+7 (999) 999-99-99');
	  inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
      new window.JustValidate('.d-31__form-form_js', {
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
          document.querySelector('.d-31__top-slonik_js').classList.toggle('d-31__top-slonik_js_active');
          document.querySelector('.d-31__top-slonik-sps_js').classList.toggle('d-31__top-slonik-sps_js_active');
        }
      }) 
  }


  

  //Слайдер product d-31
 const swiperOpr = document.querySelector(".product")// Для обёртки if
  if (swiperOpr) { // Обёртка if. Спасение Gulp-а от null в браузере
    const productSwiper = new Swiper('.product__swiper-container', {
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
        nextEl: '.product__btn_next',
        prevEl: '.product__btn_prev',
        disabledClass: 'product__btn-disabled',
      },

      breakpoints: {
        320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 17,
        },

        580: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
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
        slidesPerView: 4,
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
	};  

  
});