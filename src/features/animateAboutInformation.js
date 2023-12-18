let $ = window.$
import gsap from 'gsap'

export default function animateAboutInformation() {
  const $images = $('.information_img')
  const $textItems = $('.information_text-item')

  $images.eq(0).addClass('is--active')
  $textItems.each(function (index, item) {
    item.addEventListener('click', () => {
      $(item).toggleClass('is--open')
      const matchingImage = $images.eq(index)
      $images.each(function (index, item) {
        $(item).removeClass('is--active')
      })
      matchingImage.addClass('is--active')
      const $inactiveImages = $('.information_img:not(.is--active)')
      const $activeImage = $('.information_img.is--active')
      const activeImgTl = gsap.timeline()

      if ($(item).hasClass('is--open')) {
        activeImgTl.to($inactiveImages, { height: '0%', duration: 0 })
        activeImgTl.fromTo(
          $activeImage,
          { height: 0 },
          {
            height: '100%',
            delay: 0.1,
            duration: 1,
            ease: 'circ.out',
          }
        )
      } else {
        activeImgTl.to($activeImage, {
          height: '100%',
          delay: 0.1,
          duration: 1,
          ease: 'circ.out',
        })
      }
    })
  })
}
