import CSIcon from '@/components/Icons/CSIcon/CSIcon'

type CSIconListProps = {
  items: []
  itemsClassName?: string
}

type CSItemProps = {
  name: string
  url: string
  icon: string
}

const CSIconList = ({ items, itemsClassName }: CSIconListProps) => {
  const itemsLength = items.length

  return (
    <div className={`flex flex-row items-start flex-wrap ${itemsLength >= 4 ? 'justify-between' : ''}`}>
      {items.map((item: CSItemProps, index) => (
        <div
          className={`inline-block align-middle mb-6 mr-6 hover:animate-pulse ${itemsClassName}`}
          key={index}
          style={{ marginRight: index === itemsLength - 1 && itemsLength >= 5 ? 'auto' : '' }}
        >
          <a href={item.url} className="inline text-xl" target="_blank" rel="noreferrer">
            <CSIcon iconName={item.icon} /> <span className="ml-2">{item.name}</span>
          </a>
        </div>
      ))}
    </div>
  )
}

export default CSIconList
