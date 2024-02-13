import animateNavbar from '../features/animateNavbar'
import initSwiper from '../features/initSwiper'
import animateListHero from '../features/listPage/animateListHero'
import swiperItemHover from '../features/listPage/swiperItemHover'

export default function initListPage() {
  return [
    animateNavbar(),
    initSwiper.initListSwiper(),
    animateListHero(),
    swiperItemHover(),
  ]
}
