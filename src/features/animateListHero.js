let $ = window.$
import gsap from 'gsap'

export default function animateListHero() {
  const listHeroTl = gsap.timeline()
  const $listPage = $('[data-barba-namespace=list-page]')
  const $swiperImages = $listPage.find('.swiper .swiper-item-img')
  const $heroListInner = $listPage.find('.hero-list-wrap')
  const $heroListTextWrap = $listPage.find('.list-hero-text-wrap')
  const $heroListText = $heroListTextWrap.children()

  return listHeroTl
    .to($heroListInner, {
      y: 0,
      duration: 2,
      delay: 0.5,
      ease: 'expo.out',
    })
    .to(
      $heroListText,
      {
        y: 0,
        stagger: 0.5,
        duration: 1.5,
        ease: 'expo.out',
      },
      '<'
    )
    .to(
      $swiperImages,
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: 0.1,
        duration: 2,
        ease: 'expo.inOut',
      },
      0
    )
}
