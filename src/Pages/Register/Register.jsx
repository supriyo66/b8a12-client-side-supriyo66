import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocilaLogin";






const Register = () => {
  const {register,handleSubmit,reset,formState: { errors },} = useForm()
  const {createUser,updateUserProfile}=useContext(AuthContext)

  const navigate=useNavigate()
  const axiosPublic=useAxiosPublic()


  const onSubmit = (data) =>{ 
    console.log(data)
   createUser(data.email,data.password)
      .then(res=>{
        const loggedUser=res.user
        console.log(loggedUser)
        updateUserProfile(data.name,data.PhotoUrl)
        .then(()=>{
          const userInfo={
            name: data.name,
            email:data.email
          }
          axiosPublic.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId)
            console.log('user added')
            reset ()
            
            Swal.fire({
              
              
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          })
          
        })
        .catch()
        
      })
    }
    return ( 
    <>
    <Helmet>
        <title>ReadMatrix | Sign Up</title>
        
      </Helmet>
    <div className="hero min-h-screen  ">
        
        <div className="hero-content flex-col lg:flex-row-reverse pt-20">
          
          
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
          <h2 className="text-center text-3xl font-bold text-blue-700  ">SIGN UP</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",{ required: true })}  placeholder="name" className="input input-bordered"  />
                {errors.name && <span className="text-red-700">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" {...register("PhotoUrl",{ required: true })}  placeholder="Photo Url" className="input input-bordered"  />
                {errors.PhotoUrl && <span className="text-red-700">Photo Url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })}   placeholder="email" className="input input-bordered" required />
                {errors.email && <span className="text-red-700">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true, 
                minLength: 6,
                maxLength: 20 ,
                pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}  placeholder="password" className="input input-bordered" required />
               {errors.password?.type === "required" && (
            <p className="text-red-700">Password is required</p>)}
              {errors.password?.type === "minLength" && (
            <p className="text-red-700">Password must be 6 characters</p>
          )}
              {errors.password?.type === "pattern" && (
            <p className="text-red-700">Password must have one uppercase,one lowercase,one special character,one number</p>
          )}
                
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='Sign Up' />
                
              </div>
            </form>
            <p className="text-center text-xl font-medium p-5">Already have an account? <Link to='/login' className="text-blue-700">Login</Link></p>
            <p className='text-center text-xl font-medium p-5'><SocialLogin></SocialLogin></p>
          </div>
          <div className="text-center w-1/3 lg:text-left">
            <img src="https://i.ibb.co/W61DjBN/log.jpg"></img>
          </div>
        </div>
      </div>
    </>
      );
  };

export default Register;