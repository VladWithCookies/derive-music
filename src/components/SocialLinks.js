import clsx from 'clsx';
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = ({ className }) => (
  <div className={clsx('flex justify-end', className)}>
    <a
      rel="noreferrer noopener"
      target="_blank"
      className="mr-4"
      href="https://soundcloud.com/artplusvision"
    >
      <FontAwesomeIcon
        size="lg"
        icon={faSoundcloud}
      />
    </a>
    <a
      rel="noreferrer noopener"
      target="_blank"
      href="https://www.instagram.com/de.rive"
    >
      <FontAwesomeIcon
        size="lg"
        icon={faInstagram}
      />
    </a>
  </div>
)

export default SocialLinks
