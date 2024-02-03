let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { varWhite, varBlack } from './varbiables'

gsap.registerPlugin(ScrollTrigger)

function animateBgSections() {
  const lightBgTl = gsap.timeline({
    defaults: {
      duration: 0.25,
    },
  })
  const $allLightBg = $('.is--light-bg, .service-row:nth-child(odd)')
  $allLightBg.each(function () {
    const lightBgTl = gsap.timeline({
      defaults: {
        duration: 0.25,
      },
    })
    const triggerElement = $(this)
    const targetElementBg = $('body')
    const targetElementText = $(this).find('*')
    const targetWrappingSection = $(this).closest('div[class*=section--]')
    const targetAlterText = targetWrappingSection.find('.is--changing-text')
    ScrollTrigger.create({
      animation: lightBgTl,
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none play none',
      onEnter: () => {
        lightBgTl.to(targetElementBg, {
          backgroundColor: varWhite,
        })
        if (targetAlterText.length > 0) {
          lightBgTl.to(targetAlterText, { color: varBlack })
        } else {
          lightBgTl.to(targetElementText, { color: varBlack })
        }
      },
      onEnterBack: () => {
        lightBgTl.to(targetElementBg, {
          backgroundColor: varWhite,
        })
        if (targetAlterText.length > 0) {
          lightBgTl.to(targetAlterText, { color: varBlack })
        } else {
          lightBgTl.to(targetElementText, { color: varBlack })
        }
      },
    })
  })

  const darkBgTl = gsap.timeline({
    defaults: {
      duration: 0.25,
    },
  })
  const $allDarkBg = $('.is--dark-bg, .service-row:nth-child(even)')
  $allDarkBg.each(function () {
    const darkBgTl = gsap.timeline({
      defaults: {
        duration: 0.25,
      },
    })
    const triggerElement = $(this)
    const targetElementBg = $('body')
    const targetElementText = $(this).find('*')
    const targetWrappingSection = $(this).closest('div[class*=section--]')
    const targetAlterText = targetWrappingSection.find('.is--changing-text')
    ScrollTrigger.create({
      animation: darkBgTl,
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none play none',
      onEnter: () => {
        darkBgTl.to(targetElementBg, {
          backgroundColor: varBlack,
        })
        if (targetAlterText.length > 0) {
          darkBgTl.to(targetAlterText, { color: varWhite })
        } else {
          darkBgTl.to(targetElementText, { color: varWhite })
        }
      },
      onEnterBack: () => {
        darkBgTl.to(targetElementBg, {
          backgroundColor: varBlack,
        })
        if (targetAlterText.length > 0) {
          darkBgTl.to(targetAlterText, { color: varWhite })
        } else {
          darkBgTl.to(targetElementText, { color: varWhite })
        }
      },
    })
  })

  return [lightBgTl, darkBgTl]
}

export default animateBgSections
