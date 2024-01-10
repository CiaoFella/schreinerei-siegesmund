let $ = window.$

import gsap from 'gsap'

export default function pageTransition() {
  const $menuTrigger = $('.menu-trigger')
  $('.content-wrapper').addClass('first')
  let nextPageLink

  const $allPageLinks = $('a:not(.w--current)')
  $allPageLinks.each((index, item) => {
    if ($(item).attr('href').includes('/')) {
      $(item).on('click', function (e) {
        e.preventDefault()
        nextPageLink = $(this).attr('href')
        if ($menuTrigger.hasClass('is-active')) {
          $menuTrigger.click()
          setTimeout(() => {
            fireAjax()
          }, 500)
        } else {
          fireAjax()
        }
      })
    }
  })

  function fireAjax() {
    $.ajax({
      url: nextPageLink,
      success: function (response) {
        let element = $(response).find('.section-wrapper').addClass('second')
        $('.main-wrapper').append(element)
        console.log('success')
      },
      complete: function () {
        pageTransitionAnimation()
      },
    })
  }

  function pageTransitionAnimation() {
    const transitionTl = gsap.timeline({})
    const $pageTransitionOuterWrap = $('.page-transition')
    const $pageTransitionInnerWrap =
      $pageTransitionOuterWrap.find('.page-preload-wrap')
    const $pageTransitionItems = $pageTransitionInnerWrap.children()

    $('html').addClass('animating')
    $pageTransitionOuterWrap.addClass('is--active')

    transitionTl.fromTo(
      $pageTransitionItems,
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        display: 'none',
      },
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: 0.05,
        ease: 'power4.out',
        delay: 0.2,
        duration: 1,
        display: 'block',
      }
    )
    transitionTl.to($pageTransitionItems, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      stagger: 0.05,
      ease: 'power4.in',
      delay: 0.5,
      duration: 1,
      onComplete: () => {
        $pageTransitionOuterWrap.removeClass('is--active')
        updatePage()
      },
    })
  }

  function updatePage() {
    window.location = nextPageLink
  }
}

const transitionTl = gsap.timeline({})
const $pageTransitionOuterWrap = $('.page-transition')
const $pageTransitionInnerWrap =
  $pageTransitionOuterWrap.find('.page-preload-wrap')
const $pageTransitionItems = $pageTransitionInnerWrap.children()

barba.hooks.afterLeave(() => {
  let count = 0
  let triggers = ScrollTrigger.getAll()
  triggers.forEach(function (trigger) {
    count += 1
    trigger.kill()
  })
  console.log(count + ' ST killed')
})

barba.hooks.before(() => {
  document.querySelector('html').classList.add('is-transitioning')
  barba.wrapper.classList.add('is-animating')
})

barba.init({
  transitions: [
    {
      name: 'opacity-transition',
      leave() {
        $pageTransitionOuterWrap.addClass('is--active')
        transitionTl.fromTo(
          $pageTransitionItems,
          {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            display: 'none',
          },
          {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            stagger: 0.05,
            ease: 'power4.out',
            delay: 0.2,
            duration: 1,
            display: 'block',
            onStart: () => {},
          }
        )
      },
      enter(data) {
        transitionTl.to($pageTransitionItems, {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          stagger: 0.05,
          ease: 'power4.in',
          delay: 0.5,
          duration: 1,
          onComplete: () => {
            ScrollTrigger.refresh(true)
          },
        })
        resetWebflow(data)
      },
    },
  ],
})

function resetWebflow(data) {
  let parser = new DOMParser()
  let dom = parser.parseFromString(data.next.html, 'text/html')
  let webflowPageId = $(dom).find('html').attr('data-wf-page')
  $('html').attr('data-wf-page', webflowPageId)
  window.Webflow && window.Webflow.destroy()
  window.Webflow && window.Webflow.ready()
  window.Webflow && window.Webflow.require('ix2').init()
}
