import clsx from 'clsx';
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSoundcloud, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { GITHUB_LINK, LINKED_IN_LINK, INSTAGRAM_LINK, SOUNDCLOUD_LINK } from '../constants/socialLinks'

const SocialLinks = ({ className }) => (
  <div className={clsx('flex justify-end', className)}>
    <a
      rel="noreferrer noopener"
      target="_blank"
      className="mr-4"
      href={SOUNDCLOUD_LINK}
      aria-label="Soundcloud profile"
    >
      <FontAwesomeIcon
        size="lg"
        icon={faSoundcloud}
      />
    </a>
    <a
      rel="noreferrer noopener"
      target="_blank"
      className="mr-4"
      href={INSTAGRAM_LINK}
      aria-label="Instagram profile"
    >
      <FontAwesomeIcon
        size="lg"
        icon={faInstagram}
      />
    </a>
    <a
      rel="noreferrer noopener"
      target="_blank"
      className="mr-4"
      href={GITHUB_LINK}
      aria-label="Github profile"
    >
      <FontAwesomeIcon
        size="lg"
        icon={faGithub}
      />
    </a>
    <a
      rel="noreferrer noopener"
      target="_blank"
      href={LINKED_IN_LINK}
      aria-label="LinkedIn profile"
    >
      <FontAwesomeIcon
        size="lg"
        icon={faLinkedin}
      />
    </a>
  </div>
)

export default SocialLinks
