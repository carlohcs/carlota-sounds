import { useState } from 'react'
import Tabs from '../Tabs'
import Tab from '../Tabs/Tab'
import { SoundsList } from '../Media/Sounds/Sounds'
import About from '../About/About'
import sounds from '../../public/sounds/sounds.json'

// const { sounds }: Array<{ id: number; title: string; time: string; album: string }> = carlotaSounds

const Actions = () => {
  const activeTabClass = 'font-medium bg-gray-800 transition-colors !opacity-100'
  const [currentActiveTab, setCurrentActiveTab] = useState<number>(0)
  const onSelected = (index: number = 0) => {
    setCurrentActiveTab(index)
  }

  return (
    <Tabs
      className="flex flex-row items-stretch justify-between w-full"
      tabTitleClassName="p-8 transition duration-1000 ease-in-out opacity-60 hover:bg-gray-800 rounded-full hover:animate-pulse hover:opacity-100 space-x-2 h-32 md:text-lg lg:text-2xl cursor-pointer"
      onSelected={onSelected}
    >
      <Tab title="SOUNDS" tabTitleClassName={currentActiveTab === 0 ? activeTabClass : ''}>
        <SoundsList sounds={sounds.data} />
      </Tab>
      <Tab title="ABOUT" tabTitleClassName={currentActiveTab === 1 ? activeTabClass : ''}>
        <About />
      </Tab>
      <Tab title="SHARE" tabTitleClassName={currentActiveTab === 2 ? activeTabClass : ''}>
        SHARE
      </Tab>
    </Tabs>
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
