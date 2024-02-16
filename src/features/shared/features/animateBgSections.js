let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { varBlack, varWhite } from '../utils/varbiables'

gsap.registerPlugin(ScrollTrigger)

function animateBgSections() {
  const backgroundTl = gsap.timeline({
    defaults: {
      duration: 0.25,
    },
  })
  const $allLightBg = $('.service-row:nth-child(odd)')
  $allLightBg.each(function () {
    const triggerElement = $(this)
    const targetElementBg = $('body')
    const targetElementText = $(this).find('*')
    const targetWrappingSection = $(this).closest('div[class*=section--]')
    const targetAlterText = targetWrappingSection.find('.is--changing-text')
    ScrollTrigger.create({
      animation: backgroundTl,
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none none none',
      onEnter: () => {
        backgroundTl.to(targetElementBg, {
          backgroundColor: varWhite,
        })
        if (targetAlterText.length > 0) {
          backgroundTl.to(targetAlterText, { color: varBlack })
        } else {
          backgroundTl.to(targetElementText, { color: varBlack })
        }
      },
      onEnterBack: () => {
        backgroundTl.to(targetElementBg, {
          backgroundColor: varWhite,
        })
        if (targetAlterText.length > 0) {
          backgroundTl.to(targetAlterText, { color: varBlack })
        } else {
          backgroundTl.to(targetElementText, { color: varBlack })
        }
      },
    })
  })
  const $allDarkBg = $('.service-row:nth-child(even)')
  $allDarkBg.each(function () {
    const triggerElement = $(this)
    const targetElementBg = $('body')
    const targetElementText = $(this).find('*')
    const targetWrappingSection = $(this).closest('div[class*=section--]')
    const targetAlterText = targetWrappingSection.find('.is--changing-text')
    ScrollTrigger.create({
      animation: backgroundTl,
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none none none',
      onEnter: () => {
        backgroundTl.to(targetElementBg, {
          backgroundColor: varBlack,
        })
        if (targetAlterText.length > 0) {
          backgroundTl.to(targetAlterText, { color: varWhite })
        } else {
          backgroundTl.to(targetElementText, { color: varWhite })
        }
      },
      onEnterBack: () => {
        backgroundTl.to(targetElementBg, {
          backgroundColor: varBlack,
        })
        if (targetAlterText.length > 0) {
          backgroundTl.to(targetAlterText, { color: varWhite })
        } else {
          backgroundTl.to(targetElementText, { color: varWhite })
        }
      },
    })
  })

  return [backgroundTl]
}

export default animateBgSections
