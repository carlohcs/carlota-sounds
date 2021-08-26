import { useState } from 'react'

type ToggleMenuProps = {
  handleToggle: (closed: boolean) => void
}

const ToggleMenu = ({ handleToggle }: ToggleMenuProps) => {
  const [closed, setClosed] = useState(true)

  return (
    <div
      onClick={() => {
        setClosed(!closed)
        handleToggle(!closed)
      }}
    >
      {closed ? 'OPEN' : 'CLOSE'}
    </div>
  )
}

export default ToggleMenu
