import animateDetailHero from '../features/detailPage/animateDetailHero'
import initProductGrid from '../features/detailPage/initProductGrid'

export default function initDetailPage() {
  return [initProductGrid(), animateDetailHero()]
}
