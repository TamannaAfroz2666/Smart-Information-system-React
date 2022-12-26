import React, { useState } from 'react'
import './Login.css';


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () =>{
        console.log('Data is here');
    }
  return (
    <div className='Login_Page'>
        <div className="container">
            <div className="header_class row">
                <div className="header_title col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                    <h1 className='header_title_name'>Smart Information System for Citizens</h1>
                </div>
            </div>

           <form action="" className='form_header'>
            <div className="field">
                <label htmlFor="">User Name</label>
                <input type="text" placeholder='Enter user name' name='name' value={name} onChange={(e) =>setName(e.target.value)} />
            </div>
            <div className="field">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email' name='email' value={email} onChange={(e) =>setEmail(e.target.value)} />
            </div>
            <div className="field">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter user name' name='password' value={password} onChange={(e) =>setPassword(e.target.value)} />
            </div>
            <button className='submit_button' onClick={submitHandler}>Submit</button>

           </form>

            
          
        </div>

    </div>
  )
}

export default Login