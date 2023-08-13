document.addEventListener('DOMContentLoaded', function() {


  
  /*Мебель - Ещё(Смотреть больше товаров) button - catalog__btn_js1*/
  const catalogList = document.getElementById('catalog__form_js1');
  // const catalogBtn = document.querySelector('.catalog__btn_js1 > .catalog__span-js1');
  const catalogBtn = document.getElementById ('more2');
  if (catalogBtn) {// Обёртка if. Спасение Gulp-а от null в браузере 
    catalogBtn.innerHTML = "+ ещё 12";// <- Нужен при нескольких списков//
    const catalogMoreButton = document.getElementById('more2');
    catalogMoreButton.addEventListener('click', function () {
      catalogList.classList.toggle('full');
      (catalogBtn.innerHTML === '+ ещё 12') ? catalogBtn.innerHTML = 'Свернуть' : catalogBtn.innerHTML = '+ ещё 12';
    });
  };

  //Цвет - Ещё(Смотреть больше товаров) button - catalog__btn_js2*/
  const colorList = document.getElementById('catalog__form_js2');
  // const colorBtn = document.querySelector('.catalog__btn_js2 > .catalog__span-js2');
  const colorBtn = document.getElementById ('more3');
  if (colorBtn) {// Обёртка if. Спасение Gulp-а от null в браузере 
    colorBtn.innerHTML = "+ ещё 7";// <- Нужен при нескольких списков//
    const colorMoreButton = document.getElementById('more3');
    colorMoreButton.addEventListener('click', function () {
      colorList.classList.toggle('full');
      (colorBtn.innerHTML === '+ ещё 7') ? colorBtn.innerHTML = 'Свернуть' : colorBtn.innerHTML = '+ ещё 7';
    });
  };  

  /*Клон каталога*/
  /*Мебель - Ещё(Смотреть больше товаров) button - catalog__btn_js1*/
  const catalogAdList = document.getElementById('catalog__form_js1ad');
  // const catalogBtn = document.querySelector('.catalog__btn_js1 > .catalog__span-js1');
  const catalogAdBtn = document.getElementById ('more2ad');
  if (catalogAdBtn) {// Обёртка if. Спасение Gulp-а от null в браузере  
    catalogAdBtn.innerHTML = "+ ещё 12";// <- Нужен при нескольких списков//
    const catalogMoreAdButton = document.getElementById('more2ad');
    catalogMoreAdButton.addEventListener('click', function () {
      catalogAdList.classList.toggle('full');
      (catalogAdBtn.innerHTML === '+ ещё 12') ? catalogAdBtn.innerHTML = 'Свернуть' : catalogAdBtn.innerHTML = '+ ещё 12';
    });
  };  

  //Цвет - Ещё(Смотреть больше товаров) button - catalog__btn_js2*/
    const colorListAd = document.getElementById('catalog__form_js2ad');
    // const colorBtn = document.querySelector('.catalog__btn_js2 > .catalog__span-js2');
    const colorBtnAd = document.getElementById ('more3ad');
    if (colorBtnAd) {// Обёртка if. Спасение Gulp-а от null в браузере 
      colorBtnAd.innerHTML = "+ ещё 7";// <- Нужен при нескольких списков//
      const colorMoreButtonAd = document.getElementById('more3ad');
      colorMoreButtonAd.addEventListener('click', function () {
        colorListAd.classList.toggle('full');
        (colorBtnAd.innerHTML === '+ ещё 7') ? colorBtnAd.innerHTML = 'Свернуть' : colorBtnAd.innerHTML = '+ ещё 7';
      });
    };  


  /* 3.Фильтр */  
  const filters = document.querySelectorAll('[data-filter]'),
  cards = document.querySelectorAll('[data-filter-card]');
  let filterData = [];

  function setFilterData(filterDataArr, value) {
    if(filterDataArr.length === 0){
        filterDataArr.push(value);
    }
    else {
        if(filterDataArr.indexOf(value) !== -1 ) {
            filterDataArr = filterDataArr.filter(i => i!== value)
        }
        else {
            filterDataArr.push(value);
        }
    }
    return filterDataArr;
  }

  function isMatch(data, compareData) {
    let matchCounter = 0;
    data.forEach(item => {
      if(compareData.indexOf(item) !== -1) {
        matchCounter += 1;
      }
    })
    return matchCounter;
  }

  filters.forEach((filterElement, filterIndex) => {
    filterElement.addEventListener('click', e => {
      const filter = filterElement.getAttribute('data-filter');
      filterData = setFilterData(filterData, filter);
      filterElement.classList.toggle('state-active');
      cards.forEach((card) => {
        let cardFilter = card.getAttribute('data-filter-card').replace(/\s/g, '').split(',');
        if(isMatch(filterData, cardFilter) < 1) {
          card.classList.add('state-hidden');
        }

        else {
          card.classList.remove('state-hidden');
        }
      })
    })
  });



  //Слайдер Каталог
  const gallerySlider = document.querySelector(".catalog")//Для обёртки if
  if (gallerySlider) {//Обёртка if. Спасение Gulp-а от null в браузере
    let gallerySlider = new Swiper(".catalog__slides-container", {
      // slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
      slidesPerView: 2,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {rows: 2, fill: "row"},//(от Swiper-а 7-ая версия)
      spaceBetween: 20,


      //Бесконечное листание страниц
      speed: 3000,//Интервал ожидания
      effect: 'slide',//Слайдер постепенно исчезает.
      
      autoplay: {
        delay: 5000,//Интервал ожидания
        disableOnInteraction: false,
      }, 

      pagination: {
        el: ".catalog__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },

      //Стили для галереи
      breakpoints: {
        0: {
          slidesPerView: 2,
          // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
          slidesPerGroup: 2,//Одна страница с двумя карточками
          grid: {rows: 3},//(от Swiper-а 7-ая версия)
          spaceBetween: 18
        },

        581: {
          slidesPerView: 2,
          // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
          slidesPerGroup: 2,//Одна страница с двумя карточками
          grid: {rows: 3},//(от Swiper-а 7-ая версия)
          spaceBetween: 20
        },

        768: {
          slidesPerView: 2,
          // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
          slidesPerGroup: 2,//Одна страница с двумя карточками
          grid: {rows: 3}, //(от Swiper-а 7-ая версия)
          spaceBetween: 32 
        },

        999: {
          slidesPerView: 3,
          // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
          slidesPerGroup: 3,//Одна страница с тремя карточками
          grid: {rows: 3}, //(от Swiper-а 7-ая версия)
          spaceBetween: 32 
        },

        1024: {
          slidesPerView: 3,
          // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
          slidesPerGroup: 3,//Одна страница с тремя карточками
          grid: {rows: 3}, //(от Swiper-а 7-ая версия)
          spaceBetween: 31 
        },

        1200: {
          slidesPerView: 3,
          // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
          slidesPerGroup: 3,//Одна страница с тремя карточками
          grid: {rows: 3},//(от Swiper-а 7-ая версия)
          spaceBetween: 32
        }
      }
    }); 
  };  
  


  // Ценик-Range/полоска со стрелками 
  const rangeSlider = document.getElementById("range-slider")
  if (rangeSlider) {// Обёртка if. Спасение Gulp-а от null в браузере 
    noUiSlider.create(rangeSlider, {
      start: [2000, 150000],
      connect: true,
      animationDuration: 100,
      step: 1,
      handleAttributes: [
        { 'aria-label': 'уменьшить цену' },
        { 'aria-label': 'повысить цену' },
      ],
      behaviour: 'tap',
      decimals: 0,
      range: {
          'min': 0,
          'max': 225000,
      }
    });
    const firstPrice = document.getElementById("first-price");
    const secondPrice = document.getElementById("second-price");
    const inputPrice = [firstPrice, secondPrice];

    rangeSlider.noUiSlider.on("update", function(values,handle) {
      inputPrice[handle].value = Math.round(values[handle])

      document.getElementById("prc").innerHTML = "До " + document.getElementById("second-price").value

      document.getElementById("price-wrap").classList.add("price-active")
    })

    const setRangeSlider = (i,value) => {
      let arr = [null, null]
      arr[i] = value;

      rangeSlider.noUiSlider.set(arr)
    }

    inputPrice.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
    // Range
    // Number input
    const priceDiv = document.querySelector(".catalog__prc")

    document.querySelectorAll(".second-price").forEach(function(sp) {
      sp.addEventListener("input", function() {
        let data = sp.value;

        priceDiv.innerHTML = "До " + data;
      })
    })

    const inp = document.querySelectorAll('input[type=number]');
    Array.from(inp).forEach(input => {
        const min = +input.min;
        const max = +input.max;
    
        input.addEventListener('input', (e) => {
            const value = input.value;
            if (value > max) { 
              input.value = max }
            else if (value < min) { 
              input.value = min 
            }
        })
    });
  };



  //Фильтр greenshock Catalog btn  
  const catalogDropfilter = document.querySelector(".catalog__dropfilter")// Для обёртки if
  if (catalogDropfilter) {// Обёртка if. Спасение Gulp-а от null в браузере 
    const params = {
      btnClassName: "dropfilter__btn",
      activeClassName: "is-active",
      disabledClassName: "is-disabled"
    }
  
    function onDisable(evt) {
      if (evt.target.classList.contains(params.disabledClassName)) {
        evt.target.classList.remove(params.disabledClassName, params.activeClassName);
        evt.target.removeEventListener("animationend", onDisable);
      }
    }
  
    function setMenuListener() {
      document.body.addEventListener("click", (evt) => {
        const activeElements = document.querySelectorAll(`.${params.activeClassName}`);
    
        if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
          activeElements.forEach((current) => {
            if (current.classList.contains(params.btnClassName)) {
              current.classList.remove(params.activeClassName);
            } else {
              current.classList.add(params.disabledClassName);
            }
          });
        }
    
        if (evt.target.closest(`.${params.btnClassName}`)) {
          const btn = evt.target.closest(`.${params.btnClassName}`);
          const path = btn.dataset.path;
          const drop = document.querySelector(`[data-target="${path}"]`);
    
          btn.classList.toggle(params.activeClassName);
    
          if (!drop.classList.contains(params.activeClassName)) {
            drop.classList.add(params.activeClassName);
            drop.addEventListener("animationend", onDisable);
          } else {
            drop.classList.add(params.disabledClassName);
          }
        }
      });
    }
    
    setMenuListener();
    // Filter
    // Inputs

    const furnitureSofas = document.querySelectorAll(".furniture-sofas-js");
    const sofasTags = document.querySelectorAll(".furnitures-sofas");
    const sofasBtn = document.querySelectorAll(".sofas-btn");

    furnitureSofas.forEach(function(sofas) {
      sofas.addEventListener("change", function() {
        sofasTags.forEach(function(sofasTag) {
          sofasTag.classList.toggle("sofas-active")          
        })
      })
    })

    sofasBtn.forEach(function(sofasBtns) {
      sofasBtns.addEventListener("click", function() {
        sofasTags.forEach(function(sofasDeleteClass) {
          sofasDeleteClass.classList.remove("sofas-active")          
        })
        furnitureSofas.forEach(function(sofasInput) {
          if ( sofasInput.checked ) {
            sofasInput.checked = false
          }
        })
      })
    })

    const furnitureArmchair = document.querySelectorAll(".furniture-armchair-js");
    const archairTags = document.querySelectorAll(".furnitures-armchair");
    const archairBtn = document.querySelectorAll(".armchair-btn");

    furnitureArmchair.forEach(function(archairs) {
      archairs.addEventListener("change", function() {
        archairTags.forEach(function(archairsTag) {
          archairsTag.classList.toggle("armchair-active")
        })
      })
    })

    archairBtn.forEach(function(archairBtns) {
      archairBtns.addEventListener("click", function() {
        archairTags.forEach(function(armchairDeleteClass) {
          armchairDeleteClass.classList.remove("armchair-active")
        })
        furnitureArmchair.forEach(function(archairsInput) {
          if ( archairsInput.checked ) {
            archairsInput.checked = false
          }
        })
      })
    })

    const furniturePoufs = document.querySelectorAll(".furniture-poufs-js");
    const poufsTags = document.querySelectorAll(".furnitures-poufs");
    const poufsBtn = document.querySelectorAll(".poufs-btn");

    furniturePoufs.forEach(function(poufs) {
      poufs.addEventListener("change", function() {
        poufsTags.forEach(function(poufsTag) {
          poufsTag.classList.toggle("poufs-active")
        })
      })
    })

    poufsBtn.forEach(function(poufsBtns) {
      poufsBtns.addEventListener("click", function() {
        poufsTags.forEach(function(poufsDeleteClass) {
          poufsDeleteClass.classList.remove("poufs-active")
        })
        furniturePoufs.forEach(function(poufsInput) {
          if ( poufsInput.checked ) {
            poufsInput.checked = false
          }
        })
      })
    })

    const furnitureBeds = document.querySelectorAll(".furniture-beds-js");
    const bedsTags = document.querySelectorAll(".furnitures-beds");
    const bedsBtn = document.querySelectorAll(".beds-btn");

    furnitureBeds.forEach(function(beds) {
      beds.addEventListener("change", function() {
        bedsTags.forEach(function(bedsTag) {
          bedsTag.classList.toggle("beds-active")
        })
      })
    })

    bedsBtn.forEach(function(bedsBtns) {
      bedsBtns.addEventListener("click", function() {
        bedsTags.forEach(function(bedsDeleteClass) {
          bedsDeleteClass.classList.remove("beds-active")
        })
        furnitureBeds.forEach(function(bedsInput) {
          if ( bedsInput.checked ) {
            bedsInput.checked = false
          }
        })
      })
    })

    const furniturePedestals = document.querySelectorAll(".furniture-pedestals-js");
    const pedestalsTags = document.querySelectorAll(".furnitures-pedestals");
    const pedestalsBtn = document.querySelectorAll(".pedestals-btn");

    furniturePedestals.forEach(function(pedestals) {
      pedestals.addEventListener("change", function() {
        pedestalsTags.forEach(function(pedestalsTag) {
          pedestalsTag.classList.toggle("pedestals-active")
        })
      })
    })

    pedestalsBtn.forEach(function(pedestalsBtns) {
      pedestalsBtns.addEventListener("click", function() {
        pedestalsTags.forEach(function(pedestalsDeleteClass) {
          pedestalsDeleteClass.classList.remove("pedestals-active")
        })
        furniturePedestals.forEach(function(pedestalsInput) {
          if ( pedestalsInput.checked ) {
            pedestalsInput.checked = false
          }
        })
      })
    })

    const furnitureCommode = document.querySelectorAll(".furniture-commode-js");
    const commodeTags = document.querySelectorAll(".furnitures-commode");
    const commodeBtn = document.querySelectorAll(".commode-btn");

    furnitureCommode.forEach(function(commode) {
      commode.addEventListener("change", function() {
        commodeTags.forEach(function(commodeTag) {
          commodeTag.classList.toggle("commode-active")
        })
      })
    })

    commodeBtn.forEach(function(commodeBtns) {
      commodeBtns.addEventListener("click", function() {
        commodeTags.forEach(function(commodeDeleteClass) {
          commodeDeleteClass.classList.remove("commode-active")
        })
        furnitureCommode.forEach(function(commodeInput) {
          if ( commodeInput.checked ) {
            commodeInput.checked = false
          }
        })
      })
    })

    const furnitureChair = document.querySelectorAll(".furniture-chair-js");
    const chairTags = document.querySelectorAll(".furnitures-chair");
    const chairBtn = document.querySelectorAll(".chairs-btn");

    furnitureChair.forEach(function(chair) {
      chair.addEventListener("change", function() {
        chairTags.forEach(function(chairTag) {
          chairTag.classList.toggle("chairs-active")
        })
      })
    })

    chairBtn.forEach(function(chairBtns) {
      chairBtns.addEventListener("click", function() {
        chairTags.forEach(function(chairDeleteClass) {
          chairDeleteClass.classList.remove("chairs-active")
        })
        furnitureChair.forEach(function(chairInput) {
          if ( chairInput.checked ) {
            chairInput.checked = false
          }
        })
      })
    })

    const furnitureDesk = document.querySelectorAll(".furniture-desk-js");
    const deskTags = document.querySelectorAll(".furnitures-desk");
    const deskBtn = document.querySelectorAll(".desk-btn");

    furnitureDesk.forEach(function(desk) {
      desk.addEventListener("change", function() {
        deskTags.forEach(function(deskTag) {
          deskTag.classList.toggle("desk-active")
        })
      })
    })

    deskBtn.forEach(function(deskBtns) {
      deskBtns.addEventListener("click", function() {
        deskTags.forEach(function(deskDeleteClass) {
          deskDeleteClass.classList.remove("desk-active")
        })
        furnitureDesk.forEach(function(deskInput) {
          if ( deskInput.checked ) {
            deskInput.checked = false
          }
        })
      })
    })

    const furnitureAccessories = document.querySelectorAll(".furniture-accessories-js");
    const accessoriesTags = document.querySelectorAll(".furnitures-accessories");
    const accessoriesBtn = document.querySelectorAll(".accessories-btn");

    furnitureAccessories.forEach(function(accessories) {
      accessories.addEventListener("change", function() {
        accessoriesTags.forEach(function(accessoriesTag) {
          accessoriesTag.classList.toggle("accessories-active")
        })
      })
    })

    accessoriesBtn.forEach(function(accessoriesBtns) {
      accessoriesBtns.addEventListener("click", function() {
        accessoriesTags.forEach(function(accessoriesDeleteClass) {
          accessoriesDeleteClass.classList.remove("accessories-active")
        })
        furnitureAccessories.forEach(function(accessoriesInput) {
          if ( accessoriesInput.checked ) {
            accessoriesInput.checked = false
          }
        })
      })
    })

    const furnitureShelfs = document.querySelectorAll(".furniture-shelfs-js");
    const shelfsTags = document.querySelectorAll(".furnitures-shelfs");
    const shelfsBtn = document.querySelectorAll(".shelfs-btn");

    furnitureShelfs.forEach(function(shelfs) {
      shelfs.addEventListener("change", function() {
        shelfsTags.forEach(function(shelfsTag) {
          shelfsTag.classList.toggle("shelfs-active")
        })
      })
    })

    shelfsBtn.forEach(function(shelfsBtns) {
      shelfsBtns.addEventListener("click", function() {
        shelfsTags.forEach(function(shelfsDeleteClass) {
          shelfsDeleteClass.classList.remove("shelfs-active")
        })
        furnitureShelfs.forEach(function(shelfsInput) {
          if ( shelfsInput.checked ) {
            shelfsInput.checked = false
          }
        })
      })
    })

    const furnitureWardrobe = document.querySelectorAll(".furniture-wardrobe-js");
    const wardrobeTags = document.querySelectorAll(".furnitures-wardrobe");
    const wardrobeBtn = document.querySelectorAll(".wardrobe-btn");

    furnitureWardrobe.forEach(function(wardrobe) {
      wardrobe.addEventListener("change", function() {
        wardrobeTags.forEach(function(wardrobeTag) {
          wardrobeTag.classList.toggle("wardrobe-active")
        })
      })
    })

    wardrobeBtn.forEach(function(wardrobeBtns) {
      wardrobeBtns.addEventListener("click", function() {
        wardrobeTags.forEach(function(wardrobeDeleteClass) {
          wardrobeDeleteClass.classList.remove("wardrobe-active")
        })
        furnitureWardrobe.forEach(function(wardrobeInput) {
          if ( wardrobeInput.checked ) {
            wardrobeInput.checked = false
          }
        })
      })
    })

    const furnitureKozetkas = document.querySelectorAll(".furniture-kozetkas-js");
    const kozetkasTags = document.querySelectorAll(".furnitures-kozetkas");
    const kozetkasBtn = document.querySelectorAll(".kozetkas-btn");

    furnitureKozetkas.forEach(function(kozetkas) {
      kozetkas.addEventListener("change", function() {
        kozetkasTags.forEach(function(kozetkasTag) {
          kozetkasTag.classList.toggle("kozetkas-active")
        })
      })
    })

    kozetkasBtn.forEach(function(kozetkasBtns) {
      kozetkasBtns.addEventListener("click", function() {
        kozetkasTags.forEach(function(kozetkasDeleteClass) {
          kozetkasDeleteClass.classList.remove("kozetkas-active")
        })
        furnitureKozetkas.forEach(function(kozetkasInput) {
          if ( kozetkasInput.checked ) {
            kozetkasInput.checked = false
          }
        })
      })
    })

    const furnitureCabrioles = document.querySelectorAll(".furniture-cabrioles-js");
    const cabriolesTags = document.querySelectorAll(".furnitures-cabrioles");
    const cabriolesBtn = document.querySelectorAll(".cabrioles-btn");

    furnitureCabrioles.forEach(function(cabrioles) {
      cabrioles.addEventListener("change", function() {
        cabriolesTags.forEach(function(cabriolesTag) {
          cabriolesTag.classList.toggle("cabrioles-active")
        })
      })
    })

    cabriolesBtn.forEach(function(cabriolesBtns) {
      cabriolesBtns.addEventListener("click", function() {
        cabriolesTags.forEach(function(cabriolesDeleteClass) {
          cabriolesDeleteClass.classList.remove("cabrioles-active")
        })
        furnitureCabrioles.forEach(function(cabriolesInput) {
          if ( cabriolesInput.checked ) {
            cabriolesInput.checked = false
          }
        })
      })
    })

    const furnitureJardinieres = document.querySelectorAll(".furniture-jardinieres-js");
    const jardinieresTags = document.querySelectorAll(".furnitures-jardinieres");
    const jardinieresBtn = document.querySelectorAll(".jardinieres-btn");

    furnitureJardinieres.forEach(function(jardinieres) {
      jardinieres.addEventListener("change", function() {
        jardinieresTags.forEach(function(jardinieresTag) {
          jardinieresTag.classList.toggle("jardinieres-active")
        })
      })
    })

    jardinieresBtn.forEach(function(jardinieresBtns) {
      jardinieresBtns.addEventListener("click", function() {
        jardinieresTags.forEach(function(jardinieresDeleteClass) {
          jardinieresDeleteClass.classList.remove("jardinieres-active")
        })
        furnitureJardinieres.forEach(function(jardinieresInput) {
          if ( jardinieresInput.checked ) {
            jardinieresInput.checked = false
          }
        })
      })
    })

    const furnitureGeridons = document.querySelectorAll(".furniture-geridons-js");
    const geridonsTags = document.querySelectorAll(".furnitures-geridons");
    const geridonsBtn = document.querySelectorAll(".geridons-btn");

    furnitureGeridons.forEach(function(geridons) {
      geridons.addEventListener("change", function() {
        geridonsTags.forEach(function(geridonsTag) {
          geridonsTag.classList.toggle("geridons-active")
        })
      })
    })

    geridonsBtn.forEach(function(geridonsBtns) {
      geridonsBtns.addEventListener("click", function() {
        geridonsTags.forEach(function(geridonsDeleteClass) {
          geridonsDeleteClass.classList.remove("geridons-active")
        })
        furnitureGeridons.forEach(function(geridonsInput) {
          if ( geridonsInput.checked ) {
            geridonsInput.checked = false
          }
        })
      })
    })

    const furnitureShowcases = document.querySelectorAll(".furniture-showcases-js");
    const showcasesTags = document.querySelectorAll(".furnitures-showcases");
    const showcasesBtn = document.querySelectorAll(".showcases-btn");

    furnitureShowcases.forEach(function(showcases) {
      showcases.addEventListener("change", function() {
        showcasesTags.forEach(function(showcasesTag) {
          showcasesTag.classList.toggle("showcases-active")
        })
      })
    })

    showcasesBtn.forEach(function(showcasesBtns) {
      showcasesBtns.addEventListener("click", function() {
        showcasesTags.forEach(function(showcasesDeleteClass) {
          showcasesDeleteClass.classList.remove("showcases-active")
        })
        furnitureShowcases.forEach(function(showcasesInput) {
          if ( showcasesInput.checked ) {
            showcasesInput.checked = false
          }
        })
      })
    })

    const furnitureBanquettes = document.querySelectorAll(".furniture-banquettes-js");
    const banquettesTags = document.querySelectorAll(".furnitures-banquettes");
    const banquettesBtn = document.querySelectorAll(".banquettes-btn");

    furnitureBanquettes.forEach(function(banquettes) {
      banquettes.addEventListener("change", function() {
        banquettesTags.forEach(function(banquettesTag) {
          banquettesTag.classList.toggle("banquettes-active")
        })
      })
    })

    banquettesBtn.forEach(function(banquettesBtns) {
      banquettesBtns.addEventListener("click", function() {
        banquettesTags.forEach(function(banquettesDeleteClass) {
          banquettesDeleteClass.classList.remove("banquettes-active")
        })
        furnitureBanquettes.forEach(function(banquettesInput) {
          if ( banquettesInput.checked ) {
            banquettesInput.checked = false
          }
        })
      })
    })

    const furnitureEntresols = document.querySelectorAll(".furniture-entresols-js");
    const entresolsTags = document.querySelectorAll(".furnitures-entresols");
    const entresolsBtn = document.querySelectorAll(".entresols-btn");

    furnitureEntresols.forEach(function(entresols) {
      entresols.addEventListener("change", function() {
        entresolsTags.forEach(function(entresolsTag) {
          entresolsTag.classList.toggle("entresols-active")
        })
      })
    })

    entresolsBtn.forEach(function(entresolsBtns) {
      entresolsBtns.addEventListener("click", function() {
        entresolsTags.forEach(function(entresolsDeleteClass) {
          entresolsDeleteClass.classList.remove("entresols-active")
        })
        furnitureEntresols.forEach(function(entresolsInput) {
          if ( entresolsInput.checked ) {
            entresolsInput.checked = false
          }
        })
      })
    })

    const furnitureСoupe = document.querySelectorAll(".furniture-coupe-js");
    const coupeTags = document.querySelectorAll(".furnitures-coupe");
    const coupeBtn = document.querySelectorAll(".coupe-btn");

    furnitureСoupe.forEach(function(coupe) {
      coupe.addEventListener("change", function() {
        coupeTags.forEach(function(coupeTag) {
          coupeTag.classList.toggle("coupe-active")
        })
      })
    })

    coupeBtn.forEach(function(coupeBtns) {
      coupeBtns.addEventListener("click", function() {
        coupeTags.forEach(function(coupeDeleteClass) {
          coupeDeleteClass.classList.remove("coupe-active")
        })
        furnitureСoupe.forEach(function(coupeInput) {
          if ( coupeInput.checked ) {
            coupeInput.checked = false
          }
        })
      })
    })

    const furnitureСouches = document.querySelectorAll(".furniture-couches-js");
    const couchesTags = document.querySelectorAll(".furnitures-couches");
    const couchesBtn = document.querySelectorAll(".couches-btn");

    furnitureСouches.forEach(function(couches) {
      couches.addEventListener("change", function() {
        couchesTags.forEach(function(couchesTag) {
          couchesTag.classList.toggle("couches-active")
        })
      })
    })

    couchesBtn.forEach(function(couchesBtns) {
      couchesBtns.addEventListener("click", function() {
        couchesTags.forEach(function(couchesDeleteClass) {
          couchesDeleteClass.classList.remove("couches-active")
        })
        furnitureСouches.forEach(function(couchesInput) {
          if ( couchesInput.checked ) {
            couchesInput.checked = false
          }
        })
      })
    })

    const furnitureMirrors = document.querySelectorAll(".furniture-mirrors-js");
    const mirrorsTags = document.querySelectorAll(".furnitures-mirrors");
    const mirrorsBtn = document.querySelectorAll(".mirrors-btn");

    furnitureMirrors.forEach(function(mirrors) {
      mirrors.addEventListener("change", function() {
        mirrorsTags.forEach(function(mirrorsTag) {
          mirrorsTag.classList.toggle("mirrors-active")
        })
      })
    })

    mirrorsBtn.forEach(function(mirrorsBtns) {
      mirrorsBtns.addEventListener("click", function() {
        mirrorsTags.forEach(function(mirrorsDeleteClass) {
          mirrorsDeleteClass.classList.remove("mirrors-active")
        })
        furnitureMirrors.forEach(function(mirrorsInput) {
          if ( mirrorsInput.checked ) {
            mirrorsInput.checked = false
          }
        })
      })
    })

    const inputPrc = document.getElementById("second-price");
    const priceTags = document.querySelectorAll(".tag-price");
    const priceBtn = document.querySelectorAll(".prc-btn");

    inputPrc.addEventListener("change", function() {
        priceTags.forEach(function(priceTag) {
          priceTag.classList.add("price-active")
        })
    })

    priceBtn.forEach(function(priceBtns) {
      priceBtns.addEventListener("click", function() {
        priceTags.forEach(function(priceDeleteClass) {
          priceDeleteClass.classList.remove("price-active")
          inputPrc.value = ""
        })
      })
    })

    const morediscount = document.querySelectorAll(".catalog__more");
    const morediscountTags = document.querySelectorAll(".discount-more");
    const morediscountBtn = document.querySelectorAll(".more-btn");

    morediscount.forEach(function(morediscount) {
      morediscount.addEventListener("change", function() {
        morediscountTags.forEach(function(morediscountTag) {
          morediscountTag.classList.toggle("morediscount-active")
        })
      })
    })

    morediscountBtn.forEach(function(morediscountBtns) {
      morediscountBtns.addEventListener("click", function() {
        morediscountTags.forEach(function(morediscountDeleteClass) {
          morediscountDeleteClass.classList.remove("morediscount-active")
        })
        morediscount.forEach(function(morediscountInput) {
          if ( morediscountInput.checked ) {
            morediscountInput.checked = false
          }
        })
      })
    })

    const lessdiscount = document.querySelectorAll(".catalog__less");
    const lessdiscountTags = document.querySelectorAll(".lessdiscount");
    const lessdiscountBtn = document.querySelectorAll(".lessdiscount-btn");

    lessdiscount.forEach(function(lessdiscount) {
      lessdiscount.addEventListener("change", function() {
        lessdiscountTags.forEach(function(lessdiscountTag) {
          lessdiscountTag.classList.toggle("lessdiscount-active")
        })
      })
    })

    lessdiscountBtn.forEach(function(lessdiscountBtns) {
      lessdiscountBtns.addEventListener("click", function() {
        lessdiscountTags.forEach(function(lessdiscountDeleteClass) {
          lessdiscountDeleteClass.classList.remove("lessdiscount-active")
        })
        lessdiscount.forEach(function(lessdiscountInput) {
          if ( lessdiscountInput.checked ) {
            lessdiscountInput.checked = false
          }
        })
      })
    })

    const nodiscount = document.querySelectorAll(".catalog__nodiscount");
    const nodiscountTags = document.querySelectorAll(".nodiscount");
    const nodiscountBtn = document.querySelectorAll(".nodiscount-btn");

    nodiscount.forEach(function(nodiscount) {
      nodiscount.addEventListener("change", function() {
        nodiscountTags.forEach(function(nodiscountTag) {
          nodiscountTag.classList.toggle("nodiscount-active")
        })
      })
    })

    nodiscountBtn.forEach(function(nodiscountBtns) {
      nodiscountBtns.addEventListener("click", function() {
        nodiscountTags.forEach(function(nodiscountDeleteClass) {
          nodiscountDeleteClass.classList.remove("nodiscount-active")
        })
        nodiscount.forEach(function(nodiscountInput) {
          if ( nodiscountInput.checked ) {
            nodiscountInput.checked = false
          }
        })
      })
    }) 


    //Радио catalog__tags

    
    const colorBrown = document.querySelectorAll(".color-brown-js");
    const brownTags = document.querySelectorAll(".color-brown");
    const brownBtn = document.querySelectorAll(".brown-btn");

    colorBrown.forEach(function(brown) {
      brown.addEventListener("change", function() {
        brownTags.forEach(function(brownTag) {
          brownTag.classList.toggle("brown-active")
        })
      })
    })

    brownBtn.forEach(function(brownBtns) {
      brownBtns.addEventListener("click", function() {
        brownTags.forEach(function(brownDeleteClass) {
          brownDeleteClass.classList.remove("brown-active")
        })
        colorBrown.forEach(function(brownInput) {
          if ( brownInput.checked ) {
            brownInput.checked = false
          }
        })
      })
    })

    const colorBlack = document.querySelectorAll(".color-black-js");
    const blackTags = document.querySelectorAll(".color-black");
    const blackBtn = document.querySelectorAll(".black-btn");

    colorBlack.forEach(function(black) {
      black.addEventListener("change", function() {
        blackTags.forEach(function(blackTag) {
          blackTag.classList.toggle("black-active")
        })
      })
    })

    blackBtn.forEach(function(blackBtns) {
      blackBtns.addEventListener("click", function() {
        blackTags.forEach(function(blackDeleteClass) {
          blackDeleteClass.classList.remove("black-active")
        })
        colorBlack.forEach(function(blackInput) {
          if ( blackInput.checked ) {
            blackInput.checked = false
          }
        })
      })
    })

    const colorBeige = document.querySelectorAll(".color-beige-js");
    const beigeTags = document.querySelectorAll(".color-beige");
    const beigeBtn = document.querySelectorAll(".beige-btn");

    colorBeige.forEach(function(beige) {
      beige.addEventListener("change", function() {
        beigeTags.forEach(function(beigeTag) {
          beigeTag.classList.toggle("beige-active")
        })
      })
    })

    beigeBtn.forEach(function(beigeBtns) {
      beigeBtns.addEventListener("click", function() {
        beigeTags.forEach(function(beigeDeleteClass) {
          beigeDeleteClass.classList.remove("beige-active")
        })
        colorBeige.forEach(function(beigeInput) {
          if ( beigeInput.checked ) {
            beigeInput.checked = false
          }
        })
      })
    })

    const colorGray = document.querySelectorAll(".color-gray-js");
    const grayTags = document.querySelectorAll(".color-gray");
    const grayBtn = document.querySelectorAll(".gray-btn");

    colorGray.forEach(function(gray) {
      gray.addEventListener("change", function() {
        grayTags.forEach(function(grayTag) {
          grayTag.classList.toggle("gray-active")
        })
      })
    })

    grayBtn.forEach(function(grayBtns) {
      grayBtns.addEventListener("click", function() {
        grayTags.forEach(function(grayDeleteClass) {
          grayDeleteClass.classList.remove("gray-active")
        })
        colorGray.forEach(function(grayInput) {
          if ( grayInput.checked ) {
            grayInput.checked = false
          }
        })
      })
    })


    const colorWhite = document.querySelectorAll(".color-white-js");
    const whiteTags = document.querySelectorAll(".color-white");
    const whiteBtn = document.querySelectorAll(".white-btn");

    colorWhite.forEach(function(white) {
      white.addEventListener("change", function() {
        whiteTags.forEach(function(whiteTag) {
          whiteTag.classList.toggle("white-active")
        })
      })
    })

    whiteBtn.forEach(function(whiteBtns) {
      whiteBtns.addEventListener("click", function() {
        whiteTags.forEach(function(whiteDeleteClass) {
          whiteDeleteClass.classList.remove("white-active")
        })
        colorWhite.forEach(function(whiteInput) {
          if ( whiteInput.checked ) {
            whiteInput.checked = false
          }
        })
      })
    })

  const colorBlue = document.querySelectorAll(".color-blue-js");
    const blueTags = document.querySelectorAll(".color-blue");
    const blueBtn = document.querySelectorAll(".blue-btn");

    colorBlue.forEach(function(blue) {
      blue.addEventListener("change", function() {
        blueTags.forEach(function(blueTag) {
          blueTag.classList.toggle("blue-active")
        })
      })
    })

    blueBtn.forEach(function(blueBtns) {
      blueBtns.addEventListener("click", function() {
        blueTags.forEach(function(blueDeleteClass) {
          blueDeleteClass.classList.remove("blue-active")
        })
        colorBlue.forEach(function(blueInput) {
          if ( blueInput.checked ) {
            blueInput.checked = false
          }
        })
      })
    })


    const colorOrange = document.querySelectorAll(".color-orange-js");
    const orangeTags = document.querySelectorAll(".color-orange");
    const orangeBtn = document.querySelectorAll(".orange-btn");

    colorOrange.forEach(function(orange) {
      orange.addEventListener("change", function() {
        orangeTags.forEach(function(orangeTag) {
          orangeTag.classList.toggle("orange-active")
        })
      })
    })

    orangeBtn.forEach(function(orangeBtns) {
      orangeBtns.addEventListener("click", function() {
        orangeTags.forEach(function(orangeDeleteClass) {
          orangeDeleteClass.classList.remove("orange-active")
        })
        colorOrange.forEach(function(orangeInput) {
          if ( orangeInput.checked ) {
            orangeInput.checked = false
          }
        })
      })
    })

    const colorYellow = document.querySelectorAll(".color-yellow-js");
    const yellowTags = document.querySelectorAll(".color-yellow");
    const yellowBtn = document.querySelectorAll(".yellow-btn");

    colorYellow.forEach(function(yellow) {
      yellow.addEventListener("change", function() {
        yellowTags.forEach(function(yellowTag) {
          yellowTag.classList.toggle("yellow-active")
        })
      })
    })

    yellowBtn.forEach(function(yellowBtns) {
      yellowBtns.addEventListener("click", function() {
        yellowTags.forEach(function(yellowDeleteClass) {
          yellowDeleteClass.classList.remove("yellow-active")
        })
        colorYellow.forEach(function(yellowInput) {
          if ( yellowInput.checked ) {
            yellowInput.checked = false
          }
        })
      })
    })

    const colorGreen = document.querySelectorAll(".color-green-js");
    const greenTags = document.querySelectorAll(".color-green");
    const greenBtn = document.querySelectorAll(".green-btn");

    colorGreen.forEach(function(green) {
      green.addEventListener("change", function() {
        greenTags.forEach(function(greenTag) {
          greenTag.classList.toggle("green-active")
        })
      })
    })

    greenBtn.forEach(function(greenBtns) {
      greenBtns.addEventListener("click", function() {
        greenTags.forEach(function(greenDeleteClass) {
          greenDeleteClass.classList.remove("green-active")
        })
        colorGreen.forEach(function(greenInput) {
          if ( greenInput.checked ) {
            greenInput.checked = false
          }
        })
      })
    })

    const colorPink = document.querySelectorAll(".color-pink-js");
    const pinkTags = document.querySelectorAll(".color-pink");
    const pinkBtn = document.querySelectorAll(".pink-btn");

    colorPink.forEach(function(pink) {
      pink.addEventListener("change", function() {
        pinkTags.forEach(function(pinkTag) {
          pinkTag.classList.toggle("pink-active")
        })
      })
    })

    pinkBtn.forEach(function(pinkBtns) {
      pinkBtns.addEventListener("click", function() {
        pinkTags.forEach(function(pinkDeleteClass) {
          pinkDeleteClass.classList.remove("pink-active")
        })
        colorPink.forEach(function(pinkInput) {
          if ( pinkInput.checked ) {
            pinkInput.checked = false
          }
        })
      })
    })

    const colorPurple = document.querySelectorAll(".color-purple-js");
    const purpleTags = document.querySelectorAll(".color-purple");
    const purpleBtn = document.querySelectorAll(".purple-btn");

    colorPurple.forEach(function(purple) {
      purple.addEventListener("change", function() {
        purpleTags.forEach(function(purpleTag) {
          purpleTag.classList.toggle("purple-active")
        })
      })
    })

    purpleBtn.forEach(function(purpleBtns) {
      purpleBtns.addEventListener("click", function() {
        purpleTags.forEach(function(purpleDeleteClass) {
          purpleDeleteClass.classList.remove("purple-active")
        })
        colorPurple.forEach(function(purpleInput) {
          if ( purpleInput.checked ) {
            purpleInput.checked = false
          }
        })
      })
    })

  const colorLilac = document.querySelectorAll(".color-lilac-js");
    const lilacTags = document.querySelectorAll(".color-lilac");
    const lilacBtn = document.querySelectorAll(".lilac-btn");

    colorLilac.forEach(function(lilac) {
      lilac.addEventListener("change", function() {
        lilacTags.forEach(function(lilacTag) {
          lilacTag.classList.toggle("lilac-active")
        })
      })
    })

    lilacBtn.forEach(function(lilacBtns) {
      lilacBtns.addEventListener("click", function() {
        lilacTags.forEach(function(lilacDeleteClass) {
          lilacDeleteClass.classList.remove("lilac-active")
        })
        colorLilac.forEach(function(lilacInput) {
          if ( lilacInput.checked ) {
            lilacInput.checked = false
          }
        })
      })
    })

  const colorAzure = document.querySelectorAll(".color-azure-js");
    const azureTags = document.querySelectorAll(".color-azure");
    const azureBtn = document.querySelectorAll(".azure-btn");

    colorAzure.forEach(function(azure) {
      azure.addEventListener("change", function() {
        azureTags.forEach(function(azureTag) {
          azureTag.classList.toggle("azure-active")
        })
      })
    })

    azureBtn.forEach(function(azureBtns) {
      azureBtns.addEventListener("click", function() {
        azureTags.forEach(function(azureDeleteClass) {
          azureDeleteClass.classList.remove("azure-active")
        })
        colorAzure.forEach(function(azureInput) {
          if ( azureInput.checked ) {
            azureInput.checked = false
          }
        })
      })
    })

    const colorGarnet = document.querySelectorAll(".color-garnet-js");
    const garnetTags = document.querySelectorAll(".color-garnet");
    const garnetBtn = document.querySelectorAll(".garnet-btn");

    colorGarnet.forEach(function(garnet) {
      garnet.addEventListener("change", function() {
        garnetTags.forEach(function(garnetTag) {
          garnetTag.classList.toggle("garnet-active")
        })
      })
    })

    garnetBtn.forEach(function(garnetBtns) {
      garnetBtns.addEventListener("click", function() {
        garnetTags.forEach(function(garnetDeleteClass) {
          garnetDeleteClass.classList.remove("garnet-active")
        })
        colorGarnet.forEach(function(garnetInput) {
          if ( garnetInput.checked ) {
            garnetInput.checked = false
          }
        })
      })
    })

    const colorRed = document.querySelectorAll(".color-red-js");
    const redTags = document.querySelectorAll(".color-red");
    const redBtn = document.querySelectorAll(".red-btn");

    colorRed.forEach(function(red) {
      red.addEventListener("change", function() {
        redTags.forEach(function(redTag) {
          redTag.classList.toggle("red-active")
        })
      })
    })

    redBtn.forEach(function(redBtns) {
      redBtns.addEventListener("click", function() {
        redTags.forEach(function(redDeleteClass) {
          redDeleteClass.classList.remove("red-active")
        })
        colorRed.forEach(function(redInput) {
          if ( redInput.checked ) {
            redInput.checked = false
          }
        })
      })
    })

    const colorСream = document.querySelectorAll(".color-cream-js");
    const creamTags = document.querySelectorAll(".color-cream");
    const creamBtn = document.querySelectorAll(".cream-btn");

    colorСream.forEach(function(cream) {
      cream.addEventListener("change", function() {
        creamTags.forEach(function(creamTag) {
          creamTag.classList.toggle("cream-active")
        })
      })
    })

    creamBtn.forEach(function(creamBtns) {
      creamBtns.addEventListener("click", function() {
        creamTags.forEach(function(creamDeleteClass) {
          creamDeleteClass.classList.remove("cream-active")
        })
        colorСream.forEach(function(creamInput) {
          if ( creamInput.checked ) {
            creamInput.checked = false
          }
        })
      })
    })
  };//Обёртка if .catalog__dropfilter
   


});