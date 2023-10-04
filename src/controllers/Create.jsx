import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useState } from 'react';
import { firestore } from '../components/firebase'
import { useNavigate } from 'react-router-dom';

export const Create = () => {
 const collectionUser = collection(firestore, 'User')
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [getEmail, setGetEmail] = useState([])
 const [getEmails, setGetEmails] = useState([])

 const navigate = useNavigate()

 const registro = async (e) => {
  e.preventDefault()
  let res = await getDocs(collectionUser)
  if (res) {
   res.forEach((doc) => {
    let dataUser = doc.data()
    getEmail.push(dataUser)
   })
   setGetEmail(getEmail)
   if (getEmail[0]?.Email) {
    let resFilter = getEmail.filter((element) => element.Email === email)
    if (resFilter.length > 0) {
     alert('Este usuario ya se encuentra en uso')
    } else {
     let resAdd = await addDoc(collectionUser, { Email: email, Password: password })
     if (resAdd) {
      alert('Usuario creado')
      navigate('/sesion')
     }
    }
   } else {
    let resAdd = await addDoc(collectionUser, { Email: email, Password: password })
    if (resAdd) {
     alert('Usuario creado')
    }

   }
  }
 }
 return {
  registro, email, setEmail,
  password, setPassword
 }
}