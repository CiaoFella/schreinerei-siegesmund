let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

import { varBlack, varGray } from './varbiables'

gsap.registerPlugin(ScrollTrigger)

function animateTextScroll() {
  const textScrollTl = gsap.timeline({})
  const headlineScrollTl = gsap.timeline()
  const $allTextScrolls = $('.is--scroll-text')
  const $allScrollHeadlines = $('.section--scroll-headline')

  $allScrollHeadlines.each(function (index, item) {
    const $allTextLines = $(item).find('.is--text-line')
    const splitWords = new SplitType($allTextLines, { types: 'words' })
    headlineScrollTl.from(splitWords.words, {
      y: '10rem',
      stagger: 0.05,
      duration: 1.25,
      ease: 'expo.out',
    })
  })

  $allTextScrolls.each(function (index, item) {
    const $allTextAccent = $(item).find('span.text-accent-italic')
    $allTextAccent.each((index, textItem) => {
      textScrollTl.fromTo(textItem, { color: varGray }, { color: varBlack })
    })
  })

  $allScrollHeadlines.each(function (index, item) {
    ScrollTrigger.create({
      animation: headlineScrollTl,
      trigger: item,
      start: 'top top',
      end: 'bottom 75%',
      toggleActions: 'play reverse play reverse',
    })
  })

  $allTextScrolls.each(function (index, item) {
    ScrollTrigger.create({
      animation: textScrollTl,
      trigger: item,
      start: 'top center',
      end: 'bottom bottom',
      scrub: 0.5,
    })
  })

  return [textScrollTl, headlineScrollTl]
}

export default animateTextScroll
