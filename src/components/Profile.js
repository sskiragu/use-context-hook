import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

function Profile() {
    
    const {username} = useContext(LoginContext)
  return (
    <div>
        <h1>Welcome {username}</h1>
    </div>
  )
}

export default Profile