import * as React from 'react'
import clsx from 'clsx'

const Track = ({ title, className, as }) => {
  const Component = as || 'div'

  return (
    <Component className={clsx('w-96', className)}>
      <p className="text-xl">
        {title}
      </p>
      <audio
        src=""
        controls="controls"
        className="w-full border border-solid border-black"
      />
    </Component>
  )
}

export default Track
