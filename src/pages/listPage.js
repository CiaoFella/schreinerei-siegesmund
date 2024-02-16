import animateNavbar from '../features/shared/features/animateNavbar'
import initSwiper from '../features/shared/utils/initSwiper'
import animateListHero from '../features/listPage/animateListHero'
import swiperItemHover from '../features/listPage/swiperItemHover'
import syncCmsList from '../features/shared/features/syncCmsList'

export default function initListPage() {
  return [
    animateNavbar(),
    initSwiper.initListSwiper(),
    animateListHero(),
    swiperItemHover(),
    syncCmsList(),
  ]
}
