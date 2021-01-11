import * as React from 'react'
import { graphql } from 'gatsby'

import Main from '../../layouts/Main'
import Profile from '../../sections/Profile'
import PlaylistDetails from '../../sections/PlaylistDetails'

const PlaylistDetailsPage = ({ data: { playlist } }) => (
  <Main>
    <PlaylistDetails {...playlist} />
    <Profile />
  </Main>
)

export const query = graphql`
  query playlistDetails($title: StringQueryOperatorInput) {
    playlist: contentfulPlaylist(title: $title) {
      title
      description
      cover {
        resolutions {
          src
        }
      }
      tracks {
        title
        audio: file {
          file {
            url
          }
        }
      }
    }
  }
`

export default PlaylistDetailsPage
