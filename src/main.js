import animateMenu from './features/animateMenu'
import animateNavbar from './features/animateNavbar'
import setInitialState from './features/setInitialState'
import syncCmsList from './features/syncCmsList'
import './styles/style.css'

syncCmsList()
setInitialState()
animateMenu()
animateNavbar()
