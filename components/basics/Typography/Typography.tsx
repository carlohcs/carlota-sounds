import React from 'react'

// https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/

type BasicElementProps = {
  text: string
  className?: string
}

export const H1: React.FC<BasicElementProps> = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>
}

export const H2: React.FC<BasicElementProps> = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>
}

export const H3: React.FC<BasicElementProps> = ({ text, className }) => {
  return <h3 className={className}>{text}</h3>
}

export const H4: React.FC<BasicElementProps> = ({ text, className }) => {
  return <h4 className={className}>{text}</h4>
}

export const H5: React.FC<BasicElementProps> = ({ text, className }) => {
  return <h5 className={className}>{text}</h5>
}

export const H6: React.FC<BasicElementProps> = ({ text, className }) => {
  return <h6 className={className}>{text}</h6>
}

export const P: React.FC<BasicElementProps> = ({ text, className }) => {
  return <p className={className}>{text}</p>
}
