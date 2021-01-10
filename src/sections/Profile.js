import * as React from 'react'

import Avatar from '../components/Avatar'
import ProfileInfo from '../components/ProfileInfo'
import me from '../images/me.jpg'

const Profile = ({ username, fullName, description }) => (
  <section className="container mx-auto px-4 py-8 flex">
    <Avatar image={me} />
    <ProfileInfo
      className="pl-4"
      username={username}
      fullName={fullName}
      description={description}
    />
  </section>
)

export default Profile
