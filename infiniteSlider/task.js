document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      const slideWidth = slidesContainer.children[0].offsetWidth;
      slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slidesContainer.children.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slidesContainer.children.length) % slidesContainer.children.length;
      showSlide(currentIndex);
    }
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    setInterval(nextSlide, 3000);
  });