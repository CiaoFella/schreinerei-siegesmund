let $ = window.$

import Swiper from 'swiper/bundle'

function onMouseWheel() {
  clearTimeout($.data(this, 'timer'))

  $('.swiper-wrapper').addClass('mousewheel')

  $.data(
    this,
    'timer',
    setTimeout(function () {
      $('.swiper-wrapper').removeClass('mousewheel')
    }, 250)
  )
}
window.addEventListener('wheel', onMouseWheel, false)

function initListSwiper() {
  let horizontalSwiper
  horizontalSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1.5,
    keyboard: true,
    freeMode: false,
    centeredSlides: false,
    mousewheel: {
      sensitivity: 2,
      releaseOnEdges: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
        freeMode: true,
        centeredSlides: true,
      },
    },
    speed: 750,
  })

  return horizontalSwiper
}

function initTeaserSwiper() {
  let horizontalSwiper
  horizontalSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    freeMode: false,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 5000,
    },
    keyboard: true,
    centeredSlides: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.5,
        centeredSlides: false,
        freeMode: true,
      },
    },
    speed: 750,
  })

  return horizontalSwiper
}

export default { initListSwiper, initTeaserSwiper }
