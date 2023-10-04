import React, { useState } from 'react';
import Enviar from '../controllers/Enviar';

const FormLogin = () => {
const {createUser, email, setEmail,
 password, setPassword } = Enviar()
  return (
    <div>
<form onSubmit={createUser}>
    <label htmlFor="">Email</label>

    <input type="email"
     name='email'
     placeholder='Email'
     value={email}
     onChange={(e) => setEmail(e.target.value)}  required/>

    <label htmlFor="">Password</label>
    <input type="number"
     name='password' placeholder='Password'
     value={password}
     onChange={(e) => setPassword (e.target.value)} required/>
     <button type="Submit">Send</button>
   </form>
     <button onClick={createUser}>Enviar</button>
    </div>
  ) 
}

export default FormLogin