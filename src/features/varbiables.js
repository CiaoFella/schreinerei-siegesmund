export let varBlack = '#1c1c1c'
export let varWhite = '#f8f8f8'
export let varGray = '#D6D6D6'
export let varTransparent = 'rgba(0, 0, 0, 0)'
export let isDesktop = '(min-width: 992px)'
export let isTablet = '(max-width: 991px)'
export let isLandscape = '(max-width: 768px)'
export let isMobile = '(max-width: 478px)'
export let reduceMotion = '(prefers-reduced-motion: reduce)'
export let clipPathFull = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
export let clipPathTop = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'

function isFurtherScrolledThanHero(currentScrollPosition) {
  const heroSection = document.querySelector('.section--hero')
  const currentHeroHeight = heroSection.offsetHeight
  if (currentScrollPosition > currentHeroHeight) {
    return true
  } else {
    return false
  }
}

export default isFurtherScrolledThanHero
