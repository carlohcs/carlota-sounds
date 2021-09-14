import { snakeCase } from '../commons'
import { useCallback } from 'react'

type Props = {
  className?: string
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, className }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li className={className} onClick={onClick} data-gtm-event="click" id={`tab-${snakeCase(title)}`}>
      {title}
    </li>
  )
}

export default TabTitle
