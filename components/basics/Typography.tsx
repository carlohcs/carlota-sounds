import React from 'react'

// https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/

type BasicElementProps = {
  text: string
}

export const H1: React.FC<BasicElementProps> = ({ text }) => {
  return <h1>{text}</h1>
}

export const H2: React.FC<BasicElementProps> = ({ text }) => {
  return <h2>{text}</h2>
}

export const H3: React.FC<BasicElementProps> = ({ text }) => {
  return <h3>{text}</h3>
}

export const H4: React.FC<BasicElementProps> = ({ text }) => {
  return <h4>{text}</h4>
}

export const H5: React.FC<BasicElementProps> = ({ text }) => {
  return <h5>{text}</h5>
}

export const H6: React.FC<BasicElementProps> = ({ text }) => {
  return <h6>{text}</h6>
}

export const P: React.FC<BasicElementProps> = ({ text }) => {
  return <p>{text}</p>
}
