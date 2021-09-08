import CSIcon from '@/components/Icons/CSIcon/CSIcon'

type CSIconListProps = {
  items: []
}

type CSItemProps = {
  name: string
  url: string
  icon: string
}

const CSIconList = ({ items }: CSIconListProps) => {
  return (
    <div className="flex flex-row items-start flex-wrap justify-between">
      {items.map((item: CSItemProps, index) => (
        <div
          className="inline-block align-middle mb-6 mr-6 hover:animate-pulse"
          key={index}
          style={{ marginRight: index === items.length - 1 ? 'auto' : '' }}
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
