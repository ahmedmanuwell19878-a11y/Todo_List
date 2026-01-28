import React from 'react'
import "./Login.css"
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';



const Login = () => {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const delay=(d)=>{
return new Promise((resolve,reject)=>{
setTimeout(() => {
  resolve();
}, d*1000);
})
  }
  const onSubmit =async (data) =>{ 
    await delay(3)
    console.log(data);}


  return (
    <>
<section className="wrapper bg-white ">
  <div className="container  bg-white">
<div className='col-sm-8  mt-5 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center'>
<div className="logos shadow">
<h1>i-Tasks</h1>
</div>
<form onSubmit={handleSubmit(onSubmit)}  className='rounded bg-white shadow  p-5'>
<h3 className='text-dark fw-bolder fs-4 mb-2'>Login to i-Tasks</h3>
<div className='fw-normal text-muted mb-4'>New here? <Link to={"/register"} className='text-primary fw-bold text-decoration-none'>Create an account</Link></div>
<div className="form-floating mb-3">
  <input type="email" {...register("email", { required:{value:true,message:"This Field is required"},minLength:{value:3,message:"min length is 3"},maxLength:{value:32,message:"max length is 32"} })} className="form-control" id="floatingInput" placeholder="name@example.com"/>
  
  <label htmlFor="floatingInput">Email address</label>
</div>
{errors.email && <div className='text-dark small'>{errors.email.message}</div>}
<div className="form-floating">
  <input {...register("password", { required:{value:true,message:"This field is required"},minLength:{value:3,message:"min length is 3"},maxLength:{value:23,message:"max length is 23"}})} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  {errors.password && <div className='text-dark small'>{errors.password.message}</div>}
  <label htmlFor="floatingPassword">Password</label>
</div>
<div className='mt-2 text-end'><Link className='text-primary fw-bold text-decoration-none' >Forgot password? </Link></div>
<button type="submit" disabled={isSubmitting} className='btn btn-primary submit_btn w-100 my-4'>Login</button>
<div className="text-center text-muted text-uppercase">OR</div>
<Link className='btn btn-light login_with w-100 my-2 '><img src="/google.svg" className='img-fluid me-3' alt="" />Login with Google </Link>
<Link className='btn btn-light login_with w-100 my-2 '><img src="/linkedin.svg" className='img-fluid me-3' alt="" />Login with Linkedin </Link>
</form>
</div>
</div>
  </section>  
  
    </>
  )
}

export default Login
