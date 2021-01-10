import * as React from 'react'

import Card from '../components/Card'

const CardList = ({ title }) => (
  <section className="container mx-auto py-8">
    <h2 className="text-2xl px-4">
      {title}
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
    </div>
  </section>
)

export default CardList
