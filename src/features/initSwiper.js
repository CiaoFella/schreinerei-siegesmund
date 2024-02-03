let $ = window.$

import Swiper from 'swiper/bundle'

function initListSwiper() {
  let horizontalSwiper
  horizontalSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    freeMode: true,
    centeredSlides: true,
    mousewheel: {
      releaseOnEdges: true,
      sensitivity: 2,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
    },
    speed: 750,
  })

  return horizontalSwiper
}

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

function initTeaserSwiper() {
  let horizontalSwiper
  horizontalSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    freeMode: true,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1.5,
      },
    },
    speed: 750,
  })

  return horizontalSwiper
}

export default { initListSwiper, initTeaserSwiper }
