import * as React from 'react'

import Card from '../components/Card'

const CardList = ({ title, entity }) => (
  <section className="container mx-auto py-8">
    <h2 className="text-2xl px-4">
      {title}
    </h2>
    <div className="flex flex-wrap">
      <Card
        title="Title"
        entity={entity}
        description="Description"
      />
      <Card
        title="Title"
        entity={entity}
        description="Description"
      />
      <Card
        title="Title"
        entity={entity}
        description="Description"
      />
    </div>
  </section>
)

export default CardList
