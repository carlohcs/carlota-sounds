import React from 'react'

type Props = {
  title: string
  className?: string
  tabTitleClassName?: string
}

const Tab: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`w-full h-full ${className}`} style={{ overflowY: 'auto', maxHeight: 'calc(100% - 50px - 20px)' }}>
      {children}
    </div>
  )
}

export default Tab