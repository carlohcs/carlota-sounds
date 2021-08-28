import React, { useCallback } from 'react'

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
    <li className={className} onClick={onClick}>
      {title}
    </li>
  )
}

export default TabTitle
