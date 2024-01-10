let $ = window.$
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'
import SplitType from 'split-type'
gsap.registerPlugin(CustomEase)

export default function animateIntro() {
  const $introWrap = $('.section--intro')
  if ($introWrap) {
    const $triggerElement = $introWrap
    const $images = $triggerElement.find('.img-wrap img')
    const $lastItem = $triggerElement.find('.intro-item.is--last-text')
    const $textitems = $triggerElement.find('h2')
    const splitLines = new SplitType($textitems)
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: $lastItem,
        start: '-100% 50%',
        end: 'bottom 75%',
        toggleActions: 'play none none none',
      },
    })
    textTl.fromTo(
      splitLines.lines,
      { y: '150%' },
      {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      }
    )
    $images.each(function (index, item) {
      const imageScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          end: 'bottom 75%',
          toggleActions: 'play none none none',
        },
      })
      imageScrollTl.fromTo(
        item,
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          duration: 2,
          ease: CustomEase.create('custom', 'M0,0 C0.302,0.398 0,1 1,1 '),
        }
      )
    })
  }
}
