import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/image/sign.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError,setLoginError]=useState('')
    const {signIn,paswordVer,user,loading}=useContext(AuthContext);
    const location=useLocation();
    const Navigate=useNavigate()

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    let from = location.state?.from?.pathname || "/";

    const handleLogin=data=>{
        setLoginError('')
        signIn(data.email,data.password)
        
        .then(result=>{
            const user=result.user;
            console.log(user)
            Navigate(from,{replace:true})
             })
    .catch(error=>{
        console.error(error)
        setLoginError(error.message)
    })
    }
    return (
        <div className="hero-content gap-20  grid md:grid-cols-2 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">

        <img src={login} alt="" />
       </div>
       <div className='w-96 px-6 py-12 shadow-lg shadow-black-500/50'>
                <h1 className='text-2xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{required:"Email Address is required"})} placeholder="Your Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-yellow-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label ">
                            <span className="label-text">Password</span>
                        </label>
                        <input  type="password" {...register("password",{required:"Password is required",minLength:{ value: 6, message: "Password must be 6 character or longer" }})} placeholder="Your Email" className="input input-bordered w-full " />
                        {errors.password && <p className='text-yellow-600' role="alert">{errors.password?.message}</p>}
                        <label className="labely">
                            <span  className="label-text">Forget Password ?</span>
                        </label>
                    </div>
                    {loginError && <p className='text-red-600'>{loginError}</p> }

                    <input className='btn btn-accent w-full mt-5' value='Login' type="submit" />
                </form>
                <p className='text-center mt-2'>New to Doctors Portal ? <Link to='/signup' className='text-primary'>Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full mt-5'>CONTINUE WITH GOOGLE</button>
            </div>
  </div>
 
    );
};

export default Login;








// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import signup from '../../assets/image/sign.png'

// const Login = () => {

//     const [error,setError]=useState(true)
//     const {userLogin}=useContext(AuthContext);
//     const navigate=useNavigate();
//     const location=useLocation();
//     const from = location.state?.from?.pathname || "/";
   


   

//     const handleLogin = (event) => {
//         event.preventDefault()
        
//         const form=event.target;
//         const email=form.email.value;
//         const password=form.password.value;
    
//         userLogin(email,password)
//         .then(result=>{
//             const user=result.user;
//             console.log(user)
//             form.reset()
//             setError(false)
//             navigate(from, { replace: true })
            
//         })
//         .catch(error=>{
//             setError(error.message)
//         })

//     }


//     return (
//         <div className="hero w-full my-20">
//             <div className="hero-content gap-20  grid md:grid-cols-2 flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">

//                     <img src={signup} alt="" />
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 p-5">
//                     <form onSubmit={handleLogin} className="card-body">
//                         <h1 className="text-4xl text-center font-bold">Login</h1>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                            
//                         </div>
//                         <div className="form-control mt-6">
//                             <input className="btn btn-primary" type="submit" value="Login" />

//                         </div>
//                     </form>
//                     <p className='text-orange-600'>{error}</p>
//                     <p className='text-center'>New to Swanky Travel ? please <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default Login;