import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <Link to={'/register'}>Registrarme</Link>
     <Link to={'/sesion'}>Loguearme</Link>
     </div>
  )
}

export default Home