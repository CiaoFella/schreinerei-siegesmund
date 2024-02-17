let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { varBlack, varWhite, varTransparent } from '../utils/varbiables'

gsap.registerPlugin(ScrollTrigger)

function animateBgSections() {
  const backgroundTl = gsap.timeline({ defaults: { overwrite: 'auto' } })
  let backgroundColor
  let textColor
  let previousBackgroundColor
  let previousTextColor

  const $allBgSections = $('[data-bg]')
  $allBgSections.each((index, section) => {
    const body = $('body')
    const sectionBackgroundData = $(section).data('bg')
    const closestSection = $(section).closest('div[class*=section--]')
    const targetText = closestSection.find(
      `[data-bg-text=${sectionBackgroundData}]`
    )

    if (sectionBackgroundData === 'dark') {
      previousBackgroundColor = varTransparent
      previousTextColor = varBlack
      backgroundColor = varBlack
      textColor = varWhite
    }

    ScrollTrigger.create({
      animation: backgroundTl,
      trigger: section,
      start: 'top 50%',
      onEnter: () => {
        backgroundTl
          .to(body, {
            backgroundColor: backgroundColor,
            duration: 0.25,
          })
          .to(targetText, {
            color: textColor,
            duration: 0.25,
          })
      },
      onEnterBack: () => {
        backgroundTl
          .to(body, {
            backgroundColor: backgroundColor,
            duration: 0.25,
          })
          .to(targetText, {
            color: textColor,
            duration: 0.25,
          })
      },
      onLeaveBack: () => {
        backgroundTl
          .to(body, {
            backgroundColor: previousBackgroundColor,
            duration: 0.25,
          })
          .to(targetText, {
            color: previousTextColor,
            duration: 0.25,
          })
      },
      onLeave: () => {
        backgroundTl
          .to(body, {
            backgroundColor: previousBackgroundColor,
            duration: 0.25,
          })
          .to(targetText, {
            color: previousTextColor,
            duration: 0.25,
          })
      },
    })
  })

  return [backgroundTl]
}

export default animateBgSections
