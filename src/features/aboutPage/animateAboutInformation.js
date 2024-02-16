let $ = window.$
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function animateAboutInformation() {
  let matchMedia = gsap.matchMedia()
  matchMedia.add('(min-width: 478px)', () => {
    const $informationSection = $('.section--information')
    const $allInformationItems = $informationSection.find('.information-item')
    let informationItemTl
    informationItemTl = gsap.timeline()

    $allInformationItems.each((index, item) => {
      informationItemTl = gsap.timeline()
      const $informationItemHeadline = $(item).find('h2')
      const $informationTextWrap = $(item).find(
        '.information_text-text-content'
      )
      const splitType = new SplitType($informationTextWrap)
      ScrollTrigger.create({
        animation: informationItemTl,
        trigger: item,
        start: 'top 75%',
        end: 'bottom center',
        scrub: 1,
      })

      informationItemTl.from(
        [$informationItemHeadline, splitType.lines, splitType.words],
        {
          y: '10rem',
          opacity: 0,
          duration: 2.5,
          stagger: 0.01,
          ease: 'expo.out',
        }
      )

      const itemImageWrap = $(item).find('.information_img-wrap')

      if ($(item).is(':nth-child(odd)')) {
        return informationItemTl.to(
          itemImageWrap,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 2,
          },
          0
        )
      } else if ($(item).is(':nth-child(even)')) {
        return informationItemTl.to(
          itemImageWrap,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 2,
          },
          0
        )
      }
    })

    return [informationItemTl]
  })
}
