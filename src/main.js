import animateAboutInformation from './features/animateAboutInformation'
import animateBgSection from './features/animateBgSection'
import animateFittingImage from './features/animateFittingImage'
// import animateHero from './features/animateHero'
import animateIntro from './features/animateIntro'
import animateMenu from './features/animateMenu'
import animateNavbar from './features/animateNavbar'
import animateService from './features/animateService'
import animateStrenghts from './features/animateStrenghts'
import animateTextScroll from './features/animateTextScroll'
import pagePreload from './features/pagePreload'
import pageTransition from './features/pageTransition'
// import setInitialState from './features/setInitialState'
import syncCmsList from './features/syncCmsList'
import './styles/style.css'

syncCmsList()
// setInitialState.setInitialState()
animateAboutInformation()
animateFittingImage()
// animateHero()
pagePreload()
pageTransition()
animateIntro()
animateBgSection.animateDarkSection()
animateBgSection.animateLightSection()
animateMenu()
animateService()
animateNavbar.animateNavbar()
animateStrenghts()
animateTextScroll()
