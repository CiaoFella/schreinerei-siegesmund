function setInitialState() {
  const navbarWrap = document.querySelector('.navbar-wrap')

  const calculateHeroHeight = () => {
    const heroSection = document.querySelector('.section--hero')
    const heroWrap = document.querySelector('.hero-wrap')
    const currentNavbarHeight = navbarWrap.offsetHeight
    const currentHeroHeight = heroSection.offsetHeight
    const newHeroHeight = currentNavbarHeight + currentHeroHeight

    heroWrap.style.height = `${newHeroHeight}px`
    heroSection.style.transform = `translateY(-${currentNavbarHeight}px)`
  }

  const setInitialColors = () => {
    const navBarMenuIconPaths = navbarWrap.querySelectorAll(
      '.menu-icon svg path'
    )
    const navBarLogo = navbarWrap.querySelector('.logo-svg')
    const navBarMenuTrigger = navbarWrap.querySelectorAll(
      '.menu-trigger.is--secondary'
    )
    const allNavBarButtons = navbarWrap.querySelectorAll('.button-icon')
    const allNavBarButtonsUnderline = navbarWrap.querySelectorAll(
      '.button-icon .button-underline'
    )
    const allNavbarItemsColor = [
      navBarLogo,
      allNavBarButtons,
      navBarMenuTrigger,
    ]
    const allNavbarItemsFill = [navBarMenuIconPaths]
    const varWhite = 'white'
    const varTransparent = 'rgba(0, 0, 0, 0)'

    allNavbarItemsColor.forEach((item) => {
      if (item.length) {
        item.forEach((subItem) => {
          subItem.style.color = varWhite
        })
      } else {
        item.style.color = varWhite
      }
    })
    allNavBarButtonsUnderline.forEach((item) => {
      item.style.backgroundColor = varWhite
    })
    navbarWrap.style.backgroundColor = varTransparent
    allNavbarItemsFill.forEach((item) => {
      if (item.length) {
        item.forEach((subItem) => {
          subItem.style.fill = varWhite
        })
      } else {
        item.style.fill = varWhite
      }
    })
  }

  calculateHeroHeight()
  setInitialColors()
}

export default setInitialState
