import React from 'react'
import SVG from '@/components/SVG/SVG'
import { styled } from 'stiches.config'
import { keyframes } from '@stitches/react'

const changeColor = () => {
  const colours = ['#B962D6', '#DC5CBA', '#DC4972']

  const colorIndex = Math.floor(Math.random() * colours.length)

  return colours[colorIndex]
}

function generateProps() {
  const properties = []

  for (let index = 0; index < 150; index++) {
    properties.push({
      bottom: (index % 2 === 0 ? 200 : 300) - Math.random() * index,
      left: (index % 2 === 0 ? 200 : 300) - Math.random() * index,
      delay: (index % 2 === 0 ? 10 : 5) * Math.random(),
      rotate: `${Math.random() * index * 100}`,
      color: changeColor(),
    })
  }

  return properties
}

const animate = keyframes({
  from: {
    opacity: 0.7,
  },
  '50%': {
    opacity: 0.3,
  },
  '100%': {
    bottom: '94%',
    left: '94%',
    opacity: 0,
  },
})

const animateRotate = keyframes({
  to: {
    transform: `rotate(${Math.random() / 2}deg)`,
  },
})

const DandelionLineIconContainer = styled('div', {
  width: '50px',
  height: '50px',
  position: 'absolute',
  left: '200px',
  bottom: '200px',
  zIndex: 1,
  transform: 'rotate(45deg)',
  animation: `${animate} 10s linear infinite forwards, ${animateRotate} 120s linear infinite forwards`,
  opacity: 0,
  'circle, line': {
    fill: 'currentColor !important',
    stroke: 'currentColor !important',
  },
})

type DandelionLineIconProps = {
  bottom?: number
  left?: number
  delay?: number
  rotate?: string
  color?: string
}
export const DandelionLineIcon = ({ bottom, left, delay, rotate, color }: DandelionLineIconProps) => {
  return (
    // <div
    // w-50 h-50 absolute z-10 left-200 bottom-200
    <DandelionLineIconContainer
      style={{
        left: `${left}px`,
        bottom: `${bottom}px`,
        animationDelay: `${delay}s`,
        transform: `rotate(${rotate}deg)`,
        color: color,
        zIndex: 1,
      }}
    >
      <SVG src="/dandelion-line.svg" />
    </DandelionLineIconContainer>
  )
}

const properties = generateProps()

export const DandelionLineIconItems = () => {
  return (
    <>
      {properties.map((currentPropertie, index) => (
        <DandelionLineIcon
          bottom={currentPropertie.bottom}
          left={currentPropertie.left}
          delay={currentPropertie.delay}
          rotate={currentPropertie.rotate}
          color={currentPropertie.color}
          key={index}
        />
      ))}
    </>
  )
}
