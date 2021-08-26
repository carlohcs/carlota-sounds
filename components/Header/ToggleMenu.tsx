import { useEffect, useState } from 'react'

type ToggleMenuProps = {
  handleToggle: (closed: boolean) => void
}

const ToggleMenu = ({ handleToggle }: ToggleMenuProps) => {
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    handleToggle(closed)
  }, [handleToggle, closed])

  return (
    <div onClick={() => setClosed(!closed)}>
      {closed ? 'OPEN' : 'CLOSE'}
    </div>
  )
}

export default ToggleMenu
