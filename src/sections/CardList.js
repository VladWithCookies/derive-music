import * as React from 'react'
import { map } from 'lodash'

import Title from '../components/Title'
import Card from '../components/Card'

const CardList = ({ title, entity, items }) => (
  <section className="container mx-auto py-8">
    <Title
      as="h2"
      className="px-4"
    >
      {title}
    </Title>
    <ul className="flex flex-wrap">
      {map(items, item => (
        <Card
          key={item.contentfulId}
          as="li"
          entity={entity}
          {...item}
        />
      ))}
    </ul>
  </section>
)

export default CardList
