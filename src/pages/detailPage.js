import animateNavbar from '../features/animateNavbar'
import animateTextScroll from '../features/animateTextScroll'
import animateDetailHero from '../features/detailPage/animateDetailHero'
import initProductGrid from '../features/detailPage/initProductGrid'
import syncCmsList from '../features/syncCmsList'

export default function initDetailPage() {
  return [
    animateNavbar(),
    initProductGrid(),
    animateDetailHero(),
    animateTextScroll(),
    syncCmsList(),
  ]
}
