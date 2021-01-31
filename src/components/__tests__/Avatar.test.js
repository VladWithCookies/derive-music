import React from 'react'
import { render } from '@testing-library/react'

import Avatar from '../Avatar'

describe('Avatar', () => {
  it('matches snapshot', () => {
    const props = { image: 'image' };
    const { container } = render(<Avatar {...props} />)

    expect(container).toMatchSnapshot()
  })
})
