let $ = window.$
import gsap from 'gsap'
import hoverEffect from 'hover-effect'

export default function animateService() {
  const $serviceTitle = $('.service-headline-item')
  const allServiceItemsVertical = document.querySelectorAll(
    '.service-item.is--vertical'
  )
  const allServiceItemsHorizontal = document.querySelectorAll(
    '.service-item.is--horizontal'
  )
  const allServiceItemsSquare = document.querySelectorAll(
    '.service-item.is--square'
  )
  const $serviceItem3n1 = $('.service-item:nth-child(3n+1')
  const $serviceItem3n2 = $('.service-item:nth-child(3n+2')
  const $serviceItem3n3 = $('.service-item:nth-child(3n+3')
  const $allServiceItems = $('.service-item')
  $serviceTitle.eq(0).addClass('is--active')
  const $serviceRow = $('.service-row')
  allServiceItemsVertical.forEach(function (item) {
    const imgWrap = item.querySelector('.service-item-img-wrap')
    const img = item.querySelector('.service-img').src
    new hoverEffect({
      parent: imgWrap,
      intensity: 0.5,
      speedIn: 0.5,
      speedOut: 0.5,
      image1: img,
      image2: img,
      easing: 'power1.inOut',
      imagesRatio: 1500 / 1000,
      displacementImage:
        'https://uploads-ssl.webflow.com/6564c4456080e0bdcc61f7b1/657b2da455169d07e5a15a80_jean-wimmerlin-dcasj22jmCk-unsplash-1.webp',
    })
  })
  allServiceItemsHorizontal.forEach(function (item) {
    const imgWrap = item.querySelector('.service-item-img-wrap')
    const img = item.querySelector('.service-img').src
    new hoverEffect({
      parent: imgWrap,
      intensity: 0.5,
      speedIn: 0.5,
      speedOut: 0.5,
      image1: img,
      image2: img,
      easing: 'power1.inOut',
      imagesRatio: 1000 / 1500,
      displacementImage:
        'https://uploads-ssl.webflow.com/6564c4456080e0bdcc61f7b1/657b2da455169d07e5a15a80_jean-wimmerlin-dcasj22jmCk-unsplash-1.webp',
    })
  })
  allServiceItemsSquare.forEach(function (item) {
    const imgWrap = item.querySelector('.service-item-img-wrap')
    const img = item.querySelector('.service-img').src
    new hoverEffect({
      parent: imgWrap,
      intensity: 0.5,
      speedIn: 0.5,
      speedOut: 0.5,
      image1: img,
      image2: img,
      easing: 'power1.inOut',
      imagesRatio: 1000 / 1000,
      displacementImage:
        'https://uploads-ssl.webflow.com/6564c4456080e0bdcc61f7b1/657b2da455169d07e5a15a80_jean-wimmerlin-dcasj22jmCk-unsplash-1.webp',
    })
  })
  $allServiceItems.each(function () {
    const triggerElement = $(this)
    const targetElement = $(this).find('.service-item-img-wrap canvas')
    const serviceItemZoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
    serviceItemZoomTl.fromTo(targetElement, { scale: 1 }, { scale: 1.2 })
  })
  $serviceRow.each(function () {
    let triggerElement = $(this)
    let myIndex = $(this).index()
    let targetElement = $serviceTitle.eq(myIndex)
    const serviceTl = () =>
      gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 50%',
          end: 'bottom bottom',
          scrub: 1,
          onEnter: () => {
            $serviceTitle.removeClass('is--active')
            targetElement.addClass('is--active')
          },
          onEnterBack: () => {
            $serviceTitle.removeClass('is--active')
            targetElement.addClass('is--active')
          },
        },
      })
    serviceTl()
  })
  $serviceItem3n1.each(function () {
    let triggerElement = $(this)
    let targetElement = $(this)

    let serviceItemTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3,
      },
    })
    serviceItemTl.to(targetElement, {
      y: '-5%',
      duration: 1,
    })
  })
  $serviceItem3n2.each(function () {
    let triggerElement = $(this)
    let targetElement = $(this)

    let serviceItemTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3,
      },
    })
    serviceItemTl.to(targetElement, {
      y: '-10%',
      duration: 1,
    })
  })
  $serviceItem3n3.each(function () {
    let triggerElement = $(this)
    let targetElement = $(this)

    let serviceItemTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3,
      },
    })
    serviceItemTl.to(targetElement, {
      y: '-15%',
      duration: 1,
    })
  })
}
