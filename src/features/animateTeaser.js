import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
// import SplitType from 'split-type'

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

function animateTeaser() {
  const outerTeaserSection = document.querySelector(
    '.section--strenghts-container'
  )
  const teaserSection = document.querySelector('.section--strenghts')
  const teaserWrap = document.querySelector('.strenghts-outer-wrap')
  const headline = outerTeaserSection.querySelector('h2')
  const teaserInner = teaserWrap.querySelector('.strenghts-inner')
  const centerImages = teaserWrap.querySelectorAll('.strenghts-img.is-middle')
  const allOtherImages = teaserWrap.querySelectorAll(
    '.strenghts-img:not(.is-middle)'
  )
  const allColumns = teaserWrap.querySelectorAll('.strenghts-column-inner')
  const centerColumns = teaserWrap.querySelectorAll(
    '.strenghts-column-inner.is-center'
  )
  const reversedColumns = teaserWrap.querySelectorAll(
    '.strenghts-column-inner.is-reversed'
  )
  const edgeColumns = teaserWrap.querySelectorAll(
    '.strenghts-column-inner.is-reversed'
  )

  // const imgWrap = teaserWrap.querySelector('.strenghts-img-wrap.is-middle')
  // const textWrap = imgWrap.querySelectorAll('.heading-style-h2')
  // const button = imgWrap.querySelectorAll('.button-icon')
  // const allChildren = [textWrap, button]
  // const splitText = new SplitType(textWrap)

  const teaserTl = gsap.timeline({
    scrollTrigger: {
      trigger: teaserWrap,
      start: 'top 50%',
      end: 'bottom bottom',
      scrub: 0.5,
    },
    onComplete: () => {
      console.log('finished')
    },
  })

  teaserTl.fromTo(
    headline,
    { opacity: 1, y: 0 },
    { opacity: 0, y: '100%', ease: 'expo.out' }
  )
  teaserTl.fromTo(
    allColumns,
    { width: '100vw', height: '350%' },
    { width: '100vw', height: '100%' }
  )
  teaserTl.fromTo(centerColumns, { y: '40%' }, { y: 0 }, '<')
  teaserTl.fromTo(reversedColumns, { y: '-40%' }, { y: '10%' }, '<')
  teaserTl.fromTo(edgeColumns, { y: '70%' }, { y: 0 }, '<')
  teaserTl.fromTo(teaserInner, { scale: 0.23 }, { scale: 1 })
  teaserTl.fromTo(
    allOtherImages,
    { webkitFilter: 'blur(0px)', scale: 1 },
    { webkitFilter: 'blur(50px)', scale: 3 },
    '<'
  )
  teaserTl.fromTo(centerImages, { scale: 1.5 }, { scale: 1, delay: 0.2 }, '<')
  teaserTl.fromTo(teaserSection, { opacity: 1 }, { opacity: 0, duration: 0.2 })

  function playNextSectionAnimation() {
    const nextSection = document.querySelector('.section--strenghts-after')
    const images = nextSection.querySelectorAll('.strenght-after__item')
    const nextSectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: nextSection,
        start: '10% top',
        markers: true,
        toggleActions: 'play play none reverse',
      },
      onStart: console.log(teaserWrap),
    })
    nextSectionTl.fromTo(
      images,
      { height: 0, opacity: 0 },
      {
        height: '100%',
        opacity: 1,
        duration: 0.5,
        ease: 'expo.inOut',
      }
    )
  }

  playNextSectionAnimation()

  // playTextAnimation = function textAnimation() {
  //   const textTl = gsap.timeline({
  //     onStart: () => {
  //       allChildren.forEach((child) => {
  //         child[0].classList.add('is--animated')
  //       })
  //     },
  //   })
  //   textTl.fromTo(
  //     splitText.lines,
  //     { y: '50%', opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.2,
  //       duration: 0.75,
  //       ease: 'power2.out',
  //     }
  //   )
  //   textTl.fromTo(
  //     button,
  //     { y: '50%', opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: 'power2.out',
  //     },
  //     '>-0.25'
  //   )
  // }
}

export default animateTeaser
