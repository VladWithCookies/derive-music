import * as React from 'react'

const Avatar = ({ image }) => (
  <img
    src={image}
    alt="Guy with a cup of coffee"
    className="object-cover w-40 h-40"
  />
)

export default Avatar
