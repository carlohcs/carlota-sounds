import configs from '@/etc/configs'

const AvailableOn = () => {
  return (
    <div>
      Availabe on{' '}
      {configs.listenAt.map((listenAt, index) => {
        return (
          <>
            <a href={listenAt.url} className="underline" key={index} target="_blank" rel="noreferrer">
              {listenAt.name}
            </a>
            {index < configs.listenAt.length - 1 ? ', ' : ''}
          </>
        )
      })}{' '}
      and all streaming platform.
    </div>
  )
}

export default AvailableOn
