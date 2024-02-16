let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

import {
  varBlack,
  varWhite,
  varTransparent,
  isDesktop,
  isTablet,
  clipPathFull,
  clipPathTop,
} from '../../shared/utils/varbiables'
gsap.registerPlugin(ScrollTrigger)

function animateMenu() {
  const menuTrigger = document.querySelector('.menu-trigger')
  const navigationOuterWrap = document.querySelector('.navbar-content-wrap')
  const navigationFlyout = document.querySelector('.navigation-flyout')
  const allFlyoutContentItems = navigationFlyout.querySelectorAll(
    '.navigation_content-item'
  )
  const allFlyoutContentLines =
    navigationFlyout.querySelectorAll('.background-line')
  const allFlyoutVerticalLines =
    navigationFlyout.querySelectorAll('.vertical-divider')
  const flyoutBlur = document.querySelector('.navigation-blur')
  const allFlyoutNavigations = navigationFlyout.querySelectorAll(
    '.navigation_content-item-inner'
  )
  const navigationContentWrap = navigationFlyout.querySelector(
    '.navigation_content-wrap'
  )

  // NAVBAR Items
  const navbarWrap = document.querySelector('.navbar-wrap')
  const navBarMenuIconPaths = navbarWrap.querySelectorAll('.menu-icon svg path')
  const navBarLogo = navbarWrap.querySelector('.logo-svg')
  const navBarMenuTrigger = navbarWrap.querySelectorAll(
    '.menu-trigger.is--secondary'
  )
  const allNavBarButtons = navbarWrap.querySelectorAll('.button-icon')
  const allNavBarButtonsUnderline = navbarWrap.querySelectorAll(
    '.button-icon .button-underline'
  )
  const allNavbarItemsColor = [navBarLogo, allNavBarButtons, navBarMenuTrigger]
  const allNavbarItemsFill = [navBarMenuIconPaths]

  const matchMedia = gsap.matchMedia()
  let mainNavColor
  let secondaryNavColor

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('is-active')
    if (allFlyoutContentItems) {
      if (menuTrigger.classList.contains('is-active')) {
        flyoutBlur.style.display = 'block'
        const menuTlOpen = gsap.timeline({
          onStart: () => {
            menuTrigger.style.pointerEvents = 'none'
            navigationFlyout.style.display = 'block'
            $(menuTrigger).addClass('is--animating')
          },
          onComplete: () => {
            menuTrigger.style.pointerEvents = 'initial'
            $(menuTrigger).removeClass('is--animating')
          },
        })
        menuTlOpen.fromTo(
          allNavbarItemsColor,
          {
            color: varWhite,
          },
          {
            color: varBlack,
            duration: 0.25,
          }
        )
        menuTlOpen.fromTo(
          allNavbarItemsFill,
          {
            fill: varWhite,
          },
          {
            fill: varBlack,
            duration: 0.25,
          },
          '<'
        )
        menuTlOpen.fromTo(
          allNavBarButtonsUnderline,
          {
            backgroundColor: varWhite,
          },
          {
            backgroundColor: varBlack,
            duration: 0.25,
          },
          '<'
        )
        menuTlOpen.fromTo(
          navbarWrap,
          {
            backgroundColor: varTransparent,
          },
          {
            backgroundColor: varWhite,
            duration: 0.25,
          },
          '<'
        )
        menuTlOpen.fromTo(
          flyoutBlur,
          {
            height: 0,
          },
          {
            height: '100vh',
            duration: 0.5,
          },
          '<'
        )
        menuTlOpen.fromTo(
          navigationFlyout,
          {
            autoAlpha: 0,
          },
          {
            delay: 0.25,
            autoAlpha: 1,
            duration: 0.25,
          },
          '<'
        )
        matchMedia.add(isTablet, () => {
          menuTlOpen.fromTo(
            navigationContentWrap,
            {
              clipPath: clipPathTop,
            },
            {
              clipPath: clipPathFull,
              duration: 1,
              ease: 'expo.inOut',
            },
            '<-0.25'
          )
        })
        matchMedia.add(isDesktop, () => {
          menuTlOpen.fromTo(
            allFlyoutContentItems,
            {
              height: 0,
            },
            {
              height: 'auto',
              stagger: 0.05,
              duration: 0.75,
              ease: 'expo.inOut',
            },
            '<-0.25'
          )
        })
        menuTlOpen.fromTo(
          allFlyoutNavigations,
          {
            y: '5rem',
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.5,
            ease: 'expo.out',
          },
          '>-0.5'
        )
        menuTlOpen.fromTo(
          allFlyoutVerticalLines,
          {
            width: 0,
          },
          {
            width: '100%',
            duration: 0.75,
          },
          '<-0.25'
        )
        menuTlOpen.fromTo(
          allFlyoutContentLines,
          {
            height: 0,
          },
          {
            height: '100%',
            stagger: 0.1,
            duration: 1.5,
            ease: 'expo.inOut',
          },
          '<'
        )
      } else {
        const currentNavbarData = $(navbarWrap).data('nav')
        if (currentNavbarData === 'transparent') {
          mainNavColor = varWhite
          secondaryNavColor = varTransparent
        } else if (currentNavbarData === 'dark-transparent') {
          mainNavColor = varBlack
          secondaryNavColor = varTransparent
        } else if (currentNavbarData === 'background') {
          mainNavColor = varBlack
          secondaryNavColor = varWhite
        }
        const menuTlClose = gsap.timeline({
          onStart: () => {
            menuTrigger.style.pointerEvents = 'none'
          },
          onComplete: () => {
            menuTrigger.style.pointerEvents = 'initial'
            navigationFlyout.style.display = 'none'
          },
        })
        menuTlClose.to(
          allFlyoutContentLines,
          {
            height: '0',
            stagger: -0.1,
            duration: 0.75,
            ease: 'expo.inOut',
          },
          '<'
        )
        menuTlClose.to(
          allFlyoutVerticalLines,
          {
            width: 0,
            stagger: -0.1,
            duration: 0.75,
            ease: 'expo.inOut',
          },
          '<'
        )
        menuTlClose.to(
          allFlyoutNavigations,
          {
            y: '2.5rem',
            opacity: 0,
            stagger: 0.05,
            duration: 0.25,
            ease: 'expo.in',
          },
          '<'
        )
        matchMedia.add(isDesktop, () => {
          menuTlClose.to(
            allFlyoutContentItems,
            {
              height: 0,
              stagger: -0.05,
              duration: 0.75,
              ease: 'expo.inOut',
            },
            '<'
          )
        })
        matchMedia.add(isTablet, () => {
          menuTlClose.to(
            navigationContentWrap,
            {
              clipPath: clipPathTop,
              duration: 1.5,
              ease: 'expo.inOut',
            },
            '<'
          )
        })
        menuTlClose.to(
          flyoutBlur,
          {
            height: 0,
            duration: 0.75,
            ease: 'expo.out',
          },
          '<+0.5'
        )
        menuTlClose.to(navigationFlyout, {
          autoAlpha: 0,
          duration: 0,
        })
        menuTlClose
          .to(
            allNavbarItemsColor,
            {
              color: mainNavColor,
              duration: 0.5,
            },
            '<-0.15'
          )
          .to(
            allNavbarItemsFill,
            {
              fill: mainNavColor,
              duration: 0.5,
            },
            '<'
          )
          .to(
            allNavBarButtonsUnderline,
            {
              backgroundColor: mainNavColor,
              duration: 0.5,
            },
            '<'
          )
          .to(
            navbarWrap,
            {
              backgroundColor: secondaryNavColor,
              duration: 0.5,
            },
            '<'
          )
      }
    }
  })

  $(document).keyup(function (e) {
    if (
      e.keyCode == 27 &&
      !$(menuTrigger).hasClass('is--animating') &&
      $(menuTrigger).hasClass('is-active')
    ) {
      closeMenu()
    }
    e.preventDefault()
  })

  document.addEventListener('click', function (e) {
    if (
      !navigationOuterWrap.contains(e.target) &&
      !$(menuTrigger).hasClass('is--animating') &&
      $(menuTrigger).hasClass('is-active')
    ) {
      closeMenu()
    } else if (
      navigationFlyout.contains(e.target) &&
      $(e.target).closest('a').length &&
      !$(menuTrigger).hasClass('is--animating') &&
      $(menuTrigger).hasClass('is-active')
    ) {
      closeMenu()
    }
  })

  function closeMenu() {
    menuTrigger.click()
  }
}

export default animateMenu