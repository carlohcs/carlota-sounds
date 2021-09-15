import configs from '@/etc/configs'
import { event as gtagEvent } from '@/libs/gtag'

const AvailableOn = () => {
  return (
    <div className="">
      Availabe on{' '}
      {configs.listenAt.map((listenAt, index) => {
        return (
          <div key={index} className={`inline mr-1`}>
            <a
              href={listenAt.url}
              className="underline"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                gtagEvent({
                  category: 'Footer',
                  action: 'Listen at',
                  label: listenAt.name,
                })
              }}
            >
              {listenAt.name}
            </a>
            {index < configs.listenAt.length - 1 ? ', ' : ''}
          </div>
        )
      })}{' '}
      and all streaming platform.
    </div>
  )
}

export default AvailableOn
