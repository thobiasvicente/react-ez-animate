import React from 'react'
import ReactDOM from 'react-dom/client'
import { Animate } from 'react-ez-animate'
import { Prism } from '@mantine/prism';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
interface ICard {
  title: string
  animateType: 'fade-left' | 'fade-right' | 'fade-up' | 'fade-down' | 'zoom-in' | 'zoom-out' | 'flip-up' | 'flip-down'
}
type ICards = Array<ICard>
const cards: ICards = [
  {
    title: 'Fade-up',
    animateType: 'fade-up',
  },
  {
    title: 'Fade-down',
    animateType: 'fade-down',
  },
  {
    title: 'Fade-left',
    animateType: 'fade-left',
  },
  {
    title: 'Fade-right',
    animateType: 'fade-right',
  },
  {
    title: 'Zoom-in',
    animateType: 'zoom-in',
  },
  {
    title: 'Zoom-out',
    animateType: 'zoom-out',
  },
  {
    title: 'Flip-up',
    animateType: 'flip-up',
  },
  {
    title: 'Flip-down',
    animateType: 'flip-down',
  },
]
root.render(
  <React.StrictMode>
    <div className='bg-gray-300'>
      <h1 className='text-white text-center py-10 bg-gray-900 text-3xl '>
        React Ez Animate
      </h1>
      <div className='flex flex-col items-center gap-y-[20vh] py-[20vh]'>
        {cards.map((card, index) => (
          <Animate key={index} animateType={card.animateType} className="w-full max-w-xl">
            <div className='text-2xl bg-white shadow-xl py-10 px-20 rounded-lg w-full'>
              <Prism language="tsx">{`
              <Animate animateType="${card.animateType}">
  ${card.title}
</Animate>`}
              </Prism>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  </React.StrictMode>
)