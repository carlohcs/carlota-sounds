import React, { ReactElement, useState } from 'react'
import TabTitle from './TabTitle'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

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
      <div className="w-full h-full pt-sm">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={selectedTab}
            // addEndListener={(node: HTMLElement, done: any) => {
            //   node.addEventListener('transitionend', done, false)
            // }}
            classNames="tab-transition"
          >
            <div className="w-full h-full">{children[selectedTab]}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default Tabs
