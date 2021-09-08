import Style from '@/styles/CSFont.module.css'

type CSIconProps = {
  iconName: string
}

const CSIcon = ({ iconName }: CSIconProps) => {
  return <span className={`${Style['cs-font']} ${Style[`cs-font-${iconName}`]}`} />
}

export default CSIcon
