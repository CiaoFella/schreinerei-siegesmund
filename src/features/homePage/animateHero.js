let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function animateHero() {
  const $heroSection = $('.section--home-hero')
  const heroTextTl = gsap.timeline({})
  const heroTl = gsap.timeline({})
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

export default animateHero
