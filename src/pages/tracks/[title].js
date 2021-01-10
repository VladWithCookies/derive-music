import * as React from 'react'
import { graphql } from 'gatsby'

import Main from '../../layouts/Main'
import Profile from '../../sections/Profile'
import TrackDetails from '../../sections/TrackDetails'

const TrackDetailsPage = ({ data: { contentfulTrack } }) => (
  <Main>
    <TrackDetails {...contentfulTrack} />
    <Profile />
  </Main>
)

export const query = graphql`
  query trackDetails($title: StringQueryOperatorInput) {
    contentfulTrack(title: $title) {
      title
      description
      file {
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
