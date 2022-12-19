import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/wagaofc.png" />
      <ProfileDetails>
        <header>
          <h1>Wagner Ferreira Costa</h1>
          <ExternalLink text="github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            wagaofc
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Zema
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            1234 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
