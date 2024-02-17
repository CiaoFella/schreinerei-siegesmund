import animateIntro from '../features/homePage/animateIntro'
import animateStrenghts from '../features/homePage/scrollGallery'
import animateBgSections from '../features/shared/features/animateBgSections'
import animateService from '../features/shared/service/animateService'
import animateTextScroll from '../features/shared/features/animateTextScroll'
import contactPopup from '../features/shared/features/contactPopup'
import syncCmsList from '../features/shared/features/syncCmsList'
import animateNavbar from '../features/shared/features/animateNavbar'
import animateHomeHero from '../features/homePage/animateHomeHero'

export default function initHomePage() {
  return [
    animateNavbar(),
    animateHomeHero.animateHero(),
    animateIntro(),
    animateTextScroll(),
    animateStrenghts(),
    animateService(),
    animateBgSections(),
    contactPopup(),
    syncCmsList(),
  ]
}
