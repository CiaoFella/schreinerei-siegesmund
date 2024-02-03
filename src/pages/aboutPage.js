import animateAboutInformation from '../features/aboutPage/animateAboutInformation'
import animateBgSections from '../features/animateBgSections'
import animateNavbar from '../features/animateNavbar'
import animateService from '../features/animateService'
import animateTextScroll from '../features/animateTextScroll'
import contactPopup from '../features/contactPopup'
import initSwiper from '../features/initSwiper'
import swiperItemHover from '../features/swiperItemHover'

export default function initAboutPage() {
  return [
    animateAboutInformation(),
    animateNavbar(),
    animateTextScroll(),
    initSwiper.initTeaserSwiper(),
    swiperItemHover(),
    animateService(),
    animateBgSections(),
    contactPopup(),
  ]
}
