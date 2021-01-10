import * as React from 'react'

import Cover from '../components/Cover'
import Track from '../components/Track'
import Title from '../components/Title'
import Description from '../components/Description'

const PlaylistDetails = () => (
  <section className="container mx-auto flex flex-grow flex-wrap px-4 py-8">
    <div className="mb-8 mr-4">
      <Cover />
      <Title as="h1">
        Title
      </Title>
      <Description>
        Description
      </Description>
    </div>
    <ol className="list-decimal ml-4 w-96">
      <Track
        as="li"
        title="Title"
        className="mb-4"
      />
      <Track
        as="li"
        title="Title"
        className="mb-4"
      />
    </ol>
  </section>
)

export default PlaylistDetails
