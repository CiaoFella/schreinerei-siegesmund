let $ = window.$
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const $sectionWrap = $('.section--hero')
let nextPageLink
const $allPageLinks = $('a:not(.w--current)')
const $pageTransitionOuterWrap = $('.page-transition')
const $pageTransitionInnerWrap =
  $pageTransitionOuterWrap.find('.page-preload-wrap')
const $pageTransitionItems = $pageTransitionInnerWrap.children()
const $pageTransitionLogo = $pageTransitionOuterWrap.find('.logo-svg')

export default function pageTransition() {
  $allPageLinks.each((index, item) => {
    if (
      $(item).attr('href').includes('/') &&
      $(item).attr('target') !== '_blank'
    ) {
      $(item).on('click', function (e) {
        e.preventDefault()
        nextPageLink = $(this).attr('href')
        pageTransitionInAnimation()
      })
    }
  })

  function pageTransitionInAnimation() {
    const transitionInTl = gsap.timeline({})

    $('html').addClass('animating')
    $pageTransitionOuterWrap.show()

    transitionInTl.fromTo(
      $pageTransitionItems,
      {
        y: '100%',
      },
      {
        y: '0',
        transformOrigin: 'bottom center',
        stagger: 0.05,
        ease: 'expo.inOut',
        duration: 1,
        delay: 0.2,
        onComplete: () => {
          updatePage()
        },
      }
    )
    transitionInTl.fromTo(
      $pageTransitionLogo,
      { y: '5rem' },
      {
        y: 0,
        duration: 1.5,
        ease: 'expo.out',
      },
      '<+0.75'
    )
  }

  function updatePage() {
    window.location = nextPageLink
  }
}

function pageTransitionOutAnimation() {
  const transitionOutTl = gsap.timeline({})
  $pageTransitionOuterWrap.show()
  transitionOutTl.from($sectionWrap, {
    y: '50vh',
    duration: 1.5,
    ease: 'expo.inOut',
  })
  transitionOutTl.to(
    $pageTransitionItems,
    {
      y: '-100%',
      stagger: 0.05,
      duration: 1,
      ease: 'expo.inOut',
      onComplete: () => {
        $pageTransitionOuterWrap.hide()
      },
    },
    '<'
  )
  transitionOutTl.to(
    $pageTransitionLogo,
    {
      y: '-5rem',
      duration: 1,
      ease: 'expo.inOut',
    },
    '<'
  )
}

$(window).on('load', function () {
  if (window.location.pathname == '/') {
    $pageTransitionOuterWrap.hide()
    return
  } else {
    $pageTransitionOuterWrap.show()
    pageTransitionOutAnimation()
  }
})
