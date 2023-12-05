export let varBlack = 'black'
export let varWhite = 'white'
export let varTransparent = 'rgba(0, 0, 0, 0)'

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
