import { motion } from 'framer-motion'
import React from 'react'
import { JSXElementConstructor } from 'react'

export interface AnimateProps {
  children: React.ReactNode
  el?: string | JSXElementConstructor<any>
  animateType: 'fade-left' | 'fade-right' | 'fade-up' | 'fade-down' | 'zoom-in' | 'zoom-out' | 'flip-up' | 'flip-down'
  animateDuration?: number
  initialValue?: number
  endValue?: number
  [rest: string]: any
}

const Animate: React.FC<AnimateProps> = (props) => {
  const {
    children,
    animateType = 'fade-left',
    animateDuration = 0.8,
    initialValue = animateType === 'zoom-in' || animateType === 'zoom-out' ? 1 : 0,
    el = 'div',
    ...rest
  } = props

  let { endValue } = props

  if (animateType === 'zoom-in') {
    endValue = 0.8
  } else if (animateType === 'zoom-out') {
    endValue = 1.5
  } else {
    endValue = 200
  }

  const CustomComponent = motion(el, { forwardMotionProps: true })
  let variant

  switch (animateType) {
    case 'fade-left':
      variant = {
        visible: {
          opacity: 1,
          x: -initialValue,
        },
        hidden: {
          opacity: 0,
          x: endValue,
        },
      }
      break
    case 'fade-right':
      variant = {
        visible: {
          opacity: 1,
          x: initialValue,
        },
        hidden: {
          opacity: 0,
          x: -endValue,
        },
      }
      break
    case 'fade-up':
      variant = {
        visible: {
          opacity: 1,
          y: -initialValue,
        },
        hidden: {
          opacity: 0,
          y: endValue,
        },
      }
      break
    case 'fade-down':
      variant = {
        visible: {
          opacity: 1,
          y: initialValue,
        },
        hidden: {
          opacity: 0,
          y: -endValue,
        },
      }
      break
    case 'zoom-in':
      variant = {
        visible: {
          opacity: 1,
          scale: initialValue,
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
      }
      break
    case 'zoom-out':
      variant = {
        visible: {
          opacity: 1,
          scale: initialValue,
        },
        hidden: {
          opacity: 0,
          scale: endValue,
        },
      }
      break
    case 'flip-up':
      variant = {
        visible: {
          opacity: 1,
          rotateX: initialValue,
        },
        hidden: {
          opacity: 0,
          rotateX: endValue,
        },
      }
      break
    case 'flip-down':
      variant = {
        visible: {
          opacity: 1,
          rotateX: initialValue,
        },
        hidden: {
          opacity: 0,
          rotateX: -endValue,
        },
      }
      break
    default: {
      variant = {
        visible: {
          opacity: 1,
          x: -initialValue,
        },
        hidden: {
          opacity: 0,
          x: endValue,
        },
      }
    }
  }

  return (
    <CustomComponent
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: animateDuration }}
      variants={variant}
      {...rest}
    >
      {children}
    </CustomComponent>
  )
}

Animate.displayName = 'Animate'
export default Animate
