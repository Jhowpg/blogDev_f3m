import React from 'react'
import { useState } from 'react'

const Register = () => {
  //#region Controller Service
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')
  const [corfirmedPassword, setCorfirmedPassword] =useState('')
  const [error, setError] =useState('')
  const handlerSubmit = (e) => {
    e.preventDefault()
    setError('')
    const user = {
      displayName,
      email,
      password
    }

    if(password != corfirmedPassword){
      setError('As senhas precisam ser iguais.')
      return 
    }
    console.table(user)
  }
  //#endregion
  //#region View Browser Page
  return (
    <div>
      <h1>Compartilhe suas experiências com outros nomades</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Entre con seu nomade nome"></input>
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entre com seu e-mail"></input>
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entre com sua senha"></input>
        </label>
        <label>
          <span>Confirmação: </span>
          <input
            type="password"
            name="corfirmedPassword"
            required
            value={corfirmedPassword}
            onChange={(e) => setCorfirmedPassword(e.target.value)}
            placeholder="Entre com sua senha"></input>
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
  //#endregion
}

export default Register