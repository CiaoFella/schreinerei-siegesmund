let $ = window.$
import gsap from 'gsap'

export default function pageLoad() {
  const $pageLoadSection = $('.section--page-load')
  const clipPathFull = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  const clipPathTop = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
  if ($pageLoadSection) {
    const $pageLoadImgWrap = $('.page-load-img-wrap')
    if ($pageLoadSection) {
      const pageLoadTl = gsap.timeline({ onComplete: mainHeroAnimation })
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

  function mainHeroAnimation() {
    const $mainHero = $('.section--hero.is--main')
    const $heroBackgroundImg = $mainHero.find('.hero-background-img')
    const $heroBackgroundPosterImg = $mainHero.find(
      '.hero-background-poster-img'
    )
    const $heroText = $mainHero.find('.hero-h1-wrap').children()
    const $heroButton = $mainHero.find('.button-icon')
    const $heroContent = [$heroText, $heroButton]
    const animateHeroTl = gsap.timeline()
    animateHeroTl.to($heroBackgroundImg, {
      clipPath: clipPathFull,
      duration: 1,
      ease: 'power3.out',
    })
    animateHeroTl.to(
      $heroBackgroundPosterImg,
      {
        clipPath: clipPathFull,
        duration: 1.5,
        stagger: 0.05,
        ease: 'power3.inOut',
      },
      '<-25%'
    )
    animateHeroTl.to(
      $heroContent,
      {
        y: '0rem',
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
      },
      '>-0.5'
    )
    animateHeroTl.to(
      $('.hero-inner'),
      { visibility: 'visible', duration: 0 },
      0
    )
  }
}
