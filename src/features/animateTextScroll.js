let $ = window.$
import gsap from 'gsap'
import SplitType from 'split-type'

import { varBlack, varGray } from './varbiables'

export default function animateTextScroll() {
  function animateTextEntrance() {
    const $allTextEntrancesSections = $('.is--text-entrance-section')
    $allTextEntrancesSections.each(function (index, item) {
      const $allTextEntrances = $(item).find('.is--text-entrance')
      const $splitLines = new SplitType($allTextEntrances)
      const textScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          toggleActions: 'play none none none',
        },
      })
      textScrollTl.from($splitLines.lines, {
        y: '10rem',
        stagger: 0.1,
        duration: 1,
      })
    })
  }

  function animateTextReveal() {
    const $allTextScrolls = $('.is--scroll-text')
    $allTextScrolls.each(function (index, item) {
      const $allTextAccent = $(item).find('span.text-accent-italic')
      const textScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          end: 'bottom 60%',
          scrub: 1,
        },
      })
      textScrollTl.fromTo(
        $allTextAccent,
        { color: varGray },
        { color: varBlack, stagger: 0.1 }
      )
    })
  }

  animateTextReveal()
  animateTextEntrance()
}
