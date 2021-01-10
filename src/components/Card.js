import * as React from 'react'
import { Link } from 'gatsby'

const Card = ({ id, title, entity, description }) => (
  <Link to={`/${entity}/${id}`}>
    <div className="w-80 p-4">
      <img
        className="object-cover w-80 h-80"
        src="https://picsum.photos/800/600"
        alt=""
      />
      <p className="text-lg mt-2">
        {title}
      </p>
      <p className="text-sm text-gray-500	">
        {description}
      </p>
    </div>
  </Link>
)

export default Card
