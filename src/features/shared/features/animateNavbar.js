let $ = window.$

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animateNavbar = () => {
  const $navbarWrap = $('.navbar-wrap')
  const currentNavbarHeight = $navbarWrap.height()
  const $allNavSections = $('[data-nav]')

  let navbarTl = gsap.timeline({})

  $allNavSections.each((index, navSection) => {
    const navSectionData = $(navSection).data('nav')

    ScrollTrigger.create({
      trigger: navSection,
      immediateRender: false,
      start: `top ${currentNavbarHeight}px`,
      end: `bottom ${currentNavbarHeight}px`,
      onEnter: () => {
        $navbarWrap.addClass(`${navSectionData}`)
      },
      onLeave: () => {
        $navbarWrap.removeClass(`${navSectionData}`)
      },
      onEnterBack: () => {
        $navbarWrap.addClass(`${navSectionData}`)
      },
      onLeaveBack: () => {
        $navbarWrap.removeClass(`${navSectionData}`)
      },
    })
  })

  return [navbarTl]
}

export default animateNavbar
