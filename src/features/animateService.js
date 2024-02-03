let $ = window.$
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function animateService() {
  const serviceItemHeightTl = gsap.timeline()
  const serviceItemZoomTl = gsap.timeline()
  const serviceItemTl = gsap.timeline()
  const $serviceTitle = $('.service-headline-item')
  const $serviceRow = $('.service-row')
  const $serviceItem3n1 = $('.service-item:nth-child(3n+1')
  const $serviceItem3n2 = $('.service-item:nth-child(3n+2')
  const $serviceItem3n3 = $('.service-item:nth-child(3n+3')
  $serviceTitle.eq(0).addClass('is--active')

  $serviceRow.each(function () {
    let triggerElement = $(this)
    let myIndex = $(this).index()
    let targetElement = $serviceTitle.eq(myIndex)

    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play complete play none',
      onEnter: () => {
        $serviceTitle.removeClass('is--active')
        targetElement.addClass('is--active')
      },
      onEnterBack: () => {
        $serviceTitle.removeClass('is--active')
        targetElement.addClass('is--active')
      },
    })
  })

  $serviceItem3n1.each(function () {
    const serviceItemTl = gsap.timeline()
    let triggerElement = $(this)
    let targetElement = $(this)

    serviceItemTl.to(targetElement, {
      y: '-20%',
    })

    ScrollTrigger.create({
      animation: serviceItemTl,
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 5,
    })
  })
  $serviceItem3n2.each(function () {
    const serviceItemTl = gsap.timeline()
    let triggerElement = $(this)
    let targetElement = $(this)

    ScrollTrigger.create({
      animation: serviceItemTl,
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 5,
    })
    serviceItemTl.to(targetElement, {
      y: '-40%',
    })
  })
  $serviceItem3n3.each(function () {
    const serviceItemTl = gsap.timeline()
    let triggerElement = $(this)
    let targetElement = $(this)

    ScrollTrigger.create({
      animation: serviceItemTl,
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 5,
    })
    serviceItemTl.to(targetElement, {
      y: '-60%',
    })
  })

  return [serviceItemHeightTl, serviceItemZoomTl, serviceItemTl]
}

export default animateService
