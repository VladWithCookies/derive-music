import * as React from 'react'
import clsx from 'clsx'

const Cover = ({ src, className }) => (
  <img
    className={clsx('object-cover w-80 h-80', className)}
    src={src}
    alt=""
  />
)

export default Cover
