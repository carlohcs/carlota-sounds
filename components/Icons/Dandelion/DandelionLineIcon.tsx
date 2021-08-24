import React from 'react'
import SVG from '@/components/SVG/SVG'
// import style from '@/components/Icons/Dandelion/Dandelion.module.css'
import { styled } from 'stiches.config'
import { keyframes } from '@stitches/react'

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
  }
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

export const DandelionLineIcon = ({
  bottom = 200,
  left = 200,
  delay = 100,
  rotate = '45deg',
  color = 'rgba(255, 255, 255, .5)',
}) => {
  return (
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

export const DandelionLineIconItems = () => {
  const changeColor = () => {
    const colours = ['#B962D6', '#DC5CBA', '#DC4972']

    const colorIndex = Math.floor(Math.random() * colours.length)

    return colours[colorIndex]
  }

  return (
    <>
      {new Array(150).fill('').map((value, index) => (
        <DandelionLineIcon
          bottom={(index % 2 === 0 ? 200 : 300) - Math.random() * index}
          left={(index % 2 === 0 ? 200 : 300) - Math.random() * index}
          delay={(index % 2 === 0 ? 10 : 5) * Math.random()}
          rotate={`${Math.random() * index * 100}`}
          color={changeColor()}
          key={index}
        />
      ))}
    </>
  )
}
