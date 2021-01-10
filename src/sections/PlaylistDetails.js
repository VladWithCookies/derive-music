import * as React from 'react'
import { map } from 'lodash'

import Cover from '../components/Cover'
import Track from '../components/Track'
import Title from '../components/Title'
import Description from '../components/Description'

const PlaylistDetails = ({ title, tracks, cover, description}) => (
  <section className="container mx-auto flex flex-grow flex-wrap px-4 py-8">
    <div className="mb-8 mr-4">
      <Cover src={cover.resolutions.src} />
      <Title as="h1">
        {title}
      </Title>
      {description && (
        <Description>
          {description}
        </Description>
      )}
    </div>
    <ol className="list-decimal ml-4 w-96">
      {map(tracks, ({ title, file }) => (
        <Track
          as="li"
          className="mb-4"
          title={title}
          src={file.file.url}
        />
      ))}
    </ol>
  </section>
)

export default PlaylistDetails
