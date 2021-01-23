import * as React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../sections/Header'
import Footer from '../sections/Footer'

const Main = ({ title, children }) => (
  <div className="flex flex-col h-screen">
    <Helmet>
      <html lang="en" />
      <title>{title} | Derive music</title>
      <meta name="author" content="Vlad V" />
      <meta name="description" content="Derive music blog" />
    </Helmet>
    <Header />
    <main className="flex flex-col flex-grow bg-gray-100">
      <h1 hidden>
        Derive music
      </h1>
      {children}
    </main>
    <Footer />
  </div>
)

export default Main
