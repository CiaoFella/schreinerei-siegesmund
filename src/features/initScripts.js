import animateMenu from './animateMenu'
import contactPopup from './contactPopup'
// import pageLoad from './pageLoad'
// import pagePreload from './pagePreload'
// import pageTransition from './pageTransition'
import initSmoothScroll from './initSmoothScroll'
import setInitialState from './setInitialState'
import '../styles/style.css'

export default function initScripts() {
  setInitialState()
  contactPopup()
  initSmoothScroll()
  // pagePreload()
  animateMenu()
}
