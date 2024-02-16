let $ = window.$

import gsap from 'gsap'

import lenis from '../utils/initSmoothScroll'

export default function contactPopup() {
  const $allContactOpenLinks = $('[data-open=contact]')
  const $allContactCLoseLinks = $('[data-close=contact]')
  const $contactPopup = $('.contact-popup-wrap')
  const contactPopupInner = document.querySelector('.contact-popup-inner')
  const $contactPopupImages = $contactPopup.find('img')
  const $contactPopupText = $contactPopup
    .find('.overflow-hidden')
    .children()
    .not('img')
  const clipPathFull = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  const clipPathBottom = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
  const clipPathTop = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
  $allContactOpenLinks.on('click', function () {
    openContactPopup()
  })
  $allContactCLoseLinks.on('click', function () {
    closeContactPopup()
  })

  const openContactPopupTl = gsap.timeline({
    onStart: () => {
      $contactPopup.addClass('is--open')
      $contactPopup.addClass('is--animating')
    },
    onComplete: () => {
      $contactPopup.removeClass('is--animating')
    },
  })

  const closeContactPopupTl = gsap.timeline({
    onStart: () => {
      $contactPopup.addClass('is--animating')
    },
    onComplete: () => {
      $contactPopup.removeClass('is--open')
      $contactPopup.removeClass('is--animating')
    },
  })

  $(document).keyup(function (e) {
    if (
      e.keyCode == 27 &&
      !$contactPopup.hasClass('is--animating') &&
      $contactPopup.hasClass('is--open')
    ) {
      closeContactPopup()
    }
    e.preventDefault()
  })

  document.addEventListener('click', function (e) {
    if (
      !contactPopupInner.contains(e.target) &&
      !$contactPopup.hasClass('is--animating') &&
      $contactPopup.hasClass('is--open')
    ) {
      closeContactPopup()
    }
  })

  function openContactPopup() {
    lenis.stop()
    openContactPopupTl
      .set($contactPopup, { display: 'flex' })
      .fromTo($contactPopup, { opacity: 0.1 }, { opacity: 1, duration: 0.1 })
      .fromTo(
        contactPopupInner,
        { clipPath: clipPathBottom },
        {
          clipPath: clipPathFull,
          duration: 1,
          ease: 'expo.inOut',
        },
        '<'
      )
      .fromTo(
        $contactPopupImages,
        { clipPath: clipPathBottom },
        {
          clipPath: clipPathFull,
          duration: 1.5,
          ease: 'expo.out',
          stagger: 0.1,
        },
        '<+0.25'
      )
      .fromTo(
        $contactPopupText,
        { y: '5rem' },
        { y: 0, duration: 1.5, ease: 'expo.out', stagger: 0.1 },
        '<+0.25'
      )
  }

  function closeContactPopup() {
    lenis.start()
    closeContactPopupTl
      .to($contactPopupText, {
        y: '-5rem',
        duration: 1,
        ease: 'expo.inOut',
        stagger: 0.1,
      })
      .to(
        $contactPopupImages,
        {
          clipPath: clipPathTop,
          duration: 1,
          ease: 'expo.inOut',
          stagger: -0.1,
        },
        '<+0.1'
      )
      .to(
        contactPopupInner,
        {
          clipPath: clipPathTop,
          duration: 1,
          ease: 'expo.inOut',
        },
        '<+0.15'
      )
      .to($contactPopup, { opacity: 0, duration: 0.5 }, '>-0.25')
      .set($contactPopup, { display: 'none' })
  }

  return [openContactPopupTl, closeContactPopupTl]
}
