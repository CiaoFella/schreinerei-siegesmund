let $ = window.$
import gsap from 'gsap'

import { clipPathFull, clipPathTop } from '../varbiables'
import animateHero from './animateHero'

function pageLoad() {
  const $pageLoadSection = $('.section--page-load')
  if ($pageLoadSection) {
    const $pageLoadImgWrap = $('.page-load-img-wrap')
    if ($pageLoadSection) {
      const pageLoadTl = gsap.timeline({
        onComplete: () => animateHero.mainHeroAnimation(),
      })
      pageLoadTl.to($pageLoadImgWrap, {
        clipPath: clipPathFull,
        duration: 2,
        stagger: 0.1,
        ease: 'expo.out',
      })
      pageLoadTl.to(
        $pageLoadImgWrap,
        {
          clipPath: clipPathTop,
          duration: 1.5,
          stagger: -0.05,
          ease: 'expo.inOut',
        },
        '>-25%'
      )
      pageLoadTl.fromTo(
        $pageLoadSection,
        {
          clipPath: clipPathFull,
        },
        {
          clipPath: clipPathTop,
          duration: 1.5,
          ease: 'expo.inOut',
        },
        '>-55%'
      )
      pageLoadTl.to($pageLoadSection, { display: 'none', duration: 0 })
    }
  }
}

export default pageLoad
