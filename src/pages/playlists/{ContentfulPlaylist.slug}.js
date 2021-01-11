import * as React from 'react'
import { graphql } from 'gatsby'

import Main from '../../layouts/Main'
import Profile from '../../sections/Profile'
import PlaylistDetails from '../../sections/PlaylistDetails'

const PlaylistDetailsPage = ({ data: { playlist } }) => (
  <Main title={playlist.title}>
    <PlaylistDetails {...playlist} />
    <Profile />
  </Main>
)

export const query = graphql`
  query playlistDetails($id: String) {
    playlist: contentfulPlaylist(id: { eq: $id }) {
      title
      description
      cover {
        resolutions {
          src
        }
      }
      tracks {
        id: contentful_id
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
