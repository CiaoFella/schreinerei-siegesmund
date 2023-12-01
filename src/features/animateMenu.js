import gsap from 'gsap'

function animateMenu() {
  const menuTrigger = document.querySelector('.menu-trigger')

  const navigationFlyout = document.querySelector('.navigation-flyout')
  const allFlyoutContentItems = navigationFlyout.querySelectorAll(
    '.navigation-flyout_content-item'
  )
  const allFlyoutContentLines =
    navigationFlyout.querySelectorAll('.background-line')
  const allFlyoutVerticalLines =
    navigationFlyout.querySelectorAll('.vertical-divider')
  const activeNavigationFlyoutImage = navigationFlyout.querySelector(
    '.navigation-flyout_content-item-image-wrap-inner.is-active img'
  )
  const allFlyoutNavigations = navigationFlyout.querySelectorAll(
    '.navigation-flyout_content-item-inner'
  )

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('is-active')
    if (allFlyoutContentItems) {
      if (menuTrigger.classList.contains('is-active')) {
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
          navigationFlyout,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.25,
          }
        )
        menuTlOpen.fromTo(
          allFlyoutContentItems,
          {
            height: 0,
          },
          {
            height: 'auto',
            stagger: 0.1,
            delay: 0.25,
            duration: 1,
            ease: 'expo.inOut',
          },
          0
        )
        menuTlOpen.fromTo(
          allFlyoutVerticalLines,
          {
            width: 0,
          },
          {
            width: '100%',
            stagger: 0.1,
            delay: 1,
            duration: 1,
          },
          0
        )
        menuTlOpen.fromTo(
          allFlyoutContentLines,
          {
            height: 0,
          },
          {
            height: 'auto',
            stagger: 0.1,
            delay: 1,
            duration: 2,
            ease: 'expo.out',
          },
          0
        )
        menuTlOpen.fromTo(
          allFlyoutNavigations,
          {
            y: '5rem',
            opacity: 0,
          },
          {
            delay: 1.25,
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
          },
          0
        )
        menuTlOpen.fromTo(
          activeNavigationFlyoutImage,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 3,
          },
          0
        )
      } else {
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
          activeNavigationFlyoutImage,
          {
            scale: 1.5,
            duration: 0.75,
            ease: 'expo.in',
          },
          0
        )
        menuTlClose.to(
          allFlyoutContentLines,
          {
            height: '0',
            stagger: -0.1,
            duration: 1,
            ease: 'expo.out',
          },
          0
        )
        menuTlClose.to(
          allFlyoutVerticalLines,
          {
            width: 0,
            stagger: -0.1,
            duration: 1,
          },
          0
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
          0
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
          0
        )
        menuTlClose.to(navigationFlyout, {
          autoAlpha: 0,
          duration: 0,
        })
      }
    }
  })
}

export default animateMenu
