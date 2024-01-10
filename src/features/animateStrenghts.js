import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

function animateTeaser() {
  const outerTeaserSection = document.querySelector(
    '.section--strenghts-container'
  )
  if (outerTeaserSection) {
    const teaserSection = document.querySelector('.section--strenghts')
    const teaserWrap = document.querySelector('.strenghts-outer-wrap')
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

    const teaserTl = gsap.timeline({
      scrollTrigger: {
        trigger: teaserSection,
        start: 'top 1%',
        end: 'bottom 50%',
        scrub: 0.5,
      },
    })

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
    teaserTl.fromTo(
      teaserSection,
      { opacity: 1 },
      { opacity: 0, duration: 0.2 }
    )
    teaserTl.fromTo(teaserSection, { autoAlpha: 1 }, { autoAlpha: 0 }, '<')

    playNextSectionAnimation()
  }

  function playNextSectionAnimation() {
    const nextSection = document.querySelector('.section--strenghts-after')
    const images = nextSection.querySelectorAll('.strenght-after__item')
    const button = nextSection.querySelector('.button-icon')
    const animatedItems = [images, button]
    const nextSectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: nextSection,
        // When the next section starts to animate
        start: '10% top',
        toggleActions: 'play play none reverse',
      },
    })
    nextSectionTl.fromTo(
      animatedItems,
      { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration: 0.5,
        ease: CustomEase.create('custom', 'M0,0 C0.302,0.398 0,1 1,1 '),
      }
    )
  }
}

export default animateTeaser
