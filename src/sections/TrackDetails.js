import * as React from 'react'

import Cover from '../components/Cover'
import Track from '../components/Track'
import Description from '../components/Description'

const TrackDetails = () => (
  <section className="container mx-auto flex flex-grow flex-wrap px-4 py-8">
    <Cover className="mr-4"/>
    <div>
      <Track title="Title" />
      <Description>
        Description
      </Description>
    </div>
  </section>
)

export default TrackDetails
