import { useGlobalState } from '@/components/GlobalState'
import { getPropValue } from '@/components/commons'

const items = [
  // {
  //   name: 'Waves',
  // },
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

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <input
            id={`experience-menu-${item.name}`}
            className="cs-checkbox"
            type="checkbox"
            defaultChecked={getPropValue(item.name, itemsMethods).value}
            onChange={() => getPropValue(item.name, itemsMethods).set(!getPropValue(item.name, itemsMethods).value)}
          />
          <label htmlFor={`experience-menu-${item.name}`}>{item.name}</label>
        </div>
      ))}
    </>
  )
}

export default ExperienceMenu
