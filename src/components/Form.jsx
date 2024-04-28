import  { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {handleSignup,handleSignin,handleGoogleSignin, handleGithubSignin,handleforgetPassword} from '../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const email= useRef();
    const [isSignIn, setIsSignIn] = useState(true);
    const navigate = useNavigate();
    const handleToggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSubmit1 = async(e) => {
      e.preventDefault();
      const formdata = new FormData(e.target);
      const jsonData = Object.fromEntries(formdata.entries());
      const {auth,error} = await handleSignup(jsonData);
      if(auth.length>0) {
        window.location.href='http://localhost:8080/';
      }
      else{
        toast.error(error);
      }
    
      
  };
    const handleSubmit2 = async(e) => {
      e.preventDefault();
      const formdata = new FormData(e.target);
      const jsonData = Object.fromEntries(formdata.entries());
      const {auth,error} = await handleSignin(jsonData);
      console.log(auth.length);
      if(auth.length>0) {
        window.location.href='http://localhost:8080/';
        }
        else{
          toast.error(error);
        }
    //   window.location.href = "/unitwise/authtoken"; 
      
  };
    const handleGoogle= async(e) => {
      e.preventDefault();
      
      const {auth,error} = await handleGoogleSignin();
      if(auth.length>0) {
        window.location.href='http://localhost:8080/';
        }
        else{
          toast.error(error);
        }
    //   window.location.href = "/unitwise/authtoken"; 
      
  };
    const handleGithub= async(e) => {
      e.preventDefault();
      
      const {auth,error} = await handleGithubSignin();
      if(auth.length>0) {
        window.location.href='http://localhost:8080/';
        }
        else{
          toast.error(error);
        }
    //   window.location.href = "/unitwise/authtoken"; 
      
  };
   
 
    return (
        <div className="flex Form-main justify-center items-center h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="m-2 flex gap-2 items-center justify-center">
                    <img src="https://apiswan.github.io/downloads/unitwise-logo.png" alt="image" />
                    {/* <span className="text-[25px] text-black">UnitWise</span> */}
                </div>
                {isSignIn ? (
                    <form className="mt-8 space-y-6" id="signin" onSubmit={handleSubmit2}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="text-black ml-1">
                                    Email
                                </label>
                                <input ref={email} id="email" name="email" type="email" autoComplete="email" required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-black ml-1 mt-2 flex justify-between">
                                    Password
                                    <div
                                        className="forgetPassword text-black md:hover:text-[#3a448c] flex cursor-pointer text-right "
                                        onClick={e=>handleforgetPassword(email.current.value)}
                                    >
                                        Forgot your password?
                                    </div>
                                </label>
                                <input name="password" type="password" autoComplete="current-password" required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm "
                                    placeholder="Password" />
                            </div>

                            <div>
                                <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#060A29] hover:bg-[#3a448c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-5">
                                    Sign in
                                </button>
                                <div className="text-black flex gap-2 justify-center mt-3">
                                    <span className="text-black">-------------------</span>
                                    <span className="text-black">Or sign in with </span>
                                    <span className="text-black">-------------------</span>
                                </div>
                                <div className="flex gap-2 mt-3 ">
                                    <button id="googleLogin" type="button" onClick={handleGoogle}
                                        className="group relative w-full gap-1 flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md">
                                        <span className="flex text-sm items-center justify-center text-black gap-2">
                                            <img className="w-[30px] rounded-full  h-[30px]" src="/google.png"
                                                alt="" />Google
                                        </span>
                                    </button>
                                    <button id="githublogin" type="button" onClick={handleGithub}
                                        className="group relative w-full gap-1 flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md">
                                        <span className="flex text-sm items-center justify-center text-black gap-2">
                                            <img className="w-[30px] rounded-full  h-[30px]" src="/github.png" alt="" />
                                            Github
                                        </span>
                                    </button>
                                </div>
                                <div className="toggle flex justify-center mt-2">
                                    <span className="up cursor-pointer text-black" onClick={handleToggleForm}>
                                        Don't have an account? Sign up
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                ) : (
                  <form className="mt-8 space-y-6" id="signup" onSubmit={handleSubmit1}>
                  <input type="hidden" name="remember" value="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                          <label htmlFor="email-address" className="text-black ml-1">
                              Email
                          </label>
                          <input id="email" name="email" type="email" autoComplete="email" required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                              placeholder="Email address" />
                      </div>
                      <div>
                          <label htmlFor="password" className="text-black ml-1 mt-2 flex justify-between">
                              Password
                             
                          </label>
                          <input name="password" type="password" autoComplete="current-password" required
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm "
                              placeholder="Password" />
                      </div>
          
                      <div>
                          <button type="submit"
                              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#060A29] hover:bg-[#3a448c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-5">
                              Sign up
                          </button>
                          <div className="text-black flex gap-2 justify-center mt-3">
                                    <span className="text-black">-------------------</span>
                                    <span className="text-black">Or sign up with </span>
                                    <span className="text-black">-------------------</span>
                                </div>
                                <div className="flex gap-2 mt-3 ">
                                    <button id="googleLogin" type="button" onClick={handleGoogle}
                                        className="group relative w-full gap-1 flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md">
                                        <span className="flex text-sm items-center justify-center text-black gap-2">
                                            <img className="w-[30px] rounded-full  h-[30px]" src="/google.png"
                                                alt="" />Google
                                        </span>
                                    </button>
                                    <button id="githublogin" type="button" onClick={handleGithub}
                                        className="group relative w-full gap-1 flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md">
                                        <span className="flex text-sm items-center justify-center text-black gap-2">
                                            <img className="w-[30px] rounded-full  h-[30px]" src="/github.png" alt="" />
                                            Github
                                        </span>
                                    </button>
                                  </div>
                          <div className="toggle flex justify-center mt-2">
                              <span className="up cursor-pointer text-black" onClick={handleToggleForm}>
                                  Already have an account? Sign in
                              </span>
                          </div>
                      </div>
                  </div>
              </form>
                )}
                <ToastContainer toastStyle={{backgroundColor:'black'}} />
            </div>
        </div>
    );
};

export default Form;

