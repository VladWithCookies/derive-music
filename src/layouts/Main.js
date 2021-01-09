import React from 'react';

const Main = ({ title, children }) => (
  <main className="h-screen">
    <title>
      {title}
    </title>
    {children}
  </main>
);

export default Main;
