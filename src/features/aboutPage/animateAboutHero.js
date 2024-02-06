let $ = window.$
import gsap from 'gsap'

export default function animateAboutHero() {
  const aboutHeroTl = gsap.timeline({ defaults: { delay: 0.75 } })
  const $aboutPage = $('[data-barba-namespace=about-page]')
  const $heroDetailInner = $aboutPage.find('.about-hero-wrap .about-hero-line')
  const $heroText = $heroDetailInner.children()
  const $heroImages = $heroDetailInner.find('.about-hero-img-wrap')
  return (
    aboutHeroTl.from($heroText, {
      y: '150%',
      stagger: 0.1,
      duration: 1.5,
      ease: 'expo.out',
    }),
    aboutHeroTl.to(
      $heroImages,
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration: 1.5,
        ease: 'expo.inOut',
      },
      '<-0.25'
    )
  )
}
