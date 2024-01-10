export let varBlack = '#1c1c1c'
export let varWhite = '#f8f8f8'
export let varGray = '#D6D6D6'
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
