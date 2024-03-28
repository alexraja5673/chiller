import React, { useReducer, useState } from 'react'
import { useSelector } from 'react-redux';
import './Login.css'
import logo from '../../Assets/images/logo.png'
import banner from '../../Assets/images/banner.png'
import { useForm } from 'react-hook-form';


const Login = () => {
  const { register, handleSubmit, reset, formState } = useForm()
  const { errors } = formState;
 

  const loginSlice=useSelector((state)=>state.login)
  console.log(loginSlice);
  // loader
  const [load,setLoad] = useState(false)  

  // submit function 
  const onSubmitUser=async (data)=>{
    setLoad(true) 
    setTimeout(()=>{
      setLoad(false)
    },2000)
  
  }


  return (
    <div className='container-fluid vh-100 align-items-center'>
      <div className='row px-lg-5 py-md-3'>
        <div className='col-4 col-md-3 col-lg-2'>
          <a href='/' ><img src={logo} alt='load' className='w-100' /></a>
        </div>
      </div>
      <div className='d-flex mt-3 mt-md-0'>
        <div className='col-md-6 d-none d-md-block'>
          <img src={banner} alt='load' className='w-100' />
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-start align-items-end ps-lg-5'>
           <div className='col-lg-8 m-auto'>
            <form className="login-form" onSubmit={handleSubmit(onSubmitUser)}>
              <div className='text-center'>
                <h3 className='form_head'>LOG IN</h3>
              </div>
              
              <div className="input-floating-label">
                <input className="input" type="text" id="user_name" placeholder="userName"
                {...register("userName", {
                  required: "Please enter your Username",
                })}/>
                <label htmlFor="user_name">Username</label>
                <span className="focus-bg"></span>
                <p className='error-msg'>{errors.userName?.message}</p>
              </div>

              <div className="input-floating-label">
                <input className="input" type="password" id="pwd" placeholder="password"
                {...register("password", {
                  required: "Please enter your Password",
                })}/>
                <label htmlFor="pwd">Password</label>
                <span className="focus-bg"></span>
                <p className='error-msg'>{errors.password?.message}</p>
              </div>

              <div className='d-flex align-items-center gap-3 justify-content-end'>
              <a href='#' className="btn-forget"> Forgot Password ? </a>
                <button id="submit" type='submit' className="btn-submit"> {load?
                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    :"Log in"
                }</button>
                 
                 
              </div>
             
            </form>
           </div>
        </div>
      </div>
    </div> 
  )
}

export default Login