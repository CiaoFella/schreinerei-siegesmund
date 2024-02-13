import animateMenu from './animateMenu'
import contactPopup from './contactPopup'
import initSmoothScroll from './initSmoothScroll'
import setInitialState from './setInitialState'
import '../styles/style.css'
export default function initScripts() {
  setInitialState()
  contactPopup()
  initSmoothScroll()
  animateMenu()
}
