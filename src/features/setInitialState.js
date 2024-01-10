import gsap from 'gsap'

import navbar from './animateNavbar'

function setInitialState() {
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

  const transparentNav = document.querySelectorAll('.is--transparent-nav')

  const setInitialColors = () => {
    const initialTl = gsap.timeline()
    transparentNav.forEach((singleNav) => {
      if (!isElementOutViewport(singleNav)) {
        navbar.transparentNavAnimation(
          initialTl,
          allNavbarItemsColor,
          allNavbarItemsFill,
          allNavBarButtonsUnderline,
          navbarWrap
        )
      } else if (isElementOutViewport(singleNav)) {
        navbar.backgroundNavAnimation(
          initialTl,
          allNavbarItemsColor,
          allNavbarItemsFill,
          allNavBarButtonsUnderline,
          navbarWrap
        )
      }
    })
  }
  setInitialColors()
}

function isElementOutViewport(el) {
  var rect = el.getBoundingClientRect()
  return (
    rect.bottom < 0 ||
    rect.right < 0 ||
    rect.left > window.innerWidth ||
    rect.top > window.innerHeight
  )
}

export default { setInitialState, isElementOutViewport }
