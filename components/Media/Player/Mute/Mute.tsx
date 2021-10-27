import { Control } from '..'

type MuteProps = {
  className?: string
}

const Mute = ({ className }: MuteProps) => {
  return <Control className={`${className}`} elementName="mute" />
}

export default Mute
