import animateMenu from './animateMenu'
import contactPopup from './contactPopup'
import pagePreload from './homePage/pagePreload'
import setInitialState from './setInitialState'
import '../styles/style.css'
export default function initScripts() {
  pagePreload()
  setInitialState()
  contactPopup()
  animateMenu()
}
