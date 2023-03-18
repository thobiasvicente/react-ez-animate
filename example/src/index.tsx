import React from 'react'
import ReactDOM from 'react-dom/client'
import { Animate } from 'my-react-typescript-package'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Easy Animations</h2>
      <Animate animateType='fade-left'>
        <div>Fade-left</div>
      </Animate>
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      <Animate animateType='fade-right'>
        <div>Fade-right</div>
      </Animate>
    </div>
  </React.StrictMode>,
)
