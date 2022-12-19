import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/wagaofc.png" />
      <ProfileDetails>
        <header>
          <h1>Wagner Ferreira Costa</h1>
        </header>
      </ProfileDetails>
    </ProfileContainer>
  )
}
