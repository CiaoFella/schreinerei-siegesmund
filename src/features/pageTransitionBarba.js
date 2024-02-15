let $ = window.$

import barba from '@barba/core'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)

import initAboutPage from '../pages/aboutPage'
import initDetailPage from '../pages/detailPage'
import initHomePage from '../pages/homePage'
import initListPage from '../pages/listPage'
import initOverviewPage from '../pages/overviewPage'
import customCursor from './customCursor'
import animateHero from './homePage/animateHero'
import lenis from './initSmoothScroll'
import initSwiper from './initSwiper'
import { isDesktop } from './varbiables'

function pageTransitionBarba() {
  const $sectionWrap = $('.section--detail-hero')
  const $pageTransitionOuterWrap = $('.page-transition')
  const $pageTransitionInnerWrap =
    $pageTransitionOuterWrap.find('.page-preload-wrap')
  const $pageTransitionItems = $pageTransitionInnerWrap.children()
  const $pageTransitionLogo = $pageTransitionOuterWrap.find('.logo-svg')
  const $menuTrigger = $('.menu-trigger')

  const matchMedia = gsap.matchMedia()

  function resetWebflow(data) {
    let parser = new DOMParser()
    let dom = parser.parseFromString(data.next.html, 'text/html')
    let webflowPageId = $(dom).find('html').attr('data-wf-page')
    $('html').attr('data-wf-page', webflowPageId)
    window.Webflow && window.Webflow.destroy()
    window.Webflow && window.Webflow.ready()
    window.Webflow && window.Webflow.require('ix2').init()
  }

  function closeMenu() {
    if ($menuTrigger.hasClass('is-active')) {
      $menuTrigger.click()
    }
  }

  function pageTransitionInAnimation() {
    const transitionInTl = gsap.timeline({
      onStart: () => {
        $pageTransitionOuterWrap.addClass('is--active')
        lenis.stop()
      },
    })

    return (
      transitionInTl.fromTo(
        $pageTransitionItems,
        {
          y: '100%',
        },
        {
          y: '0',
          transformOrigin: 'bottom center',
          stagger: 0.025,
          ease: 'expo.inOut',
          duration: 0.75,
        }
      ),
      transitionInTl.fromTo(
        $pageTransitionLogo,
        { y: '5rem' },
        {
          y: 0,
          duration: 1,
          ease: 'expo.out',
        },
        '<+0.5'
      ),
      transitionInTl.call(
        () => {
          closeMenu()
        },
        [],
        0.75
      )
    )
  }

  function pageTransitionOutAnimation(transitionData) {
    const transitionOutTl = gsap.timeline({
      onComplete: () => {
        resetWebflow(transitionData)
        $pageTransitionOuterWrap.removeClass('is--active')
        lenis.start()
      },
    })

    return (
      transitionOutTl.from($sectionWrap, {
        y: '50vh',
        duration: 1,
        ease: 'expo.inOut',
      }),
      transitionOutTl.to(
        $pageTransitionItems,
        {
          y: '-100%',
          stagger: 0.025,
          duration: 0.75,
          ease: 'expo.inOut',
        },
        '<'
      ),
      transitionOutTl.to(
        $pageTransitionLogo,
        {
          y: '-5rem',
          duration: 0.75,
          ease: 'expo.inOut',
        },
        '<'
      ),
      transitionOutTl.from(
        transitionData.next.container,
        {
          y: '15rem',
          duration: 1,
          ease: 'expo.out',
        },
        '<+0.3'
      )
    )
  }

  function initPage() {
    const currentPage = $('[data-barba-namespace]').data('barbaNamespace')
    if (currentPage) {
      if (currentPage === 'home-page') {
        initHomePage()
      } else if (currentPage === 'list-page') {
        initListPage()
      } else if (currentPage === 'detail-page') {
        initDetailPage()
        $('.active-flip-item').removeClass('active-flip-item')
      } else if (currentPage === 'about-page') {
        initAboutPage()
      } else if (currentPage === 'overview-page') {
        initOverviewPage()
      }
    } else {
      return
    }
  }

  function killPage() {
    const currentPage = $('[data-barba-namespace]').data('barbaNamespace')
    if (currentPage) {
      if (currentPage === 'home-page') {
        initHomePage().forEach((anim) => {
          anim.forEach((trigger) => {
            trigger.kill()
          })
        })
      } else if (currentPage === 'list-page') {
        initListPage().forEach((anim) => {
          anim.forEach((trigger) => {
            trigger.kill()
          })
        })
      } else if (currentPage === 'detail-page') {
        initDetailPage().forEach((anim) => {
          anim.forEach((trigger) => {
            trigger.kill()
          })
        })
      } else if (currentPage === 'overview-page') {
        initOverviewPage().forEach((anim) => {
          anim.forEach((trigger) => {
            trigger.kill()
          })
        })
      }
    } else {
      return
    }
  }

  function makeItemActive() {
    const detailPageName = $('[data-barba-namespace=detail-page]')
      .find('.text--identifier')
      .text()
    $('.swiper-slide').each(function () {
      if ($(this).find('.text--identifier').text() === detailPageName) {
        $(this).addClass('active-flip-item')
      }
    })
  }

  async function flipImages(outgoing, incoming) {
    const outgoingImgSrc = outgoing.find('.visual').attr('src')
    const incomingImgSrc = incoming.find('.visual').attr('src')
    if (outgoingImgSrc && incomingImgSrc) {
      const state = Flip.getState(outgoing.find('[data-flip-id]'))
      incoming.find('.visual').replaceWith(outgoing.find('.visual'))
      Flip.from(state, {
        duration: 2,
        absolute: true,
        toggleClass: 'is--flipping',
        ease: 'expo.inOut',
      })
    }
  }

  barba.hooks.after(() => {
    $(window).scrollTop(0)
    initPage()
    matchMedia.add(isDesktop, () => {
      const $customCrusor = $('.cb-cursor')
      $customCrusor.remove()
      customCursor()
    })
  })
  barba.hooks.beforeLeave(() => {
    closeMenu()
    killPage()
  })

  barba.init({
    preventRunning: true,
    transitions: [
      {
        name: 'main-transition',
        from: {
          namespace: [
            'home-page',
            'about-page',
            'list-page',
            'detail-page',
            'overview-page',
          ],
        },
        to: {
          namespace: [
            'about-page',
            'home-page',
            'list-page',
            'detail-page',
            'overview-page',
          ],
        },
        async leave(data) {
          await pageTransitionInAnimation()
          $(data.current).hide()
        },
        enter(data) {
          let transitionData = data
          pageTransitionOutAnimation(transitionData)
        },
      },
      {
        name: 'home-transition',
        from: {
          namespace: [
            'about-page',
            'list-page',
            'detail-page',
            'overview-page',
          ],
        },
        to: {
          namespace: ['home-page'],
        },
        async leave(data) {
          await pageTransitionInAnimation()
          $(data.current).hide()
        },
        enter(data) {
          let transitionData = data
          pageTransitionOutAnimation(transitionData)
          setTimeout(() => {
            animateHero.mainHeroAnimation()
          }, 250)
        },
      },
      {
        name: 'list-detail-transition',
        from: { namespace: ['list-page'] },
        to: { namespace: ['detail-page'] },
        enter(data) {
          makeItemActive()
          initSwiper.initListSwiper().slideTo($('.active-flip-item').index(), 0)
          $(data.next.container).addClass('fixed')
          flipImages($('.active-flip-item'), $('.section--detail-hero'))
          return gsap.to(data.current.container, { opacity: 0, duration: 0.5 })
        },
        after(data) {
          $(data.next.container).removeClass('fixed')
          $('.active-flip-item').removeClass('active-flip-item')
          $(window).scrollTop(0)
          resetWebflow(data)
        },
      },
      {
        name: 'list-detail-transition',
        from: { namespace: ['detail-page'] },
        to: { namespace: ['list-page'] },
        beforeLeave() {
          $('html,body').animate({ scrollTop: 0 }, 0)
        },
        enter(data) {
          makeItemActive()
          initSwiper.initListSwiper()
          $(data.next.container).addClass('fixed')
          flipImages(
            $('.section--detail-hero'),
            $('.active-flip-item .visual-wrap')
          )
          return gsap.to(data.current.container, { opacity: 0, duration: 0.5 })
        },
        after(data) {
          initSwiper
            .initListSwiper()
            .slideTo($('.active-flip-item').index(), 1000)
          $(window).scrollTop(0)
          $(data.next.container).removeClass('fixed')
          $('.active-flip-item').removeClass('active-flip-item')
          resetWebflow(data)
        },
      },
      {
        once: () => {
          matchMedia.add(isDesktop, () => {
            customCursor()
          })
          initPage()
          const allTriggers = ScrollTrigger.getAll()
          allTriggers.forEach((item) => {
            item.normalizeScroll(true)
          })
        },
      },
    ],
  })
}

export default pageTransitionBarba
