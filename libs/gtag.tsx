import configs from '@/etc/configs'

// FROM: https://stackoverflow.com/a/65081431
export const GA_TRACKING_ID = configs.metrics.GA

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url.pathname,
      debug_mode: !configs.isProduction,
    })
  } catch (error) {
    console.log('[GTAG] Error on pageview: ', error)
  }
}

type GTagEvent = {
  action?: string | undefined
  category: string | undefined
  label?: string | undefined
  value?: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action = 'Play', category = 'Sounds', label, value = 0 }: GTagEvent): void => {
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })

    if (!configs.isProduction) {
      console.log('Metrics. Sending:', { category }, { action }, { label }, { value })
    }
  } catch (error) {
    console.log('[GTAG] Error on event: ', error)
  }
}

// https://support.google.com/analytics/answer/1033068#Anatomy&zippy=%2Cin-this-article
// Idea:
// Category: "Videos",
// Action: "Video Load Time",
// Label: "Gone With the Wind",
// Value: downloadTime
export const sentEventByItem = (item: Element) => {
  let data = {
    action: item.getAttribute('data-gtm-action')?.toString(), // Play
    category: item.getAttribute('data-gtm-category')?.toString(), // Sounds
    label: item.getAttribute('data-gtm-label') ? item.getAttribute('data-gtm-label')?.toString() : undefined, // Passos de um solitario
  }

  event(data)
}
