let $ = window.$
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'

import pageLoad from './pageLoad'

gsap.registerPlugin(CustomEase)

export default function pagePreload() {
  let counter = { value: 0 }
  let loaderDuration = 5
  let delay = 1
  const customEaseValue =
    'M0,0 C0.107,0.324 0.203,0.348 0.221,0.361 0.252,0.384 0.422,0.38 0.514,0.468 0.59,0.541 0.603,0.757 0.627,0.803 0.667,0.879 0.854,1 1,1'
  const $preloadWrap = $('.page-preload')
  const $processBar = $preloadWrap.find('.process-bar')
  const $preloadNumber = $preloadWrap.find('.preload-indicator')
  const $allPreloadBars = $preloadWrap.find('.page-preload-wrap').children()
  const $allPreloadContent = $preloadWrap
    .find('.page-preload-content')
    .children()

  if (sessionStorage.getItem('visited') !== null) {
    loaderDuration = 1
    counter = {
      value: 80,
    }
  }
  sessionStorage.setItem('visited', 'true')

  function updateLoaderText() {
    let progress = Math.round(counter.value)
    $preloadNumber.text(progress + '%')
  }

  function endLoaderAnimation() {
    $(window).scrollTop(0)
    const hidePreloadTl = gsap.timeline({ onComplete: pageLoad })
    hidePreloadTl.to($allPreloadContent, {
      y: '-10rem',
      duration: 1,
      stagger: 0.1,
      ease: 'expo.inOut',
    })
    hidePreloadTl.to(
      $allPreloadBars,
      { height: 0, duration: 1, stagger: 0.05, ease: 'expo.inOut' },
      '<+0.5'
    )
    hidePreloadTl.to($preloadWrap, { display: 'none', duration: 0 })
  }
  const preloadTl = gsap.timeline({ onComplete: endLoaderAnimation })

  preloadTl.to(counter, {
    value: 100,
    duration: loaderDuration,
    delay: delay,
    onUpdate: updateLoaderText,
    ease: CustomEase.create('custom', customEaseValue),
  })
  preloadTl.to(
    $processBar,
    {
      width: '100%',
      duration: loaderDuration,
      delay: delay,
      onUpdate: updateLoaderText,
      ease: CustomEase.create('custom', customEaseValue),
    },
    0
  )
}
