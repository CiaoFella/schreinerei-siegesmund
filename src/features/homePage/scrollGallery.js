let $ = window.$

import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

function scrollGallery() {
  const $teaserSection = $('.section--scroll-gallery-container')
  const $firstSection = $teaserSection.find('.section--scroll-gallery')

  const $teaserWrap = $teaserSection.find('.scroll-gallery-wrap')
  const $teaserInner = $teaserWrap.find('.scroll-gallery-inner')
  const $centerImages = $teaserWrap.find('.scroll-gallery-img.is-middle')
  const $allOtherImages = $teaserWrap.find(
    '.scroll-gallery-img:not(.is-middle)'
  )
  const $allColumns = $teaserWrap.find('.scroll-gallery-column-inner')
  const $centerColumns = $teaserWrap.find(
    '.scroll-gallery-column-inner.is-center'
  )
  const $reversedColumns = $teaserWrap.find(
    '.scroll-gallery-column-inner.is-reversed'
  )
  const $edgeColumns = $teaserWrap.find(
    '.scroll-gallery-column-inner.is-reversed'
  )

  const firstSectionTl = gsap.timeline({})

  const scrollTrigger1 = ScrollTrigger.create({
    animation: firstSectionTl,
    trigger: $firstSection,
    start: 'top center',
    end: 'bottom center',
    scrub: 2,
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

  return [scrollTrigger1]
}

export default scrollGallery
