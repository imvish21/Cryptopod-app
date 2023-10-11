import React from 'react';
import './loginsignup.css'
import Tilt from "react-parallax-tilt";

const LoginSignup = () => {
         return(
              <div className='flex flex-wrap w-full h-screen'>
                <div className='w-full flex items-center justify-center lg:w-1/2'>
                <form>
                <Tilt glareEnable={true} tiltMaxAngleX={10} 
        tiltMaxAngleY={10} perspective={1000} 
        glareColor={"rgb(255,0,0)"}>
          
                  <div className='bg-gray-100 px-10 py-20 rounded-3xl border-2 border-gray-200'>
                     <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                     <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
                     <div className='mt-8'>
                      <div>
                        <label className='text-lg font-medium'>Email</label>
                        <input className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email' required/>
                      </div>
                      <div>
                        <label className='text-lg font-medium'>Password</label>
                        <input className='w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password' required/>
                      </div>
                      <div className='mt-8 flex justify-between items-center'>
                        <div>
                          <input type="checkbox" id="remember"/>
                          <label className="ml-2 font-medium text-base" for="remember">Remember for 30 days.</label>
                        </div>
                        <button className='font-medium text-base text-violet-500'>Forgot password</button>
                      </div>
                      <div className='mt-8 flex flex-col gap-y-4'>
                        <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign In</button>
                        <button className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all border-2 py-3 rounded-xl border-gray-200'>
                        <box-icon type='logo' name='google'></box-icon>
                          Sign in with Google</button>
                      </div>
                      <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Don't have an account?</p>
                        <button className="text-violet-500 font-medium ml-2">Sign up</button>
                      </div>
                     </div>
                  </div>
                  </Tilt>
               </form>
                </div>
                <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
                    <div className='w-40 h-40 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce'/>   
                    <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-sm' />
                </div>
                  
              </div>
         );
}

export default LoginSignup;

