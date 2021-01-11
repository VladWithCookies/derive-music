import * as React from 'react'
import { graphql } from 'gatsby'

import Main from '../layouts/Main'
import CardList from '../sections/CardList'
import Profile from '../sections/Profile'

const IndexPage = ({ data: { tracks, playlists } }) => (
  <Main title="Home">
    <CardList
      title="Fresh works"
      entity="tracks"
      items={tracks.nodes}
    />
    <CardList
      title="Playlists"
      entity="playlists"
      items={playlists.nodes}
    />
    <Profile />
  </Main>
)

export const query = graphql`
  query home {
    tracks: allContentfulTrack(filter: { isFresh: { eq: true } }) {
      nodes {
        id: contentful_id
        title
        description
        cover {
          resolutions {
            src
          }
        }
      }
    }
    playlists: allContentfulPlaylist {
      nodes {
        id: contentful_id
        title
        description
        cover {
          resolutions {
            src
          }
        }
      }
    }
  }
`

export default IndexPage
