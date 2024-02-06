import animateAboutHero from '../features/aboutPage/animateAboutHero'
import animateAboutInformation from '../features/aboutPage/animateAboutInformation'
import animateBgSections from '../features/animateBgSections'
import animateNavbar from '../features/animateNavbar'
import animateService from '../features/animateService'
import animateTextScroll from '../features/animateTextScroll'
import contactPopup from '../features/contactPopup'
import initSwiper from '../features/initSwiper'
import swiperItemHover from '../features/listPage/swiperItemHover'
import syncCmsList from '../features/syncCmsList'

export default function initAboutPage() {
  return [
    animateAboutHero(),
    animateAboutInformation(),
    animateNavbar(),
    animateTextScroll(),
    initSwiper.initTeaserSwiper(),
    swiperItemHover(),
    animateService(),
    animateBgSections(),
    contactPopup(),
    syncCmsList(),
  ]
}
