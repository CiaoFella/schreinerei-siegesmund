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
        end: 'bottom top',
        toggleActions: 'play none none none',
        onEnter: () => {
          lightBgTl.to(targetElementBg, {
            backgroundColor: varWhite,
          })
          if (targetAlterText) {
            lightBgTl.to(targetAlterText, { color: varBlack })
          } else {
            lightBgTl.to(targetElementText, { color: varBlack })
          }
        },
        onEnterBack: () => {
          lightBgTl.to(targetElementBg, {
            backgroundColor: varWhite,
          })
          if (targetAlterText) {
            lightBgTl.to(targetAlterText, { color: varBlack })
          } else {
            lightBgTl.to(targetElementText, { color: varBlack })
          }
        },
      },
      defaults: {
        duration: 0.25,
      },
    })
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
        end: 'bottom top',
        toggleActions: 'play complete play none',
        onEnter: () => {
          darkBgTl.to(targetElementBg, {
            backgroundColor: varBlack,
          })
          if (targetAlterText) {
            darkBgTl.to(targetAlterText, { color: varWhite })
          } else {
            darkBgTl.to(targetElementText, { color: varWhite })
          }
        },
        onEnterBack: () => {
          darkBgTl.to(targetElementBg, {
            backgroundColor: varBlack,
          })
          if (targetAlterText) {
            darkBgTl.to(targetAlterText, { color: varWhite })
          } else {
            darkBgTl.to(targetElementText, { color: varWhite })
          }
        },
      },
      defaults: {
        duration: 0.25,
      },
    })
  })
}

export default { animateDarkSection, animateLightSection }
