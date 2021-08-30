import React, { ReactElement, useState } from 'react'
import TabTitle from './TabTitle'

type Props = {
  className?: string
  tabTitleClassName?: string
  children: ReactElement[]
  onSelected?: (index: number) => void
}

const Tabs: React.FC<Props> = ({ children, className, tabTitleClassName, onSelected }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleSelected = (index: number) => {
    setSelectedTab(index)

    if (onSelected) {
      onSelected(index)
    }
  }

  return (
    <div className="w-full h-full">
      <ul className={`${className} px-md`}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={handleSelected}
            className={`${tabTitleClassName} ${item.props.tabTitleClassName}`}
          />
        ))}
      </ul>
      <div className="pt-sm h-full">{children[selectedTab]}</div>
    </div>
  )
}

export default Tabs
