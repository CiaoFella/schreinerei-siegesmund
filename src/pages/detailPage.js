import animateNavbar from '../features/shared/features/animateNavbar'
import initProductGrid from '../features/detailPage/initProductGrid'
import animateDetailHero from '../features/detailPage/animateDetailHero'
import animateTextScroll from '../features/shared/features/animateTextScroll'
import syncCmsList from '../features/shared/features/syncCmsList'

export default function initDetailPage() {
  return [
    animateNavbar(),
    initProductGrid(),
    animateDetailHero(),
    animateTextScroll(),
    syncCmsList(),
  ]
}
