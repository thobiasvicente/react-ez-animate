import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Animate } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <Animate animateType='fade-up'>
        <div>fade-up</div>
      </Animate>,
    )
  })
})
