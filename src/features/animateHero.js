let $ = window.$
import gsap from 'gsap'

export default function animateHero() {
  const $heroSection = $('.section--hero:not(.is--text)')
  const $heroImageWrap = $heroSection.find('.hero-background-img')
  const $heroBackgroundPosterImg = $heroSection.find(
    '.hero-background-poster-img'
  )
  const $heroText = $heroSection.find('.hero-h1-wrap').children()
  const $heroButton = $heroSection.find('.button-icon')
  const $heroContent = [$heroText, $heroButton]
  const heroTextTl = gsap.timeline({
    scrollTrigger: {
      trigger: $heroText,
      start: '-100% top',
      end: 'bottom top',
      toggleActions: 'play none reverse none',
    },
  })
  heroTextTl.to($heroContent, {
    y: '10rem',
    stagger: -0.1,
    duration: 1,
    ease: 'power1.inOut',
  })
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: $heroSection,
      start: 'top top',
      end: '50% top',
      scrub: 2,
    },
  })
  heroTl.to($heroImageWrap, { width: '100%', height: '100%' })
  heroTl.to(
    $heroBackgroundPosterImg,
    { width: '11.5vw', height: '30rem', y: '-7.5rem' },
    '<'
  )
}
