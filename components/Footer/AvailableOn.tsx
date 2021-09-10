import configs from '@/etc/configs'

const AvailableOn = () => {
  return (
    <div className="">
      Availabe on{' '}
      {configs.listenAt.map((listenAt, index) => {
        return (
          <div
            key={index}
            className={`inline mr-1`}
          >
            <a href={listenAt.url} className="underline" target="_blank" rel="noreferrer">
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
