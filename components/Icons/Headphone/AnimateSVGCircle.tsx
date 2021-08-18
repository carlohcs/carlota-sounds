// import React from 'react'
// // https://react-typescript-cheatsheet.netlify.app/
// class AnimateSVGCircle extends React.Component<{ circleParentElement: HTMLDivElement | null }> {
//   elParent: HTMLDivElement | null
//   el: SVGCircleElement | null

//   constructor(props: any) {
//     super(props)
//     this.elParent = props.circleParentElement
//     this.el = null
//     console.log('elParent: ', this.elParent)
//   }
//   componentDidMount() {
//     this.elParent = this.props.circleParentElement
//     this.animate()
//   }

//   componentDidUpdate(prevProps: any, prevState: any) {
//     this.elParent = this.props.circleParentElement
//     this.animate()
    
//     /*if (prevProps.circleParentElement !== this.props.circleParentElement) {
//       console.log('receiving: ', this.props.circleParentElement)
//       this.elParent = this.props.circleParentElement

//       console.log('receiving: ', this.props.circleParentElement)

//       if (this.elParent) {
//         console.log('animating: ', this.props.circleParentElement)
//         try {
//           this.animate()
//         } catch (error) {
//           console.log('Error on animate: ', error)
//         }
//       }
//     }*/
//   }

//   componentWillUnmount() {
//     // this.$el.somePlugin('destroy')
//   }

//   animate = () => {
//     const circle = this.elParent?.querySelector('.headphone__circle-spinner') as SVGCircleElement

//     let countdown = 25
//     function startTimer(circleElement: any, circumference: number) {
//       const interval = setInterval(() => {
//         countdown = countdown - 1

//         if (countdown === 0) {
//           clearInterval(interval)
//         }
//       }, 1000)

//       circleElement.setAttribute('stroke-dasharray', circumference)
//       circleElement.setAttribute('stroke-dashoffset', circumference)
//     }

//     console.log({ circle })
//     if (circle) {
//       console.log('starting...')
//       const radius = Number(circle.getAttribute('r'))
//       const circumference = 2 * radius * Math.PI

//       // circle.style.transition = `all ${countdown}s linear`

//       console.log('currentCircle: ', circle)

//       setTimeout(() => startTimer(circle, circumference), 0)
//     }
//   }

//   render() {
//     return <></>
//   }
// }

// export default AnimateSVGCircle
