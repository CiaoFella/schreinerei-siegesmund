let $ = window.$

import gsap from 'gsap'
import Flip from 'gsap/dist/Flip'

gsap.registerPlugin(Flip)

export default function initProductGrid() {
  const $productGrid = $('.product-grid-grid')
  const $allItems = $productGrid.find('.product-grid-item')
  let activeItem = $allItems[0]

  $(activeItem).addClass('is--big')

  $allItems.each((index, item) => {
    $(item).on('click', () => changeGrid(item))
  })

  function changeGrid(el) {
    if (el === activeItem) return

    const currentActiveItem = $('.is--big')

    let state = Flip.getState($allItems)
    currentActiveItem.removeClass('is--big')
    $(el).addClass('is--big')
    activeItem = el

    Flip.from(state, {
      duration: 1,
      scale: true,
      ease: 'expo.inOut',
    })
  }
}
