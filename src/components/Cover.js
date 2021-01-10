import * as React from 'react'
import clsx from 'clsx'

const Cover = ({ className }) => (
  <img
    className={clsx('object-cover w-80 h-80', className)}
    src="https://picsum.photos/800/600"
    alt=""
  />
)

export default Cover
