import React, { useState } from 'react';
import { useFormik } from 'formik';


const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  function handlesignup() {
    setShowRegister(true)
  }

  return (
    <>
        <div>
          <form>
            {/* Login */}
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back!</h2>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none  focus:border-red-500"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full px-4 py-2 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
              type="submit"
            >
              Login
            </button>
          </form>

          
          <div>
            <h1 className="text-2xl font-bold mb-2 text-center mt-3">OR</h1>
            <button
              className="w-full px-4 py-2 text-lg font-bold text-black"
              type="submit"
            >
              Login with GoogleSignIn
            </button>
            <button
              className="w-full px-4 py-2 text-lg font-bold text-black"
              type="submit"
            >
              Login with OTP
            </button>
            <p className="mt-4 text-gray-600 text-center">
              Don't have an account yet?{' '}
              <button
                className="text-red-500 hover:text-red-700 font-bold focus:outline-none"
                onClick={handlesignup}
              >
                Register here.
              </button>
            </p>
          </div>
        </div>
    </>
  );
};

export default Login;