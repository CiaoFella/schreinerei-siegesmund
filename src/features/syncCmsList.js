import $ from 'jquery'

function syncCmsList() {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal
    if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal
    if (attrVal === 'true' && defaultValType === 'boolean') return true
    if (attrVal === 'false' && defaultValType === 'boolean') return false
    if (isNaN(attrVal) && defaultValType === 'string') return attrVal
    if (!isNaN(attrVal) && defaultValType === 'number') return +attrVal
    return defaultVal
  }
  // cms list sync component
  $("[tr-listsync-element='component']").each(function () {
    let componentEl = $(this),
      group = attr('default', componentEl.attr('tr-listsync-group')),
      cmsListEl = componentEl.find(`[tr-listsync-list='${group}']`),
      cmsItemEl = cmsListEl.find("[role='listitem']"),
      prevButtonEl = componentEl.find(`[tr-listsync-button-prev='${group}']`),
      nextButtonEl = componentEl.find(`[tr-listsync-button-next='${group}']`),
      onLoadSetting = attr(false, componentEl.attr('tr-listsync-onload')),
      activeIndexSetting = attr(0, componentEl.attr('tr-listsync-activeindex')),
      activeClassSetting = attr(
        'is-active',
        componentEl.attr('tr-listsync-activeclass')
      )

    function addActive(trigger) {
      cmsItemEl.removeClass(activeClassSetting)
      let itemIndex = trigger.index()
      cmsListEl.each(function () {
        $(this)
          .find("[role='listitem']")
          .eq(itemIndex)
          .addClass(activeClassSetting)
      })
    }

    if (onLoadSetting) addActive(cmsItemEl.eq(activeIndexSetting))

    cmsListEl.each(function () {
      let clickSetting = attr(true, $(this).attr('tr-listsync-click')),
        hoverInSetting = attr(false, $(this).attr('tr-listsync-hoverin')),
        hoverOutSetting = attr(false, $(this).attr('tr-listsync-hoverout'))

      if (clickSetting) {
        $(this)
          .find("[role='listitem']")
          .on('click', function () {
            addActive($(this))
          })
      }

      if (hoverInSetting) {
        $(this)
          .find("[role='listitem']")
          .on('mouseenter', function () {
            addActive($(this))
          })
      }

      if (hoverOutSetting) {
        $(this)
          .find("[role='listitem']")
          .on('mouseleave', function () {
            cmsItemEl.removeClass(activeClassSetting)
          })
      }
    })

    prevButtonEl.on('click', function () {
      cmsListEl.each(function () {
        let currentItemEl = $(this)
            .find("[role='listitem']")
            .filter('.' + activeClassSetting)
            .removeClass(activeClassSetting),
          prevItemEl = currentItemEl.prev()

        if (prevItemEl.length === 0)
          prevItemEl = $(this).find("[role='listitem']").last()
        prevItemEl.addClass(activeClassSetting)
      })
    })

    nextButtonEl.on('click', function () {
      cmsListEl.each(function () {
        let currentItemEl = $(this)
            .find("[role='listitem']")
            .filter('.' + activeClassSetting)
            .removeClass(activeClassSetting),
          nextItemEl = currentItemEl.next()

        if (nextItemEl.length === 0)
          nextItemEl = $(this).find("[role='listitem']").first()
        nextItemEl.addClass(activeClassSetting)
      })
    })
  })
}

export default syncCmsList
