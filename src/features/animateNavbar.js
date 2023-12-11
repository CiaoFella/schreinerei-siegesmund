import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

import { varBlack, varTransparent, varWhite } from './varbiables'
gsap.registerPlugin(ScrollTrigger)

const transparentNav = document.querySelectorAll('.is--transparent-nav')
const backgroundNav = document.querySelectorAll('.is--background-nav')
const navbarWrap = document.querySelector('.navbar-wrap')
const currentNavbarHeight = navbarWrap.offsetHeight
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

const animateNavbar = () => {
  backgroundNav.forEach((singleNav) => {
    setScrollBackgroundNav(singleNav)
  })
  transparentNav.forEach((singleNav) => {
    setScrollTransparentNav(singleNav)
  })
}

function setScrollTransparentNav(singleNav) {
  const transparentTl = gsap.timeline({
    scrollTrigger: {
      trigger: singleNav,
      start: `-${currentNavbarHeight}px top`,
      end: `-${currentNavbarHeight}px top`,
      toggleActions: 'reset play reset reset',
    },
    paused: true,
  })
  transparentNavAnimation(
    transparentTl,
    allNavbarItemsColor,
    allNavbarItemsFill,
    allNavBarButtonsUnderline,
    navbarWrap
  )
}

function setScrollBackgroundNav(singleNav) {
  const navbarTl = gsap.timeline({
    scrollTrigger: {
      trigger: singleNav,
      start: `-${currentNavbarHeight}px top`,
      end: `-${currentNavbarHeight}px top`,
      toggleActions: 'reset play reset reset',
    },
    paused: true,
  })
  backgroundNavAnimation(
    navbarTl,
    allNavbarItemsColor,
    allNavbarItemsFill,
    allNavBarButtonsUnderline,
    navbarWrap
  )
}

function transparentNavAnimation(
  timeline,
  allNavbarItemsColor,
  allNavbarItemsFill,
  allNavBarButtonsUnderline,
  navbarWrap
) {
  timeline.to(allNavbarItemsColor, {
    color: varWhite,
  })
  timeline.to(
    allNavbarItemsFill,

    {
      fill: varWhite,
    },
    '<'
  )
  timeline.to(
    allNavBarButtonsUnderline,
    {
      backgroundColor: varWhite,
    },
    '<'
  )
  timeline.to(
    navbarWrap,
    {
      backgroundColor: varTransparent,
    },
    '<'
  )
}

function backgroundNavAnimation(
  timeline,
  allNavbarItemsColor,
  allNavbarItemsFill,
  allNavBarButtonsUnderline,
  navbarWrap
) {
  timeline.to(allNavbarItemsColor, {
    color: varBlack,
  })
  timeline.to(
    allNavbarItemsFill,
    {
      fill: varBlack,
    },
    '<'
  )
  timeline.to(
    allNavBarButtonsUnderline,
    {
      backgroundColor: varBlack,
    },
    '<'
  )
  timeline.to(
    navbarWrap,
    {
      backgroundColor: varWhite,
    },
    '<'
  )
}

export default {
  animateNavbar,
  setScrollBackgroundNav,
  setScrollTransparentNav,
  transparentNavAnimation,
  backgroundNavAnimation,
}
