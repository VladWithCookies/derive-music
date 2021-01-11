import * as React from 'react'
import { graphql } from 'gatsby'

import Main from '../../layouts/Main'
import Profile from '../../sections/Profile'
import TrackDetails from '../../sections/TrackDetails'

const TrackDetailsPage = ({ data: { track } }) => (
  <Main title={track.title}>
    <TrackDetails {...track} />
    <Profile />
  </Main>
)

export const query = graphql`
  query trackDetails($title: StringQueryOperatorInput) {
    track: contentfulTrack(title: $title) {
      title
      description
      audio: file {
        file {
          url
        }
      }
      cover {
        resolutions {
          src
        }
      }
    }
  }
`

export default TrackDetailsPage
