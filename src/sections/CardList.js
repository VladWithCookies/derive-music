import * as React from 'react'

import Title from '../components/Title'
import Card from '../components/Card'

const CardList = ({ title, entity }) => (
  <section className="container mx-auto py-8">
    <Title
      as="h2"
      className="px-4"
    >
      {title}
    </Title>
    <ul className="flex flex-wrap">
      <Card
        as="li"
        title="Title"
        entity={entity}
        description="Description"
      />
      <Card
        as="li"
        title="Title"
        entity={entity}
        description="Description"
      />
      <Card
        as="li"
        title="Title"
        entity={entity}
        description="Description"
      />
    </ul>
  </section>
)

export default CardList
