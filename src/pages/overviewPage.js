import animateOverviewHero from '../features/overviewPage/animateOverviewHero'
import animateNavbar from '../features/shared/features/animateNavbar'
import animateTextScroll from '../features/shared/features/animateTextScroll'
import syncCmsList from '../features/shared/features/syncCmsList'

export default function initOverviewPage() {
  return [
    animateNavbar(),
    animateOverviewHero(),
    animateTextScroll(),
    syncCmsList(),
  ]
}
