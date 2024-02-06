import animateTextScroll from '../features/animateTextScroll'
import syncCmsList from '../features/syncCmsList'

export default function initOverviewPage() {
  return [animateTextScroll(), syncCmsList()]
}
