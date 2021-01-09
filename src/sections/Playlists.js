import * as React from 'react'

import Card from '../components/Card'

const Playlists = () => (
  <section className="container mx-auto py-8">
    <h2 className="text-2xl pl-4 pt-4">
      Playlists
    </h2>
    <div className="flex flex-wrap">
      <Card
        title="Title"
        description="Description"
      />
      <Card
        title="Title"
        description="Description"
      />
      <Card
        title="Title"
        description="Description"
      />
      <Card
        title="Title"
        description="Description"
      />
      <Card
        title="Title"
        description="Description"
      />
    </div>
  </section>
)

export default Playlists
