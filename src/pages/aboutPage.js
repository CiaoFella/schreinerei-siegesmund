import animateNavbar from '../features/shared/features/animateNavbar'
import animateTextScroll from '../features/shared/features/animateTextScroll'
import initSwiper from '../features/shared/utils/initSwiper'
import swiperItemHover from '../features/listPage/swiperItemHover'
import animateService from '../features/shared/service/animateService'
import animateBgSections from '../features/shared/features/animateBgSections'
import syncCmsList from '../features/shared/features/syncCmsList'
import contactPopup from '../features/shared/features/contactPopup'
import animateAboutHero from '../features/aboutPage/animateAboutHero'
import animateAboutInformation from '../features/aboutPage/animateAboutInformation'

export default function initAboutPage() {
  return [
    animateNavbar(),
    animateAboutHero(),
    animateAboutInformation(),
    animateTextScroll(),
    initSwiper.initTeaserSwiper(),
    swiperItemHover(),
    animateService(),
    animateBgSections(),
    syncCmsList(),
    contactPopup(),
  ]
}
