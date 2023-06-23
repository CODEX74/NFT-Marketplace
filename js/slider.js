(function() {
    const nextBtn = document.querySelector('.next');
    const backBtn = document.querySelector('.back');
    const sliderCards = document.querySelectorAll('.slider_card');
    const totalSlides = 12;
    let visibleSlides = 6;
    let currentIndex = 0;
  
    nextBtn.addEventListener('click', function() {
      if (currentIndex < totalSlides - visibleSlides) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    });
  
    backBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - visibleSlides;
      }
      updateSlider();
    });
  
    function updateSlider() {
      sliderCards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + visibleSlides) {
          card.style.display = 'block';
          card.style.animation = 'slide-in 0.5s ease-in-out forwards';
        } else {
          card.style.animation = 'none';
          card.style.display = 'none';
        }
      });
    }
  
    updateSlider();
  })();
  