import * as React from 'react';

const Error = ({ title, description, children }) => (
  <div className="flex flex-col items-center">
    <h1 className="text-2xl leading-loose	">
      {title}
    </h1>
    {description && (
      <p className="text-md leading-loose	">
        {description}
      </p>
    )}
    {children}
  </div>
);

export default Error;
