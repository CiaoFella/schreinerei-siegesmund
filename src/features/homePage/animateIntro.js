let $ = window.$
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

function animateIntro() {
  const $introWrap = $('.section--intro')
  const $triggerElement = $introWrap
  const $images = $triggerElement.find('.img-wrap img')
  const $textitems = $triggerElement.find('h2')
  const splitLines = new SplitType($textitems)
  const $lastItem = $triggerElement.find('.intro-item.is--last-text')
  const textScrollTl = gsap.timeline({})
  const imageScrollTl = gsap.timeline({})

  ScrollTrigger.create({
    animation: textScrollTl,
    trigger: $lastItem,
    start: '-100% 50%',
    end: 'bottom 75%',
    toggleActions: 'play none none none',
  })

  textScrollTl.fromTo(
    splitLines.lines,
    { y: '15rem' },
    {
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    }
  )
  $images.each(function (index, image) {
    ScrollTrigger.create({
      animation: imageScrollTl,
      trigger: image,
      start: 'top 50%',
      end: 'bottom 75%',
      toggleActions: 'play none none none',
    })
  })

  imageScrollTl.fromTo(
    $images,
    { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
    {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      duration: 2,
      stagger: 0.1,
      ease: CustomEase.create('custom', 'M0,0 C0.302,0.398 0,1 1,1 '),
    }
  )

  return [textScrollTl, imageScrollTl]
}

export default animateIntro
