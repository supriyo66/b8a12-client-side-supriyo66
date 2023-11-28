import { useContext, useEffect, useRef, useState, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Login = () => {
  
  const [disabled,setDisabled]=useState(true)
  const {signInUser}=useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation()

  // const from=location.state?.from?.pathname || "/"

  useEffect(()=>{
    loadCaptchaEnginge(6);
},[])

  const handleLogin=e=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password)
    signInUser(email,password)
    .then(res=>{
      const user=res.user
      console.log(user)
      navigate(location?.state? location.state : '/')
      Swal.fire({
        title: "Login successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
        
      });
      // navigate(from,{replace:true})
      
    })
  }
  
const handleValidate=(e)=>{
  const value=e.target.value
        if (validateCaptcha(value)){
            setDisabled(false)
        }
        else{setDisabled(true)}
    }



    return (
      <>
      <Helmet>
        <title>ReadMatrix | Login</title>
        
      </Helmet>
      <div>
          <div className="hero min-h-screen   ">
  <div className="hero-content flex-col lg:flex-row-reverse pt-20">
   
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
    <h2 className="text-center text-3xl font-bold text-blue-700 pt-10 ">LOGIN</h2>
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handleValidate}  name="captcha" placeholder="type captcha" className='input input-bordered ' />
          {/* <button onClick={handleValidate}  className="btn btn-ghost">validate</button> */}
          
        </div>
        <div className="form-control mt-6">
         <input className="btn btn-primary" disabled={disabled} type="submit"  value='Login'  /> 
        
        </div>
      </form>
      <p className="text-center text-xl font-medium p-5">New here? <Link to='/signup' className="text-blue-700">Sign Up</Link></p>
      
    </div>
    
    <div className="text-center w-1/3 lg:text-left">
      <img src="https://i.ibb.co/W61DjBN/log.jpg"></img>
    </div>
  </div>
</div>
      </div>
      </>
    );
};

export default Login;