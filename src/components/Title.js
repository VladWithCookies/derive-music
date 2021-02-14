import * as React from 'react';
import clsx from 'clsx';

const Title = ({ children, as, className }) => {
  const Component = as || 'p';

  return (
    <Component className={clsx('text-3xl leading-loose', className)}>
      {children}
    </Component>
  );
};

export default Title;
