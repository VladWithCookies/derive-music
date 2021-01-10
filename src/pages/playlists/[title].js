import * as React from 'react'

import Main from '../../layouts/Main'
import Profile from '../../sections/Profile'
import PlaylistDetails from '../../sections/PlaylistDetails'

const PlaylistDetailsPage = ({ data: { contentfulPlaylist } }) => (
  <Main>
    <PlaylistDetails {...contentfulPlaylist} />
    <Profile />
  </Main>
)

export const query = graphql`
  query playlistDetails($title: StringQueryOperatorInput) {
    contentfulPlaylist(title: $title) {
      title
      description
      cover {
        resolutions {
          src
        }
      }
      tracks {
        title
        file {
          file {
            url
          }
        }
      }
    }
  }
`

export default PlaylistDetailsPage
