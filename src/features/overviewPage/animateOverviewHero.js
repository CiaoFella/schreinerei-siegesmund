let $ = window.$
import gsap from 'gsap'
import SplitType from 'split-type'

export default function animateOverviewHero() {
  const overviewHero = $('.section--overview-hero')
  const overviewGridItem = overviewHero.find('.overview-grid-item')
  const overviewHeadline = overviewHero.find('h1')
  const overviewSplit = new SplitType(overviewHeadline)

  const overviewTl = gsap.timeline({ defaults: { delay: 0.5 } })

  overviewTl
    .to([overviewSplit.lines, overviewSplit.words], {
      y: '0rem',
      stagger: 0.02,
      ease: 'expo.out',
      duration: 1.5,
    })
    .to(
      overviewGridItem,
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.2,
      },
      0
    )

  return [overviewTl]
}
