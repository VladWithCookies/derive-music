import * as React from 'react'

const ProfileInfo = ({ username, fullName, description, className }) => (
  <div className={className}>
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
)

export default ProfileInfo
