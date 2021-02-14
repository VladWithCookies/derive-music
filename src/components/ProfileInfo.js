import * as React from 'react';

const ProfileInfo = ({
  username, fullName, location, description, className,
}) => (
  <div className={className}>
    <h2 className="text-2xl">
      {username}
    </h2>
    <p className="text-lg">
      {fullName}
    </p>
    <p>
      Based in
      {' '}
      {location}
    </p>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

export default ProfileInfo;
