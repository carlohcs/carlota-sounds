import { useState } from 'react'
import Tabs from '../Tabs'
import Tab from '../Tabs/Tab'
import { SoundsList } from '../Media/Sounds/Sounds'
import About from '../About/About'

const sounds: Array<any> = [
  { id: 1, title: 'Restos do que não aconteceu', time: '02:00', album: 'Single' },
  { id: 2, title: 'Um Fim Ensurdecedor', time: '02:00', album: 'Single' },
  { id: 3, title: 'Epifania', time: '02:00', album: 'Epifania' },
  { id: 4, title: 'Esperança', time: '02:00', album: 'Esperança' },
]

const Actions = () => {
  const activeTabClass = 'font-medium opacity-100 bg-gray-800'
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
        <SoundsList sounds={sounds} />
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
