let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function animateBgSections() {
  const backgroundTl = gsap.timeline({ defaults: { overwrite: 'auto' } })

  const $allBgSections = $('[data-bg]')
  let bgClass
  let textClass
  $allBgSections.each((index, section) => {
    const $backgroundTarget = $('.section-wrapper')
    const $sectionBackgroundData = $(section).data('bg')
    const $closestSection = $(section).closest('div[class*=section--]')
    const $targetText = $closestSection.find(
      `[data-bg-text=${$sectionBackgroundData}]`
    )

    if ($sectionBackgroundData === 'dark') {
      bgClass = 'dark-bg'
      textClass = 'dark-bg-text'
    }

    ScrollTrigger.create({
      animation: backgroundTl,
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        $backgroundTarget.addClass(bgClass)
        $targetText.addClass(textClass)
      },
      onEnterBack: () => {
        $backgroundTarget.addClass(bgClass)
        $targetText.addClass(textClass)
      },
      onLeaveBack: () => {
        $backgroundTarget.removeClass(bgClass)
        $targetText.removeClass(textClass)
      },
      onLeave: () => {
        $backgroundTarget.removeClass(bgClass)
        $targetText.removeClass(textClass)
      },
    })
  })
}

export default animateBgSections
