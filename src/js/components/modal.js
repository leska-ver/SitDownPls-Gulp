document.addEventListener('DOMContentLoaded', function () {
  // console.log(); находит в js-ce ошибку. Deftools


  /*// Модальное окно для нескольких окон//
  const buttons = document.querySelectorAll(".modalBtn-js");

  for (let button of buttons) {
    modalEvent(button);
  }

  function modalEvent(button) {
    button.addEventListener("click", (e) => {//(e) - дефолт - чтобы при нажитие на модального окна, модалка не улетала вверх.
      e.preventDefault();

      const trigger = button.getAttribute("data-modal-trigger");
      const modal = document.querySelector(`[data-modal=${trigger}]`);
      const modalContent = modal.querySelector(".modal-container");
      const close = modal.querySelector(".modal-close");
      const activeClass = "modal-active";

      close.addEventListener("click", () => modal.classList.remove(activeClass));
      modal.addEventListener("click", () => modal.classList.remove(activeClass));
      modalContent.addEventListener("click", (e) => e.stopPropagation());

      modal.classList.toggle(activeClass);
    });
  }*/  


  
  // Модальное окно для нескольких окон. Модалка не прокручиваеться.//
  const activeClass = "modal-active";
  const buttons = document.querySelectorAll(".modalBtn-js");

  for (let button of buttons) {
    modalEvent(button);
  }
  
  function closeModal (modal) {
	 modal.classList.remove(activeClass);
	 document.body.style.overflow  = '';
  }
	  
  function modalEvent(button) {
    button.addEventListener("click", (e) => {//(e) - дефолт - чтобы при нажитие на модального окна, модалка не улетала вверх.
      e.preventDefault();

      const trigger = button.getAttribute("data-modal-trigger");
      const modal = document.querySelector(`[data-modal=${trigger}]`);
      const modalContent = modal.querySelector(".modal-container");
      const close = modal.querySelector(".modal-close");
           
      /* --Cтили body при открытие модального окна-- */
      modal.classList.add('modal-active');		 
      if (modal.classList.contains(activeClass)) {
        document.body.style.overflow  = 'hidden';
      }

      close.addEventListener("click", () =>  {
		 closeModal (modal); 
	  });
      modal.addEventListener("click", () => {
		 closeModal (modal); 
	  });
      modalContent.addEventListener("click", (e) => e.stopPropagation());
      
    });
  }; 


});