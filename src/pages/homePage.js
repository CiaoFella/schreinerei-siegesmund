import animateBgSections from '../features/animateBgSections'
import animateNavbar from '../features/animateNavbar'
import animateService from '../features/animateService'
import animateTextScroll from '../features/animateTextScroll'
import contactPopup from '../features/contactPopup'
import animateHero from '../features/homePage/animateHero'
import animateIntro from '../features/homePage/animateIntro'
import animateStrenghts from '../features/homePage/animateStrenghts'
import syncCmsList from '../features/syncCmsList'

export default function initHomePage() {
  return [
    animateNavbar(),
    animateHero.animateHero(),
    animateIntro(),
    animateTextScroll(),
    animateStrenghts(),
    animateService(),
    animateBgSections(),
    contactPopup(),
    syncCmsList(),
  ]
}
