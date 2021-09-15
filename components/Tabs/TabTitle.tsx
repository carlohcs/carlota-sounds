import { snakeCase } from '../commons'
import { useCallback } from 'react'
import { event as gtagEvent } from '@/libs/gtag'

type Props = {
  className?: string
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, className }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index)
    gtagEvent({
      category: 'Menu Tab',
      action: 'Clique',
      label: title,
    })
  }, [setSelectedTab, index, title])

  return (
    <li
      data-gtm-category="Menu Tab"
      data-gtm-action="Clique"
      data-gtm-label={title}
      className={`${className}`}
      onClick={onClick}
      id={`tab-${snakeCase(title)}`}
    >
      {title}
    </li>
  )
}

export default TabTitle
