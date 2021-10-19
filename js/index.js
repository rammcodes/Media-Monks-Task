let carouselLeftBtn = document.querySelector('.carousel-btn-cont--left')
let carouselRightBtn = document.querySelector('.carousel-btn-cont--right')
let carouselImagesList = document.querySelector('.carousel-images-list')
let currentImage = 1
let totalImages = 5

carouselRightBtn.addEventListener('click', () => {
  if (currentImage < totalImages) {
    carouselImagesList.style.transform = `translateX(-${currentImage * 100}%)`
    currentImage = currentImage + 1
  }
})

carouselLeftBtn.addEventListener('click', () => {
  if (currentImage > 1) {
    carouselImagesList.style.transform = `translateX(${
      -(currentImage - 2) * 100
    }%)`
    currentImage = currentImage - 1
  }
})
