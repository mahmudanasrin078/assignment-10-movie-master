import React, { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";

const LoginPages = () => {
  //const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,

    // sendPasswordResetEmailFunc,
    setLoading,
    setUser,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  //console.log(location);

  // if (user){
  //   navigate('/')
  //   return
  //  }

  const emailRef = useRef(null);
  //const [email, setEmail] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    //console.log({ email, password });
    //
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        setLoading(false);
        // if (!res.user?.emailVerified) {
        //   toast.error("Your email is not verified.");
        //   return;
        // }

        setUser(res.user);
        navigate(from);

        toast.success("Login successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleLogin = () => {
    console.log("google login");
    signInWithEmailFunc()
      .then((res) => {
        console.log(res);
        setLoading(false);
        setUser(res.user);

        navigate(from);
        toast.success("Google Login Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log();
    navigate("/forgot-password-page", { state: { email } });

    // sendPasswordResetEmailFunc(email)
    //   .then((res) => {
    //     setLoading(false);
    //     toast.success("Check your email to reset password");
    //   })
    //   .catch((e) => {
    //     toast.error(e.message);
    //   });
  };
  //console.log(email);
  return (
    <div>
      <title>login</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-3xl font-bold my-4">Login your account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  ref={emailRef}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* password */}
                <div className="relative  w-[300px]">
                  <label className="label mb-2">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[9px] top-[39px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>
                {/* Divider */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="h-px w-16 bg-gray-200"></div>
                  <span className="text-sm text-gray-400">or</span>
                  <div className="h-px w-16 bg-gray-200 "></div>
                </div>

                {/* Google Signin */}

                <div className="my-3">
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer btn"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-5 h-5"
                    />
                    Continue with Google
                  </button>
                </div>
                {/* forget password */}
                <div>
                  <button
                    className="link link-hover cursor-pointer"
                    type="button"
                    onClick={handleForgetPassword}
                  >
                    <Link to="/forgot-password-page"> Forgot password?</Link>
                  </button>
                </div>

                {/* {error && <p className="text-red-500 text-xl">{error}</p>} */}

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
                <p className="font-semibold text-center mt-2">
                  Dont’t Have An Account ?{" "}
                  <Link to="/register-page" className="text-secondary">
                    Register
                  </Link>{" "}
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
