import CSIcon from '@/components/Icons/CSIcon/CSIcon'
import { event as gtagEvent } from '@/libs/gtag'

type CSIconListProps = {
  items: { name: string; url: string; icon: string }[]
  itemsClassName?: string
  metricCategory?: string
}

type CSItemProps = {
  name: string
  url: string
  icon: string
}

const CSIconList = ({ items, itemsClassName, metricCategory }: CSIconListProps) => {
  const itemsLength = items.length

  return (
    <div className={`flex flex-row items-start flex-wrap ${itemsLength >= 4 ? 'justify-between' : ''}`}>
      {items.map((item: CSItemProps, index) => (
        <div
          className={`inline-block align-middle mb-6 mr-6 hover:animate-pulse ${itemsClassName}`}
          key={index}
          style={{ marginRight: index === itemsLength - 1 && itemsLength >= 5 ? 'auto' : '' }}
        >
          <a
            href={item.url}
            className="inline text-xl"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              if (metricCategory) {
                gtagEvent({
                  category: 'About',
                  action: metricCategory, // Listen at | Share at | Follow at
                  label: item.name,
                })
              }
            }}
          >
            <CSIcon iconName={item.icon} /> <span className="ml-2">{item.name}</span>
          </a>
        </div>
      ))}
    </div>
  )
}

export default CSIconList
