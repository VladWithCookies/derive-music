import * as React from 'react';
import clsx from 'clsx';

const Track = ({
  title, src, className, as,
}) => {
  const Component = as || 'div';

  return (
    <Component className={clsx('w-96', className)}>
      <p className="text-xl">
        {title}
      </p>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        src={src}
        controls="controls"
        className="w-full border border-solid border-black outline-none"
      />
    </Component>
  );
};

export default Track;
