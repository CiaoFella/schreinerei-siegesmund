import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

import { varBlack, varTransparent, varWhite } from './varbiables'
gsap.registerPlugin(ScrollTrigger)

const animateNavbar = () => {
  const heroSection = document.querySelector('.section--hero')
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

  const navbarTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: '92.5% top',
      end: 'bottom top',
      scrub: 1,
      pinType: 'fixed',
    },
  })
  navbarTl.fromTo(
    allNavbarItemsColor,
    {
      color: varWhite,
    },
    {
      color: varBlack,
      duration: 2,
    }
  )
  navbarTl.fromTo(
    allNavbarItemsFill,
    {
      fill: varWhite,
    },
    {
      fill: varBlack,
      duration: 2,
    },
    '<'
  )
  navbarTl.fromTo(
    allNavBarButtonsUnderline,
    {
      backgroundColor: varWhite,
    },
    {
      backgroundColor: varBlack,
      duration: 2,
    },
    '<'
  )
  navbarTl.fromTo(
    navbarWrap,
    {
      backgroundColor: varTransparent,
    },
    {
      backgroundColor: varWhite,
      duration: 2,
    },
    '<'
  )
}

export default animateNavbar
