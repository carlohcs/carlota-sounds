import { useGlobalState } from '@/components/GlobalState'

const items = [
  {
    name: 'Waves',
  },
  {
    name: 'Bubbles',
  },
  {
    name: 'Background',
  },
]

const ExperienceMenu = () => {
  const [waves, setWaves] = useGlobalState('waves')
  const [bubbles, setBubbles] = useGlobalState('bubbles')
  const [background, setBackground] = useGlobalState('background')
  const itemsMethods = {
    waves: {
      set: setWaves,
      value: waves,
    },
    bubbles: {
      set: setBubbles,
      value: bubbles,
    },
    background: {
      set: setBackground,
      value: background,
    },
  }

  const getValue = (key: string) => {
    const definedKey = key.toLocaleLowerCase() as keyof typeof itemsMethods

    return itemsMethods[definedKey]
  }

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <input
            id={`experience-menu-${item.name}`}
            className="cs-checkbox"
            type="checkbox"
            defaultChecked={getValue(item.name).value}
            onChange={() => getValue(item.name).set(!getValue(item.name).value)}
          />
          <label htmlFor={`experience-menu-${item.name}`}>{item.name}</label>
        </div>
      ))}
    </>
  )
}

export default ExperienceMenu
