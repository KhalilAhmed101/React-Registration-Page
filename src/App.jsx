import React, { useState } from 'react'

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  })
  function clear(){
        setForm({
          name: "",
          email: "",
          password: "",
          confirm_password: ""
        })
  }
  function submit(){
    if(form.name === '' || form.email === '' || form.password === '' || form.confirm_password === ''){
      alert("Please Fill The Form")
    }
    else{
      alert("Register Successfully")
      setForm({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      })
    }
  }
  return (
    <div className='container'>
      <h1>Signup Form</h1>

      <div className='fields'>
        <input type="text" value={form.name} onChange={((e) => setForm({ ...form, name: e.target.value }))} placeholder='Name' required/>
        <input type="text" value={form.email} onChange={((e) => setForm({ ...form, email: e.target.value }))} placeholder='Email' required/>
        <input type="password" value={form.password} onChange={((e) => setForm({ ...form, password: e.target.value }))} placeholder='Password' required/>
        <input type="password" value={form.confirm_password} onChange={((e) => setForm({ ...form, confirm_password: e.target.value }))} placeholder='Confirm Password' required/>
        <div className="btn">
          <button onClick={submit}>Create Account</button>
          <button onClick={clear}>Clear All</button>
        </div>
      </div>
      <p>Your name is {form.name} and
        Your email is {form.email}
      </p>
    </div>
  )
}

export default App