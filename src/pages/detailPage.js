import animateDetailHero from '../features/detailPage/animateDetailHero'
import initProductGrid from '../features/detailPage/initProductGrid'
import syncCmsList from '../features/syncCmsList'

export default function initDetailPage() {
  return [initProductGrid(), animateDetailHero(), syncCmsList()]
}
