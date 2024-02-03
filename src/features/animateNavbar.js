let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

import { varBlack, varTransparent, varWhite } from './varbiables'
gsap.registerPlugin(ScrollTrigger)

const animateNavbar = () => {
  const $navbarWrap = $('.navbar-wrap')
  const currentNavbarHeight = $navbarWrap.offsetHeight
  const $transparentNav = $('.is--transparent-nav')
  const $transparentDarkNav = $('.is--transparent-dark-nav')
  const $backgroundNav = $('.is--background-nav')
  const $navBarMenuIconPaths = $navbarWrap.find('.menu-icon svg path')
  const $navBarLogo = $navbarWrap.find('.logo-svg')
  const $navBarMenuTrigger = $navbarWrap.find('.menu-trigger.is--secondary')
  const $allNavBarButtons = $navbarWrap.find('.button-icon')
  const $allNavBarButtonsUnderline = $navbarWrap.find(
    '.button-icon .button-underline'
  )
  const $allNavbarItemsColor = [
    $navBarLogo,
    $allNavBarButtons,
    $navBarMenuTrigger,
  ]
  const $allNavbarItemsFill = [$navBarMenuIconPaths]

  const navbarTl = gsap.timeline({
    defaults: {
      duration: 1,
    },
  })
  const transparentTl = gsap.timeline({
    defaults: {
      duration: 1,
    },
  })

  function setScrollTransparentNav() {
    transparentNavAnimation(
      transparentTl,
      $allNavbarItemsColor,
      $allNavbarItemsFill,
      $allNavBarButtonsUnderline,
      $navbarWrap
    )
  }

  function setScrollTransparentDarkNav() {
    transparentDarkNavAnimation(
      transparentTl,
      $allNavbarItemsColor,
      $allNavbarItemsFill,
      $allNavBarButtonsUnderline,
      $navbarWrap
    )
  }

  function setScrollBackgroundNav() {
    backgroundNavAnimation(
      navbarTl,
      $allNavbarItemsColor,
      $allNavbarItemsFill,
      $allNavBarButtonsUnderline,
      $navbarWrap
    )
  }

  function transparentNavAnimation(
    timeline,
    $allNavbarItemsColor,
    $allNavbarItemsFill,
    $allNavBarButtonsUnderline,
    $navbarWrap
  ) {
    timeline.to($allNavbarItemsColor, {
      color: varWhite,
    })
    timeline.to(
      $allNavbarItemsFill,

      {
        fill: varWhite,
      },
      '<'
    )
    timeline.to(
      $allNavBarButtonsUnderline,
      {
        backgroundColor: varWhite,
      },
      '<'
    )
    timeline.to(
      $navbarWrap,
      {
        backgroundColor: varTransparent,
      },
      '<'
    )
  }

  function transparentDarkNavAnimation(
    timeline,
    $allNavbarItemsColor,
    $allNavbarItemsFill,
    $allNavBarButtonsUnderline,
    $navbarWrap
  ) {
    timeline.to($allNavbarItemsColor, {
      color: varBlack,
    })
    timeline.to(
      $allNavbarItemsFill,

      {
        fill: varBlack,
      },
      '<'
    )
    timeline.to(
      $allNavBarButtonsUnderline,
      {
        backgroundColor: varBlack,
      },
      '<'
    )
    timeline.to(
      $navbarWrap,
      {
        backgroundColor: varTransparent,
      },
      '<'
    )
  }

  function backgroundNavAnimation(
    timeline,
    $allNavbarItemsColor,
    $allNavbarItemsFill,
    $allNavBarButtonsUnderline,
    $navbarWrap
  ) {
    timeline.to($allNavbarItemsColor, {
      color: varBlack,
    })
    timeline.to(
      $allNavbarItemsFill,
      {
        fill: varBlack,
      },
      '<'
    )
    timeline.to(
      $allNavBarButtonsUnderline,
      {
        backgroundColor: varBlack,
      },
      '<'
    )
    timeline.to(
      $navbarWrap,
      {
        backgroundColor: varWhite,
      },
      '<'
    )
  }

  $backgroundNav.each((index, singleNav) => {
    setScrollBackgroundNav(singleNav)
  })
  $transparentNav.each((index, singleNav) => {
    setScrollTransparentNav(singleNav)
  })
  $transparentDarkNav.each((index, singleNav) => {
    setScrollTransparentDarkNav(singleNav)
  })

  $transparentNav.each((index, singleNav) => {
    ScrollTrigger.create({
      animation: transparentTl,
      trigger: singleNav,
      start: `-${currentNavbarHeight}px top`,
      toggleActions: 'play complete play reset',
    })
  })
  $transparentDarkNav.each((index, singleNav) => {
    ScrollTrigger.create({
      animation: transparentTl,
      trigger: singleNav,
      start: `-${currentNavbarHeight}px top`,
      toggleActions: 'play complete play reset',
    })
  })
  $backgroundNav.each((index, singleNav) => {
    ScrollTrigger.create({
      animation: navbarTl,
      trigger: singleNav,
      start: `-${currentNavbarHeight}px top`,
      toggleActions: 'play complete play reset',
    })
  })

  return [transparentTl, navbarTl]
}

export default animateNavbar
