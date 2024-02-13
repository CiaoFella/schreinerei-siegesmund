let $ = window.$
import gsap from 'gsap'

import { clipPathFull, clipPathTop } from '../varbiables'

function mainHeroAnimation() {
  const $mainHero = $('.section--home-hero')
  const $heroBackgroundImg = $mainHero.find('.hero-background-img')
  const $heroBackgroundPosterImg = $mainHero.find('.hero-background-poster-img')
  const $heroText = $mainHero.find('.hero-h1-wrap').children()
  const $heroButton = $mainHero.find('.button-icon')
  const $heroContent = [$heroText, $heroButton]
  const animateHeroTl = gsap.timeline()
  animateHeroTl.to($heroBackgroundImg, {
    clipPath: clipPathFull,
    duration: 1.5,
    ease: 'expo.inOut',
  })
  animateHeroTl.to(
    $heroBackgroundPosterImg,
    {
      clipPath: clipPathFull,
      duration: 1.5,
      stagger: 0.05,
      ease: 'power2.inOut',
    },
    '<+60%'
  )
  animateHeroTl.to(
    $heroContent,
    {
      y: '0rem',
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
    },
    '<+1'
  )
  animateHeroTl.to($('.hero-inner'), { visibility: 'visible', duration: 0 }, 0)
}

function pageLoad() {
  const $pageLoadSection = $('.section--page-load')
  if ($pageLoadSection) {
    const $pageLoadImgWrap = $('.page-load-img-wrap')
    if ($pageLoadSection) {
      const pageLoadTl = gsap.timeline({ onComplete: mainHeroAnimation })
      pageLoadTl.to($pageLoadImgWrap, {
        clipPath: clipPathFull,
        duration: 2,
        stagger: 0.1,
        ease: 'expo.out',
      })
      pageLoadTl.to(
        $pageLoadImgWrap,
        {
          clipPath: clipPathTop,
          duration: 1.5,
          stagger: -0.05,
          ease: 'expo.inOut',
        },
        '>-25%'
      )
      pageLoadTl.fromTo(
        $pageLoadSection,
        {
          clipPath: clipPathFull,
        },
        {
          clipPath: clipPathTop,
          duration: 1.5,
          ease: 'expo.inOut',
        },
        '>-55%'
      )
      pageLoadTl.to($pageLoadSection, { display: 'none', duration: 0 })
    }
  }
}

export default { pageLoad, mainHeroAnimation }
