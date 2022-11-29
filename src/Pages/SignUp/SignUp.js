import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import login from '../../assets/image/sign.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser,setUser,updateUser,providerLogIn,loading } = useContext(AuthContext)
    const [signupError,setSignupError]=useState('')


    const handleSignup = data => {
        setSignupError('')
        createUser(data.email, data.password)
  
        .then(result => {
            const user =result.user;
            console.log(user)
            toast('user create successfully')

            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
                .then(()=>{
                    setUser({...user,...userInfo})
                    
                })

                .catch(error=>console.error(error))
                 })
            
                 .catch(error=>{
                    console.error(error)
                    setSignupError(error.message)
                })       
        }


    return (
        <div className="hero w-full my-20">
                <div className="hero-content gap-20  grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
        
                    <img src={login} alt="" />
                   </div>
                   <div className='w-96 px-6 py-12 shadow-lg shadow-black-500/50'>
                <h1 className='text-2xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-yellow-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: "Email Address is required" })} placeholder="Your Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 character or longer' },
                               
                            })} placeholder="Your Email" className="input input-bordered w-full " />

                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password ?</span>
                        </label>
                    </div>
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                    <input className='btn btn-accent w-full mt-5' value='Sign Up' type="submit" />
                </form>
                <p className='text-center mt-2'>Already have an account ? <Link to='/login' className='text-primary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button  className='btn btn-outline w-full mt-5'>CONTINUE WITH GOOGLE</button>
            </div>
              </div>
          </div >
    );
};

export default SignUp;













// import { GoogleAuthProvider } from 'firebase/auth';
// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import login from '../../assets/image/sign.png'

// const SignUp = () => {

//     const [error, setError] = useState(true);
    
//     const {providerLogIn,updateUser,setUser,createUser}=useContext(AuthContext)
//     const googleProvider = new GoogleAuthProvider()
//     const navigate=useNavigate();


//     const handalGoogleSignIn = () => {
//         providerLogIn(googleProvider)

//             .then(result => {
//                 const user = result.user;
//                 console.log(user)
//                 navigate('/')
//             })
//             .catch(error => {
//                 console.error('error', error)
//             })

//     }

// const handleSignup=(event)=>{
//     event.preventDefault()
//     const form = event.target;
//    const name=form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     createUser(email, password,name)
//         .then(result => {
//             const user = result.user;
//             console.log(user)
//             form.reset()
//             setError(false)
//             navigate('/')

//             const userInfo={
//                 displayName:name
//             }
//             updateUser(userInfo)
//             .then(()=>{
//                 setUser({...user,...userInfo})
//             })
                
            
//         })
//         .catch(error => {
//             setError(error.message)
//         })

// }

//     return (
//         <div className="hero w-full my-20">
//         <div className="hero-content gap-20  grid md:grid-cols-2 flex-col lg:flex-row-reverse">
//             <div className="text-center lg:text-left">

//                 <img src={login} alt="" />
//             </div>
//             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 p-5">
//                 <form onSubmit={handleSignup} className="card-body">
//                     <h1 className="text-4xl text-center font-bold">Sign Up</h1>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="text" name="email" placeholder="email" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        
//                     </div>
//                     <div className="form-control mt-6">
//                         <input className="btn btn-primary" type="submit" value="Sign Up" />

//                     </div>
//                 </form>
//                 <p className='text-orange-600'>{error}</p>
                
//                 <p className='text-center'>Or</p>
//                 <button onClick={handalGoogleSignIn} className="btn btn-outline btn-success mx-auto my-2"> Sign Up using Google</button>
//                 <p className='text-center'>Allready have an account ? Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
//             </div>
//         </div>
//     </div >
//     );
// };

// export default SignUp;