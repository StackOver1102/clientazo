"use client";
import { Link } from "@/i18n/routing";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/assets/images/login-bg.webp')" }}
    >
      <div className="relative w-[450px] p-8 bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-200 w-36 h-16 flex justify-center items-center rounded-b-lg shadow-md">
          <span className="text-black text-2xl font-bold">Login</span>
        </div>
        <form className="space-y-6">
          <div className="relative flex flex-col space-y-2">
            <input
              type="text"
              id="user"
              required
              className="w-full px-4 py-3 text-lg text-black bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="user"
              className="absolute top-0 left-4 -translate-y-6 text-sm bg-gray-200 px-2 rounded-full"
            >
              Username
            </label>
          </div>

          <div className="relative flex flex-col space-y-2">
            <input
              type="password"
              id="pass"
              autoComplete="off"
              className="w-full px-4 py-3 text-lg text-black bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="pass"
              className="absolute top-0 left-4 -translate-y-6 text-sm bg-gray-200 px-2 rounded-full"
            >
              Password
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-black">
                Remember me
              </label>
            </div>
            <Link href="/forgotpassword" className="text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <div>
            <input
              type="submit"
              value="Login"
              className="w-full py-3 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center">
            <span className="text-black">
              Don&apos;t have an account?
              <Link href="/register" className="text-blue-500 hover:underline ml-2">
                Register
              </Link>
            </span>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
