import { useGlobalState } from '@/components/GlobalState'
import { getPropValue } from '@/components/commons'
import { event as gtagEvent } from '@/libs/gtag'

const items = [
  // {
  //   name: 'Waves',
  // },
  {
    name: 'Bubbles',
    label: 'Dandelion balls',
  },
  {
    name: 'Background',
    label: 'Random background',
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
    <div className="cs-experience-menu">
      {items.map((item, index) => {
        // https://stackoverflow.com/a/45017155
        const defaultChecked = (getPropValue(item.name, itemsMethods) as any).value

        return (
          <div key={index}>
            <input
              id={`experience-menu-${item.name}`}
              className="cs-checkbox"
              type="checkbox"
              defaultChecked={defaultChecked}
              onChange={() => {
                ;(getPropValue(item.name, itemsMethods) as any).set(!defaultChecked)

                gtagEvent({
                  category: 'Experience',
                  action: 'Clique',
                  label: item.name,
                  value: !defaultChecked ? 1 : 0,
                })
              }}
            />
            <label htmlFor={`experience-menu-${item.name}`}>{item.label}</label>
          </div>
        )
      })}
    </div>
  )
}

export default ExperienceMenu
