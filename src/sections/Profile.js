import * as React from 'react'

import Avatar from '../components/Avatar'
import me from '../images/me.jpg'

const Profile = ({ username, fullName, description }) => (
  <section className="container mx-auto px-4 py-8 flex">
    <Avatar image={me} />
    <div className="pl-4">
      <p className="text-2xl">
        {username}
      </p>
      <p className="text-lg">
        {fullName}
      </p>
      <p className="text-gray-500">
        {description}
      </p>
    </div>
  </section>
)

export default Profile
