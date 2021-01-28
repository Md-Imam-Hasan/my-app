import React, { useState } from 'react'
import style from './Form.module.css'

export default function Form() {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const { name, email, password } = user
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    console.log("Form Submitted")
    console.log(user)
    e.preventDefault()
  }
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formControl}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleChange} value={name} id="name" required />
        </div>
        <div className={style.formControl}>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" onChange={handleChange} value={email} id="email" required />
        </div>
        <div className={style.formControl}>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" onChange={handleChange} value={password} id="password" required />
        </div>
        <div className={style.formControl}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}
