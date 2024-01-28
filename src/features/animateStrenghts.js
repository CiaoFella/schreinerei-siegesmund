let $ = window.$

import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

function animateStrenghts() {
  const $teaserSection = $('.section--strenghts-container')
  const $firstSection = $teaserSection.find('.section--strenghts')

  const $teaserWrap = $teaserSection.find('.strenghts-wrap')
  const $teaserInner = $teaserWrap.find('.strenghts-inner')
  const $centerImages = $teaserWrap.find('.strenghts-img.is-middle')
  const $allOtherImages = $teaserWrap.find('.strenghts-img:not(.is-middle)')
  const $allColumns = $teaserWrap.find('.strenghts-column-inner')
  const $centerColumns = $teaserWrap.find('.strenghts-column-inner.is-center')
  const $reversedColumns = $teaserWrap.find(
    '.strenghts-column-inner.is-reversed'
  )
  const $edgeColumns = $teaserWrap.find('.strenghts-column-inner.is-reversed')

  const $nextSection = $teaserSection.find('.section--strenghts-after')
  const $images = $nextSection.find('.strenght-after__item')
  const $button = $nextSection.find('.button-icon')
  const $animatedItems = [$images, $button]

  const firstSectionTl = gsap.timeline({})
  const nextSectionTl = gsap.timeline({})

  const scrollTrigger1 = ScrollTrigger.create({
    animation: firstSectionTl,
    trigger: $firstSection,
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  })

  const scrollTrigger2 = ScrollTrigger.create({
    animation: nextSectionTl,
    trigger: $nextSection,
    // When the next section starts to animate
    start: 'top top',
    end: 'bottom top',
    toggleActions: 'play none none reverse',
  })

  firstSectionTl.fromTo(
    $allColumns,
    { width: '100vw', height: '350%' },
    {
      width: '100vw',
      height: '100%',
    }
  )
  firstSectionTl.fromTo($centerColumns, { y: '40%' }, { y: 0 }, '<')
  firstSectionTl.fromTo($reversedColumns, { y: '-40%' }, { y: '10%' }, '<')
  firstSectionTl.fromTo($edgeColumns, { y: '70%' }, { y: 0 }, '<')
  firstSectionTl.fromTo($teaserInner, { scale: 0.23 }, { scale: 1 })
  firstSectionTl.fromTo(
    $allOtherImages,
    { webkitFilter: 'blur(0px)', scale: 1 },
    { webkitFilter: 'blur(50px)', scale: 3 },
    '<'
  )
  firstSectionTl.fromTo(
    $centerImages,
    { scale: 1.5 },
    { scale: 1, delay: 0.2 },
    '<'
  )
  firstSectionTl.fromTo(
    $firstSection,
    { opacity: 1 },
    { opacity: 0, duration: 0.2 }
  )
  firstSectionTl.fromTo(
    $firstSection,
    { autoAlpha: 1 },
    {
      autoAlpha: 0,
    },
    '<'
  )

  nextSectionTl.fromTo(
    $animatedItems,
    { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
    {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      duration: 0.5,
      ease: CustomEase.create('custom', 'M0,0 C0.302,0.398 0,1 1,1 '),
    }
  )

  return [scrollTrigger1, scrollTrigger2]
}

export default animateStrenghts
