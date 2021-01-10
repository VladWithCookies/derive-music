import * as React from 'react'

import Main from '../layouts/Main'
import CardList from '../sections/CardList'
import Profile from '../sections/Profile'

const IndexPage = ({ data: { allContentfulTrack, allContentfulPlaylist } }) => (
  <Main>
    <h1 hidden>
      Derive music
    </h1>
    <CardList
      title="Fresh works"
      entity="tracks"
      items={allContentfulTrack.nodes}
    />
    <CardList
      title="Playlists"
      entity="playlists"
      items={allContentfulPlaylist.nodes}
    />
    <Profile />
  </Main>
)

export const query = graphql`
  query home {
    allContentfulTrack(filter: { isFresh: { eq: true } }) {
      nodes {
        contentfulId: contentful_id
        title
        description
        cover {
          resolutions {
            src
          }
        }
      }
    }
    allContentfulPlaylist {
      nodes {
        contentfulId: contentful_id
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
