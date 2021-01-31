const React = require('react')
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn(({
    activeClassName,
    activeStyle,
    getProps,
    innerRef,
    partiallyActive,
    ref,
    replace,
    to,
    ...rest
  }) => React.createElement('a', { ...rest, href: to })),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
