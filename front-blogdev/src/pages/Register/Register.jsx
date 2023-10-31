import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Compartilhe sua experiência com outros maconheiro</h1>
      <form>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Entre com o seu nome de noia"></input>
        </label >
        <label>
          <span>Email: </span>
          <input
            type="text"
            name="displayEmail"
            required
            placeholder="Entre com o seu nome de noia"></input>
        </label >
      </form>
    </div >
  )
}

export default Register