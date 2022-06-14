import React, { useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext';

function Login() {

    const {username, setUsername, setProfile} = useContext(LoginContext)

    const [password, setPassword] = useState('');
  return (
    <div>
        <form>

            <div>
                <input type="text" value={username} onChange={ e => setUsername(e.target.value)} placeholder="Enter username"/>
            </div>

            <div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password"/>
            </div>

            <button onClick={e => {setProfile(true)}}>Login</button>
        </form>

        <h1> Your username is {username} and password is {password} </h1>

    </div>
  )
}

export default Login