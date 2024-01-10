// let $ = window.$

import SwupJsPlugin from '@swup/js-plugin'
import SwupScriptsPlugin from '@swup/scripts-plugin'
import gsap from 'gsap'
import Swup from 'swup'

export default function pageTransition() {
  new Swup({
    plugins: [
      new SwupScriptsPlugin({
        optin: true,
      }),
      new SwupJsPlugin({
        animations: [
          {
            from: '(.*)',
            to: '(.*)',
            out: async () => {
              console.log('out')
              await gsap.to('#swup', { opacity: 0, duration: 0.25 })
            },
            in: async () => {
              console.log('in')
              await gsap.fromTo(
                '#swup',
                { opacity: 0 },
                { opacity: 1, duration: 0.25 }
              )
            },
          },
        ],
      }),
    ],
  })
}
