import * as React from 'react'

import Header from '../sections/Header'
import Footer from '../sections/Footer'

const Main = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <main className="flex flex-col flex-grow bg-gray-100">
      {children}
    </main>
    <Footer />
  </div>
)

export default Main
