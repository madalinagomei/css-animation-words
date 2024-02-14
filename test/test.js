 var swiper = new Swiper("#scaefy-swiper", {
        navigation:{
          nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
        },
       pagination: {
         el: ".swiper-pagination",
         clickable: true, 
         renderBullet: function (index, className) {
           return '<span class="' + className + '">' + (index + 1) + "</span>";
         },
         },
         breakpoints: {
          0: {
            slidesPerView: 1.1,
              spaceBetween: 20,
           },
           767: {
            slidesPerView: 2.5,
             spaceBetween: 24,
           },
           988: {
            slidesPerView: 3,
             spaceBetween: 48,
           },
         },
 });
     