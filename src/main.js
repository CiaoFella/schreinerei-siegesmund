import animateAboutInformation from './features/animateAboutInformation'
import animateBgSection from './features/animateBgSection'
import animateMenu from './features/animateMenu'
import animateNavbar from './features/animateNavbar'
import animateService from './features/animateService'
import animateTeaser from './features/animateTeaser'
import setInitialState from './features/setInitialState'
import syncCmsList from './features/syncCmsList'
import './styles/style.css'

syncCmsList()
setInitialState.setInitialState()
animateAboutInformation()
animateBgSection.animateDarkSection()
animateBgSection.animateLightSection()
animateMenu()
animateService()
animateNavbar.animateNavbar()
animateTeaser()
