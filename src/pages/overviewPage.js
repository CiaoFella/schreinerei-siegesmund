import animateNavbar from '../features/animateNavbar'
import animateTextScroll from '../features/animateTextScroll'
import animateOverviewHero from '../features/overviewPage/animateOverviewHero'
import syncCmsList from '../features/syncCmsList'

export default function initOverviewPage() {
  return [
    animateNavbar(),
    animateOverviewHero(),
    animateTextScroll(),
    syncCmsList(),
  ]
}
