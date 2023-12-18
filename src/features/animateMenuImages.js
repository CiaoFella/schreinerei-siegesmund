import hoverEffect from 'hover-effect'

const animateMenuImages = () => {
  const navigationFlyoutWrap = document.querySelector('.navigation-flyout')
  const activeNavigationFlyoutImage = navigationFlyoutWrap.querySelector(
    '.navigation_content-item-image-wrap-inner.is-active img'
  ).src
  const activeNavigationFlyoutImage2 = document.querySelector(
    '.navigation_content-item-image-wrap-inner img'
  ).src

  new hoverEffect({
    parent: navigationFlyoutWrap,
    intensity: 0.3,
    image1: activeNavigationFlyoutImage,
    image2: activeNavigationFlyoutImage2,
    displacementImage:
      'https://uploads-ssl.webflow.com/6564c4456080e0bdcc61f7b1/65708ab9d60d4ae70c2cf469_displacement-4.png',
  })
}

export default animateMenuImages
