import * as React from 'react'

import Main from '../layouts/Main'
import CardList from '../sections/CardList'
import Profile from '../sections/Profile'

const IndexPage = () => (
  <Main>
    <h1 hidden>
      Derive music
    </h1>
    <CardList
      title="Fresh works"
      entity="tracks"
    />
    <CardList
      title="Playlists"
      entity="playlists"
    />
    <Profile />
  </Main>
)

export default IndexPage
