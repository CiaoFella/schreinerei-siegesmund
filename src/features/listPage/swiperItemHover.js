let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function swiperItemHover() {
  const $swiperSection = $('.swiper')

  const $swiperItems = $swiperSection.find('.swiper-slide')
  $swiperItems.each((index, hoverItem) => {
    $(hoverItem).hover(
      function () {
        $(hoverItem).addClass('is--hover')
      },
      function () {
        $(hoverItem).removeClass('is--hover')
      }
    )
  })
}
