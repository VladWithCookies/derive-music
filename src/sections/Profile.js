import * as React from 'react'

import Avatar from '../components/Avatar'
import ProfileInfo from '../components/ProfileInfo'
import me from '../images/me.jpg'

const Profile = () => (
  <section className="container mx-auto px-4 py-8 flex">
    <Avatar image={me} />
    <ProfileInfo
      className="pl-4"
      username="derive"
      fullName="Vlad Viderko"
      location="Herceg Novi, Montenegro"
      description="Making music for fun. Here you can find most of my music sketches. All of them can be downloaded and used somewhere."
    />
  </section>
)

export default Profile
