import React from 'react'
import Base from "../components/Base";
import {Link} from "react-router-dom";
import {ReactComponent as LoginSVG} from "../assets/undraw_secure_login_pdn4.svg"

const Login = () => {
  return (
    <Base>

<div className="flex">

  <div className=" bg-blue-50 h-[100vh] pt-[100px] pr-[100px] hidden lg:block">
  <LoginSVG/>
  </div>


    <div className="container mx-auto mt-[100px]">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-600 ">
            Sign in
          </h1>
          <p className="text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <div className="m-7">
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600"
                >
                  Password
                </label>
                <Link
                  to="forgot-password"
                  className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 "
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600"
              >
                Sign in
              </button>

              <button
                type="reset"
                className="w-full px-1 py-2 my-2 text-white bg-gray-900 rounded-md focus:bg-gray-800 focus:outline-none hover:bg-gray-800"
              >
                Reset
              </button>

            </div>
            <p className="text-sm text-center text-gray-400">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
              >
                Sign up
              </Link>
              
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>


    </Base>

  )
}

export default Login