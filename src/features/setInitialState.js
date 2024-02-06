let $ = window.$

export default function setInitialState() {
  const $allContactOpenLinks = $('[data-open=contact]')
  $allContactOpenLinks.each((index, item) => {
    $(item).css('cursor', 'pointer')
    $(item).attr('data-cursor-text', 'Hallo!')
  })
}
