import * as React from 'react'

import Cover from '../components/Cover'
import Track from '../components/Track'

const TrackDetails = () => (
  <section className="container mx-auto flex flex-grow flex-wrap px-4 py-8">
    <Cover className="mr-4 mb-4"/>
    <div className="w-96">
      <h1 className="text-3xl">
        Title
      </h1>
      <Track />
      <p className="text-sm text-gray-500 leading-loose">
        Description
      </p>
    </div>
    <hr />
  </section>
)

export default TrackDetails
