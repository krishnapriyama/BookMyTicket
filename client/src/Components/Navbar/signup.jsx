import React from 'react'
import { useFormik } from 'formik'

const signup = () => {

 const [showLogin, setShowLogin] = useState(false);

 

  return (
    <div>
      <form>
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome New!</h2>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password..."
          />
        </div>
        <button
          className="w-full px-4 py-2 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
          type="submit"
        >
          Register
        </button>
      </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?{' '}
          <button
            className="text-red-500 hover:text-red-700 font-bold focus:outline-none"
            onClick={() => setShowSignup(false)}
          >
            Login here.
          </button>
        </p>
    </div>
  )
}

export default signup
