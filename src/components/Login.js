import { useState } from 'react'
const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        setEmail("");
        setPassword("");
        props.handleLogin(email, password);
    }
    const handleOnchange = (e)=>{
        if(e.target.type == "email"){
            setEmail(e.target.value);
        }
        else if(e.target.type == "password"){
            setPassword(e.target.value);
        }
    }
  return (
    <div className='login-container'>
      <form className='form-control' onSubmit={(e)=>handleSubmit(e)}>
        <input required type="email" placeholder='Enter your email' value={email} onChange={handleOnchange}/>
        <input required type="password" placeholder='Enter your password' value={password} onChange={handleOnchange}/>
        <button className='login-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login
