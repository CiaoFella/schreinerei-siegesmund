import hoverEffect from 'hover-effect'

export default function initServiceHoverEffect() {
  const allServiceItemsVertical = document.querySelectorAll(
    '.service-item.is--vertical'
  )
  const allServiceItemsHorizontal = document.querySelectorAll(
    '.service-item.is--horizontal'
  )
  const allServiceItemsSquare = document.querySelectorAll(
    '.service-item.is--square'
  )
  allServiceItemsVertical.forEach(function (item) {
    const imgWrap = item.querySelector('.service-item-img-wrap')
    const img = item.querySelector('.service-img').src
    return new hoverEffect({
      parent: imgWrap,
      intensity: 0.5,
      speedIn: 0.5,
      speedOut: 0.5,
      image1: img,
      image2: img,
      easing: 'power1.inOut',
      imagesRatio: 1500 / 1000,
      displacementImage:
        'https://uploads-ssl.webflow.com/6564c4456080e0bdcc61f7b1/657b2da455169d07e5a15a80_jean-wimmerlin-dcasj22jmCk-unsplash-1.webp',
    })
  })
  allServiceItemsHorizontal.forEach(function (item) {
    const imgWrap = item.querySelector('.service-item-img-wrap')
    const img = item.querySelector('.service-img').src
    return new hoverEffect({
      parent: imgWrap,
      intensity: 0.5,
      speedIn: 0.5,
      speedOut: 0.5,
      image1: img,
      image2: img,
      easing: 'power1.inOut',
      imagesRatio: 1000 / 1500,
      displacementImage:
        'https://uploads-ssl.webflow.com/6564c4456080e0bdcc61f7b1/657b2da455169d07e5a15a80_jean-wimmerlin-dcasj22jmCk-unsplash-1.webp',
    })
  })
  allServiceItemsSquare.forEach(function (item) {
    const imgWrap = item.querySelector('.service-item-img-wrap')
    const img = item.querySelector('.service-img').src

    return new hoverEffect({
      parent: imgWrap,
      intensity: 0.5,
      speedIn: 0.5,
      speedOut: 0.5,
      image1: img,
      image2: img,
      easing: 'power1.inOut',
      imagesRatio: 1000 / 1000,
      displacementImage:
        'https://uploads-ssl.webflow.com/6564c4456080e0bdcc61f7b1/657b2da455169d07e5a15a80_jean-wimmerlin-dcasj22jmCk-unsplash-1.webp',
    })
  })
}
