import * as React from 'react';
import { Link } from 'gatsby';

import Error from '../components/Error';

const NotFound = () => (
  <section className="container flex justify-center items-center">
    <Error
      title="Page not found"
      description="Sorry we couldn’t find what you were looking for..."
    >
      <Link
        to="/"
        className="underline leading-loose"
      >
        Take me home
      </Link>
    </Error>
  </section>
);

export default NotFound;
