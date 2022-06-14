import React, { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import { LoginContext } from './context/LoginContext'

function App() {

  const [username, setUsername] = useState('');
  const [showProfile, setProfile] = useState(false)

  return (
    <div>
      <LoginContext.Provider value={ {username, setUsername, setProfile} }>
      { showProfile ? <Profile /> : <Login /> }
      </LoginContext.Provider>
    </div>
  )
}

export default App