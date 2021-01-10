import * as React from 'react'

import Main from '../layouts/Main'
import Profile from '../sections/Profile'
import CardList from '../sections/CardList'

const IndexPage = () => (
  <Main>
    <CardList title="Fresh works" />
    <CardList title="Albums" />
    <CardList title="Playlists" />
    <Profile
      username="derive"
      fullName="Vlad V"
      description="Making music for fun. Here you can find most of my music sketches. All of them can be downloaded and used somewhere."
    />
  </Main>
)

export default IndexPage
