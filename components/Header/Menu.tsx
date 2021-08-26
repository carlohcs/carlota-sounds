import { useEffect, useState } from 'react'

const Actions = () => {
  return (
    <div className="flex flex-row flex-auto items-stretch items-center justify-between">
      <div>SOUNDS</div>

      <div>ABOUT</div>

      <div>SHARE</div>

      <div>SOCIAL</div>
    </div>
  )
}

const Menu = () => {
  return (
    <div className="w-full h-full">
      <Actions />
    </div>
  )
}

export default Menu
