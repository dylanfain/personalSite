function sliderEffect(sliderSelector) {
    const slider = document.querySelector(sliderSelector);
    if (!slider) return; // Safety check in case sliderSelector doesn't exist
    
    const slides = slider.querySelector('.slides');
    const slide = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('#prev');
    const nextBtn = slider.querySelector('#next');
    
    let currentIndex = 0;
    if(!prevBtn || !nextBtn){
        console.log("no work")
    }
    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    if (prevBtn && nextBtn){
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slide.length;
      updateSlider();
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slide.length) % slide.length;
      updateSlider();
    });
    } else {
        console.error('Prev or Next button not found in DOM.');
    }
    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slide.length;
      updateSlider();
    }, 5000); // Adjust the interval as needed
  }
  
  // Ensure DOM is loaded before running slider effect
  document.addEventListener('DOMContentLoaded', () => {
    sliderEffect('.internship-section'); // Make sure to pass in the correct selector
  });
  