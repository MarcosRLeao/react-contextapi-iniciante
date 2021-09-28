import Login from './components/Login'
import Profile from './components/Profile'
import Sobre from './components/Sobre'

import { useAuth } from './providers/Auth'

function App () {
  const { user } = useAuth()
  console.log(user)
  return (
    <div  style={{ background: '#eee', color: '#333', padding:"20px", margin:"20px 0"}}>
      <h1>Hello world!</h1>
      
      <Login />

      <Profile />

      <Sobre />

    </div>
  )
}

export default App
