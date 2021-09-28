import { useAuth } from '../providers/Auth'

function Profile () {
  const { user } = useAuth()

  return (
    <div style={{ background: '#000', color: '#fff' }}>
      <hr />
      <h1>Profile</h1>
      <p>{user.name}</p>
    </div>
  )
}

export default Profile
