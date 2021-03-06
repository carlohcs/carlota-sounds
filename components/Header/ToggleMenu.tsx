import { dispatch, useGlobalState, ACTIONS } from '@/components/GlobalState'
import { event as gtagEvent } from '@/libs/gtag'

const ToggleMenu = () => {
  const [menuOpened] = useGlobalState('menuOpened')

  return (
    <div
      id="menu-toggle"
      onClick={() => {
        dispatch({ type: !menuOpened ? ACTIONS.MENU_OPEN : ACTIONS.MENU_CLOSE })

        gtagEvent({
          category: 'Menu',
          action: 'Clique',
          label: !menuOpened ? 'Open' : 'Close',
        })
      }}
      className={`${
        menuOpened ? 'cs-toggle-menu--open' : ''
      } p-sm opacity-60 hover:opacity-100 hover:bg-gray-800 hover:animate-pulse rounded-full cursor-pointer`}
      title={!menuOpened ? 'Open' : 'Close'}
    >
      <span className="hidden">{!menuOpened ? 'Open' : 'Close'}</span>
      <div
        className="cs-toggle-menu w-9 h-9 relative outline-none border-t-2 border-white
      before:block before:absolute before:w-full before:h-1 before:left-0 before:bg-white before:top-1/2 
      after:block after:absolute after:w-full after:h-1 after:left-0 after:bg-white after:top-full"
      />
    </div>
  )
}

export default ToggleMenu
