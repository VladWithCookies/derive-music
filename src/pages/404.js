import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <main>
    <title>
      Not found
    </title>
    <h1>
      Page not found
    </h1>
    <p>
      Sorry we couldn’t find what you were looking for.
      <br />
      <Link to="/">
        Take me home
      </Link>.
    </p>
  </main>
)

export default NotFoundPage
