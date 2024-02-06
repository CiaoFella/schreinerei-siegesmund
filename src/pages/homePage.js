import animateBgSections from '../features/animateBgSections'
import animateHero from '../features/animateHero'
import animateIntro from '../features/animateIntro'
import animateNavbar from '../features/animateNavbar'
import animateService from '../features/animateService'
import animateStrenghts from '../features/animateStrenghts'
import animateTextScroll from '../features/animateTextScroll'
import contactPopup from '../features/contactPopup'
import syncCmsList from '../features/syncCmsList'

export default function initHomePage() {
  return [
    animateNavbar(),
    animateHero(),
    animateIntro(),
    animateTextScroll(),
    animateStrenghts(),
    animateService(),
    animateBgSections(),
    contactPopup(),
    syncCmsList(),
  ]
}
