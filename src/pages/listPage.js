import animateListHero from '../features/animateListHero'
import initSwiper from '../features/initSwiper'
import swiperItemHover from '../features/listPage/swiperItemHover'

export default function initListPage() {
  return [initSwiper.initListSwiper(), animateListHero(), swiperItemHover()]
}
