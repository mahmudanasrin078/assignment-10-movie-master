import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";

const RegisterPage = () => {
  const [show, setShow] = useState(false);

  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setLoading,
    logOutUserFunc,
    setUser,
    signInWithEmailFunc,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;

   // console.log({ email, password, photoURL, displayName });

    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    //console.log(regExp.test(password));

    if (!regExp.test(password)) {
      toast.error(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    //console.log(e.target);

    //create user

    //createUserWithEmailAndPassword(auth, email, password)
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        // update Profile

        updateProfileFunc(displayName, photoURL)
          .then(() => {
            // email verification

            sendEmailVerificationFunc()
              .then((res) => {
                console.log(res);
                setLoading(false);

                //logout user process
                logOutUserFunc().then(() => {
                  toast.success(" Register success fully. Check your email.");
                  setUser(null);
                  navigate("/login-pages");
                });
              })
              .catch((e) => {
                toast.error(e.message);
              });
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e);
        console.log(e.code);
        if (e.code == "auth/email-already-in-use") {
          toast.error("User already exist in database.");
        } else if (e.code == "auth/password-already-in-use") {
          toast.error("Password at least 6 characters long.");
        } else {
          toast.error(e.message);
        }
      });
  };

 const handleGoogleLogin = () => {
    console.log("google login");
    signInWithEmailFunc()
      .then((res) => {
        console.log(res);
        setLoading(false);
        setUser(res.user);

       // navigate(from);
        toast.success("Google Login Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  
  return (
    <div>
      <title>Register-Page</title>
      <div className="bg-base-200 ">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col  ">
            <div className="text-center ">
              <h1 className="text-3xl font-bold my-4 ">
                Register your account
              </h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    required
                  />

                  {/* photo url */}
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    className="input"
                    placeholder="Photo URL"
                    required
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  {/* password */}

                  <div className="relative">
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
                      className="absolute right-[30px] top-[39px] cursor-pointer z-50"
                    >
                      {show ? <FaEye /> : <IoEyeOff />}
                    </span>
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

                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                  <p className="font-semibold text-center mt-2">
                    Already have an account ?{" "}
                    <Link to="/login-pages" className="text-secondary">
                      Login
                    </Link>{" "}
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
