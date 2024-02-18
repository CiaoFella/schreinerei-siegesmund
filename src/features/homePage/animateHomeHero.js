let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import lenis from '../shared/utils/initSmoothScroll'
import { clipPathFull } from '../shared/utils/varbiables'

gsap.registerPlugin(ScrollTrigger)

function mainHeroAnimation() {
  const animateHeroTl = gsap.timeline({
    onStart: () => lenis.stop(),
    onComplete: () => {
      setTimeout(() => {
        lenis.start()
      }, 100)
    },
  })
  const $mainHero = $('.section--home-hero')
  const $heroBackgroundImg = $mainHero.find('.hero-background-img')
  const $heroBackgroundPosterImg = $mainHero.find('.hero-background-poster-img')
  const $heroText = $mainHero.find('.hero-h1-wrap').children()
  const $heroButton = $mainHero.find('.button-icon')
  const $heroContent = [$heroText, $heroButton]
  animateHeroTl.to($heroBackgroundImg, {
    clipPath: clipPathFull,
    duration: 1,
    ease: 'power3.inOut',
  })
  animateHeroTl.to(
    $heroBackgroundPosterImg,
    {
      clipPath: clipPathFull,
      duration: 1.25,
      ease: 'power4.out',
    },
    '<+55%'
  )
  animateHeroTl.to(
    $heroContent,
    {
      y: '0rem',
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
    },
    '>-25%'
  )
  animateHeroTl.to($('.hero-inner'), { visibility: 'visible', duration: 0 }, 0)
}

function animateHero() {
  const heroTextTl = gsap.timeline()
  const heroTl = gsap.timeline()
  const $heroSection = $('.section--home-hero')
  const $heroImageWrap = $heroSection.find('.hero-background-img')
  const $heroBackgroundPosterImg = $heroSection.find(
    '.hero-background-poster-img'
  )
  const $heroText = $heroSection.find('.hero-h1-wrap').children()
  const $heroButton = $heroSection.find('.button-icon')
  const $heroContent = [$heroText, $heroButton]

  ScrollTrigger.create({
    animation: heroTextTl,
    trigger: $heroText,
    start: '-100% top',
    end: 'bottom top',
    toggleActions: 'play none reverse none',
  })
  ScrollTrigger.create({
    animation: heroTl,
    trigger: $heroSection,
    start: 'top top',
    end: '50% top',
    scrub: 2,
  })

  heroTextTl.to($heroContent, {
    y: '10rem',
    stagger: -0.1,
    duration: 1,
    ease: 'power1.inOut',
  })

  heroTl.to($heroImageWrap, {
    width: '100%',
    height: '100%',
  })
  heroTl.to(
    $heroBackgroundPosterImg,
    { width: '45rem', height: '30rem', y: '-7.5rem' },
    '<'
  )

  return [heroTextTl, heroTl]
}

export default { animateHero, mainHeroAnimation }
