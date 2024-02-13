let $ = window.$
import gsap from 'gsap'
import SplitType from 'split-type'

export default function animateAboutHero() {
  const aboutHeroTl = gsap.timeline({ defaults: { delay: 0.75 } })
  const $aboutPage = $('[data-barba-namespace=about-page]')
  const $heroDetailInner = $aboutPage.find('.about-hero-wrap')
  const $heroDetailInnerLine = $aboutPage.find(
    '.about-hero-wrap .about-hero-line'
  )
  const heroDetailSplit = new SplitType($heroDetailInner, {
    types: 'words',
  })
  const $heroImages = $heroDetailInner.find('.about-hero-img-wrap')
  gsap.set($heroDetailInnerLine, { display: 'flex' })
  return (
    aboutHeroTl.to([heroDetailSplit.words], {
      y: '0rem',
      stagger: 0.1,
      ease: 'expo.out',
      duration: 1.5,
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
