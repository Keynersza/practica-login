import React, { useState } from 'react';
import { firestore } from '../components/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

const Enviar = () => {
 const [getEmail, setgetEmail] = useState([])
 const [getPassword, setgetPassword] = useState([])
 const [password, setPassword] = useState("")
 const [email, setEmail] = useState("")
 const collectionUser = collection(firestore, 'User')

 const createUser = async (e) =>{
  e.preventDefault()
  let data = await getDocs(collectionUser)
  if (data) {
   data.forEach((doc) =>{
    let dataUser = doc.data()
    getEmail.push(dataUser)
   })
   setgetEmail(getEmail)
   if (getEmail[0]?.Email) {
    let userFilter = getEmail.filter((element) => element.Email === email)
    if (userFilter.length > 0) {
     if (data) {
       data.forEach((doc) =>{
        let dataPass = doc.data()
        getPassword.push(dataPass)
       })
       setgetPassword(getPassword)
       if (userFilter[0].Email === email) {
        let userPassFilter = getPassword.filter((element)=> element.Password === password && element.Email === userFilter[0].Email)
        if (userPassFilter.length > 0) {
         console.log('Todo correcto')
        }else{
         alert('Contrasena invalida')
        }
       }
     }
    }else{
     alert('Este correo no existe')
    }
   }
  }
 }
 return {createUser, email, setEmail,
  password, setPassword }
}

export default Enviar