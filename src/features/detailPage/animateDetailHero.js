let $ = window.$
import gsap from 'gsap'

export default function animateDetailHero() {
  const detailHeroTl = gsap.timeline({ defaults: { delay: 0.5 } })
  const $detailPage = $('[data-barba-namespace=detail-page]')
  const $heroDetailInner = $detailPage.find('.hero-detail-inner')
  const $heroText = $heroDetailInner.children()

  return detailHeroTl.to($heroText, {
    y: '0rem',
    stagger: 0.2,
    duration: 2,
    ease: 'expo.out',
  })
}
