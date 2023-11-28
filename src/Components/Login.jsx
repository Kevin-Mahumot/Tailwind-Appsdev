/*Connected sa Navbar */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Automatically show the modal when the component mounts
    setShowModal(true);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Blurred Background */}
      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-70 backdrop-filter backdrop-blur-md ${showModal ? 'visible' : 'hidden'}`}>
        {/* Login Card Modal */}
        <div className="bg-black bg-opacity-75 p-8 rounded-2xl max-w-md w-full pt-11 pb-11">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">LO<span className='text-red-600 font-bold'>G</span>IN</h2>
          <form>
            <div className="mb-4 pt-5 relative">
              <FontAwesomeIcon icon={faUser} className="absolute top-9 left-3 text-gray-500" />
              <input
                className="border rounded-3xl w-full py-3 px-3 pl-10 text-black focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                autoFocus
              />
            </div>
            <div className="mb-4 pt-1 relative">
              <FontAwesomeIcon icon={faLock} className="absolute top-5 left-3 text-gray-500" />
              <input
                className="border rounded-3xl w-full py-3 px-3 pl-10 text-black focus:outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="absolute top-5 right-3 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="flex items-center justify-between mb-4 pb-5">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-white">Remember me</span>
              </div>
              <button type="button" className="text-sm text-white hover:underline focus:outline-none">
                Forgot password?
              </button>
            </div>
            <button
              className="bg-red-500 text-white px-40 py-2 rounded-3xl hover:bg-red-700 focus:outline-none"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            Don't Have an Account?
            <button type="button" className="text-white font-bold hover:underline focus:outline-none">&nbsp;Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
