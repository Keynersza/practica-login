import React, { useState } from 'react';
import { Create } from '../controllers/Create';


const FormRegister = () => {
 

 const {registro, email, setEmail,
  password, setPassword } = Create()

 return (
  <div>
   <form onSubmit={registro}>
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
  </div>
 )
}

export default FormRegister