import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-lg shadow-xl bg-white p-6 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Close Button */}
            <Link
              to="/"
              className="absolute right-4 top-4 text-gray-400 hover:text-red-500 transition duration-300"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-center text-gray-700">
              Welcome Back
            </h3>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required.</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required.
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>

            {/* Signup Link */}
            <p className="text-center text-sm text-gray-500">
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline transition duration-300"
                onClick={() => {
                  document.getElementById("my_modal_3").close(); // Close the dialog
                }}
              >
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
