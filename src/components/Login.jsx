import React from "react";
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
    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        toast.success("Logged in Successfully");
        
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        document.getElementById("my_modal_2").close();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div className="mt-5">
            <label className="input validator">
              <input
                type="email"
                placeholder="Enter Your email"
                {...register("email", { required: true })}
                required
              />
            </label>
            {errors.email && (
              <span className="text-sm text-red-500">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="input validator">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                required
              />
            </label>
            {errors.password && (
              <span className="text-sm text-red-500">Password is required</span>
            )}
          </div>

          {/* Button */}
          <div className="mt-5 flex justify-between items-center">
            <button type="submit" className="btn btn-success">Login</button>
            <span>
              Not registered?{" "}
              <a className="text-blue-300 underline" href="/signup">
                Create Account
              </a>
            </span>
          </div>
        </form>

        {/* Close Button */}
        <form method="dialog" className="mt-4 text-right">
          <button className="btn">Close</button>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
