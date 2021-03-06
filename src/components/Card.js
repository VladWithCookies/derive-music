import * as React from 'react';
import { Link } from 'gatsby';

const Card = ({
  title, slug, entity, cover, description, as,
}) => {
  const Component = as || 'div';

  return (
    <Component className="w-80 p-4">
      <Link to={`/${entity}/${slug}`}>
        <img
          className="object-cover w-80 h-80"
          src={cover.resolutions.src}
          alt=""
        />
        <p className="text-lg mt-2">
          {title}
        </p>
        {description && (
          <p className="text-sm text-gray-600	">
            {description}
          </p>
        )}
      </Link>
    </Component>
  );
};

export default Card;
