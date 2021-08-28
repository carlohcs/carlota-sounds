import React from 'react'

type Props = {
  title: string
  className?: string
  tabTitleClassName?: string
}

const Tab: React.FC<Props> = ({ children, className = '' }) => {
  return <div className={`w-full h-full ${className}`}>{children}</div>
}

export default Tab
