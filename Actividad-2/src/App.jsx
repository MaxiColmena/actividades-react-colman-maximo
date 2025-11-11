import { useState } from "react"
import { Login } from "./components/Login"
import { Register } from "./components/Register"

export const App = () => {

  const [user, setUser] = useState('')

  const handleLogin = (username) => {
    setUser(username)
  }

  const handleLogout = () => {
    setUser('')
  }
  return (
    <>
      <h1>¡Hola de nuevo {user}!</h1>
      <Register />
      <Login onLogin={handleLogin} />
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
