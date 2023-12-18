import gsap from 'gsap'

import { varBlack, varWhite } from './varbiables'
let $ = window.$

function animateLightSection() {
  const $allLightBg = $('.is--light-bg, .service-row:nth-child(odd)')
  $allLightBg.each(function () {
    const triggerElement = $(this)
    const targetElementBg = $('body')
    const targetElementText = $(this).find('*')
    const targetWrappingSection = $(this).closest('div[class*=section--]')
    const targetAlterText = targetWrappingSection.find('.is--changing-text')

    const lightBgTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
    lightBgTl.to(targetElementBg, { backgroundColor: varWhite, duration: 1 })
    if (targetAlterText) {
      lightBgTl.to(targetAlterText, { color: varBlack, duration: 1 })
    } else {
      lightBgTl.to(targetElementText, { color: varBlack, duration: 1 })
    }
  })
}

function animateDarkSection() {
  const $allDarkBg = $('.is--dark-bg, .service-row:nth-child(even)')
  $allDarkBg.each(function () {
    const triggerElement = $(this)
    const targetElementBg = $('body')
    const targetElementText = $(this).find('*')
    const targetWrappingSection = $(this).closest('div[class*=section--]')
    const targetAlterText = targetWrappingSection.find('.is--changing-text')

    const darkBgTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
    darkBgTl.fromTo(
      targetElementBg,
      { backgroundColor: varWhite },
      { backgroundColor: varBlack, duration: 1 }
    )
    if (targetAlterText) {
      darkBgTl.fromTo(
        targetAlterText,
        { color: varBlack },
        { color: varWhite, duration: 1 }
      )
    } else {
      darkBgTl.fromTo(
        targetElementText,
        { color: varBlack },
        { color: varWhite, duration: 1 }
      )
    }
  })
}

export default { animateDarkSection, animateLightSection }
