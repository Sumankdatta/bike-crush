import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import signup from '../../assets/image/sign.png'

const Login = () => {

    const [error,setError]=useState(true)
    const {userLogin}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";
   


   

    const handleLogin = (event) => {
        event.preventDefault()
        
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
    
        userLogin(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset()
            setError(false)
            navigate(from, { replace: true })
            
        })
        .catch(error=>{
            setError(error.message)
        })

    }


    return (
        <div className="hero w-full my-20">
            <div className="hero-content gap-20  grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 p-5">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                    <p className='text-orange-600'>{error}</p>
                    <p className='text-center'>New to Swanky Travel ? please <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div >
    );
};

export default Login;