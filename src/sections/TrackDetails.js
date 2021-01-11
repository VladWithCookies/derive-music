import * as React from 'react'

import Cover from '../components/Cover'
import Track from '../components/Track'
import Description from '../components/Description'

const TrackDetails = ({ title, audio, cover, description }) => (
  <section className="container mx-auto flex flex-grow flex-wrap px-4 py-8">
    <Cover
      src={cover.resolutions.src}
      className="mr-4"
    />
    <div>
      <Track
        title={title}
        src={audio.file.url}
      />
      {description && (
        <Description>
          {description}
        </Description>
      )}
    </div>
  </section>
)

export default TrackDetails
