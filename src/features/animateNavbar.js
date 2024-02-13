let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

import { varBlack, varTransparent, varWhite } from './varbiables'
gsap.registerPlugin(ScrollTrigger)

const animateNavbar = () => {
  const $navbarWrap = $('.navbar-wrap')
  const currentNavbarHeight = $navbarWrap.height()
  const $allNavSections = $('[data-nav]')
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
  const $allNavbarItemsFill = $navBarMenuIconPaths

  console.log($navBarMenuIconPaths)

  let mainNavColor = varBlack
  let secondaryNavColor = varTransparent

  let navbarTl

  $allNavSections.each((index, navSection) => {
    navbarTl = gsap.timeline({})

    const navSectionData = $(navSection).data('nav')

    if (navSectionData === 'transparent') {
      mainNavColor = varWhite
      secondaryNavColor = varTransparent
    } else if (navSectionData === 'dark-transparent') {
      mainNavColor = varBlack
      secondaryNavColor = varTransparent
    } else if (navSectionData === 'background') {
      mainNavColor = varBlack
      secondaryNavColor = varWhite
    }
    ScrollTrigger.create({
      trigger: navSection,
      immediateRender: false,
      animation: navbarTl,
      start: `top ${currentNavbarHeight}px`,
      end: `bottom ${currentNavbarHeight}px`,
      toggleActions: 'restart none none reverse',
      onEnter: () => {
        console.log(navSectionData)
        $navbarWrap.data('nav', navSectionData)
        $navbarWrap[0].setAttribute('data-nav', navSectionData)
      },
    })

    navbarTl.to($allNavbarItemsColor, {
      color: mainNavColor,
    })
    navbarTl.to(
      $allNavbarItemsFill,
      {
        fill: mainNavColor,
      },
      '<'
    )
    navbarTl.to(
      $allNavBarButtonsUnderline,
      {
        backgroundColor: mainNavColor,
      },
      '<'
    )
    navbarTl.to(
      $navbarWrap,
      {
        backgroundColor: secondaryNavColor,
      },
      '<'
    )
  })

  return [navbarTl]
}

export default animateNavbar
