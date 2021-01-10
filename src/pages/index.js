import * as React from 'react'

import Main from '../layouts/Main'
import CardList from '../sections/CardList'
import Profile from '../sections/Profile'

const IndexPage = () => (
  <Main>
    <CardList
      title="Fresh works"
      entity="tracks"
    />
    <CardList
      title="Albums"
      entity="playlists"
    />
    <CardList
      title="Playlists"
      entity="playlists"
    />
    <Profile
      username="derive"
      fullName="Vlad V"
      description="Making music for fun. Here you can find most of my music sketches. All of them can be downloaded and used somewhere."
    />
  </Main>
)

export default IndexPage
