import { useAuth } from '../providers/Auth'

function Profile () {
  const { user } = useAuth()

  return (
    <div style={{ background: '#000', color: '#fff', padding:"20px", margin:"20px 0"}}>
      <h1>Profile</h1>
      <p>{user.name}</p>
    </div>
  )
}

export default Profile
