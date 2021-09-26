import dynamic from 'next/dynamic'
import { useState } from 'react'
import Tabs from '../Tabs'
import Tab from '../Tabs/Tab'
import sounds from '../../public/sounds/sounds.json'

const SoundsList = dynamic(() => import('../Media/Sounds/SoundsList'))
const About = dynamic(() => import('../About/About'))

const Actions = () => {
  const activeTabClass = 'font-medium transition-colors !opacity-100 bg-gradient-to-r from-gray-800'
  const [currentActiveTab, setCurrentActiveTab] = useState<number>(0)
  const onSelected = (index: number = 0) => {
    setCurrentActiveTab(index)
  }

  return (
    <>
      <div style={{ top: 0, left: 0 }} className="absolute text-base pl-md pt-xl hidden md:flex">
        MENU
      </div>
      <Tabs
        className="flex flex-row flex-start items-stretch justify-between w-full"
        tabTitleClassName="w-full px-md py-sm rounded-r transition duration-1000 ease-in-out opacity-60 hover:bg-gray-800 hover:animate-pulse hover:opacity-100 space-x-2 h-32 md:text-lg lg:text-2xl cursor-pointer text-left"
        onSelected={onSelected}
      >
        <Tab title="SOUNDS" tabTitleClassName={currentActiveTab === 0 ? activeTabClass : ''}>
          <div
            className="cs-menu-blur absolute w-full z-30"
            style={{
              height: '1px',
              bottom: 0,
              boxShadow: 'rgb(111 111 111 / 70%) 20px 0px 20px 11px',
              display: 'block',
            }}
          />
          <SoundsList sounds={sounds.data} />
        </Tab>
        <Tab title="ABOUT" tabTitleClassName={currentActiveTab === 1 ? activeTabClass : ''}>
          <About />
        </Tab>
      </Tabs>
    </>
  )
}

const Menu = () => {
  return (
    <>
      <Actions />
    </>
  )
}

export default Menu
