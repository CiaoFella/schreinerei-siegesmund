import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

import isFurtherScrolledThanHero, {
  varBlack,
  varWhite,
  varTransparent,
} from './varbiables'
gsap.registerPlugin(ScrollTrigger)

function animateMenu() {
  const menuTrigger = document.querySelector('.menu-trigger')

  const navigationFlyout = document.querySelector('.navigation-flyout')
  const allFlyoutContentItems = navigationFlyout.querySelectorAll(
    '.navigation_content-item'
  )
  const allFlyoutContentLines =
    navigationFlyout.querySelectorAll('.background-line')
  const allFlyoutVerticalLines =
    navigationFlyout.querySelectorAll('.vertical-divider')
  const activeNavigationFlyoutImage = navigationFlyout.querySelector(
    '.navigation_content-item-image-wrap-inner.is-active img'
  )
  const flyoutBlur = document.querySelector('.navigation-blur')
  const allFlyoutNavigations = navigationFlyout.querySelectorAll(
    '.navigation_content-item-inner'
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

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('is-active')
    if (allFlyoutContentItems) {
      if (menuTrigger.classList.contains('is-active')) {
        flyoutBlur.style.display = 'block'
        const menuTlOpen = gsap.timeline({
          onStart: () => {
            menuTrigger.style.pointerEvents = 'none'
            navigationFlyout.style.display = 'block'
          },
          onComplete: () => {
            menuTrigger.style.pointerEvents = 'initial'
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
            ease: 'expo.out',
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
            ease: 'expo.out',
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
            ease: 'expo.out',
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
            ease: 'expo.out',
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
        menuTlOpen.fromTo(
          allFlyoutContentItems,
          {
            height: 0,
          },
          {
            height: 'auto',
            stagger: 0.1,
            duration: 1,
            ease: 'expo.inOut',
          },
          '<-0.25'
        )
        menuTlOpen.fromTo(
          allFlyoutNavigations,
          {
            y: '5rem',
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
          },
          '>'
        )
        menuTlOpen.fromTo(
          allFlyoutVerticalLines,
          {
            width: 0,
          },
          {
            width: '100%',
            duration: 1,
          },
          '<'
        )
        menuTlOpen.fromTo(
          allFlyoutContentLines,
          {
            height: 0,
          },
          {
            height: '100%',
            stagger: 0.1,
            duration: 2,
            ease: 'expo.out',
          },
          '<'
        )
        menuTlOpen.fromTo(
          activeNavigationFlyoutImage,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 2,
            ease: 'expo.out',
          },
          '<-0.4'
        )
      } else {
        let adaptedColor
        let adaptedTransparent
        const menuTlClose = gsap.timeline({
          onStart: () => {
            menuTrigger.style.pointerEvents = 'none'
          },
          onComplete: () => {
            menuTrigger.style.pointerEvents = 'initial'
            navigationFlyout.style.display = 'none'
          },
        })
        menuTlClose.to(activeNavigationFlyoutImage, {
          scale: 1.5,
          duration: 0.75,
          ease: 'expo.in',
        })
        menuTlClose.to(
          allFlyoutContentLines,
          {
            height: '0',
            stagger: -0.1,
            duration: 1,
            ease: 'expo.out',
          },
          '<'
        )
        menuTlClose.to(
          allFlyoutVerticalLines,
          {
            width: 0,
            stagger: -0.1,
            duration: 1,
          },
          '<'
        )
        menuTlClose.to(
          allFlyoutNavigations,
          {
            y: '2.5rem',
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: 'power4.out',
          },
          '<'
        )
        menuTlClose.to(
          allFlyoutContentItems,
          {
            height: 0,
            stagger: -0.1,
            delay: 0.25,
            duration: 0.75,
            ease: 'expo.inOut',
          },
          '<'
        )
        menuTlClose.to(
          flyoutBlur,
          {
            height: 0,
            duration: 1,
            ease: 'expo.inOut',
          },
          '<+0.5'
        )
        menuTlClose.to(navigationFlyout, {
          autoAlpha: 0,
          duration: 0,
        })
        menuTlClose.call(
          () => {
            const currentScrollPosition = window.scrollY
            if (!isFurtherScrolledThanHero(currentScrollPosition)) {
              adaptedColor = varWhite
              adaptedTransparent = varTransparent
            } else {
              adaptedColor = varBlack
              adaptedTransparent = varWhite
            }
            menuTlClose.to(
              allNavbarItemsColor,
              {
                color: adaptedColor,
                duration: 0.3,
                ease: 'expo.in',
              },
              '>'
            )
            menuTlClose.to(
              allNavbarItemsFill,
              {
                fill: adaptedColor,
                duration: 0.3,
                ease: 'expo.in',
              },
              '<'
            )
            menuTlClose.to(
              allNavBarButtonsUnderline,
              {
                backgroundColor: adaptedColor,
                duration: 0.3,
                ease: 'expo.in',
              },
              '<'
            )
            menuTlClose.to(
              navbarWrap,
              {
                backgroundColor: adaptedTransparent,
                duration: 0.3,
                ease: 'expo.in',
              },
              '<'
            )
          },
          null,
          '<-0.5'
        )
      }
    }
  })
}

export default animateMenu
