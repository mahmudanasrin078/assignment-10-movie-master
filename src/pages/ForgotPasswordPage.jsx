//------------------------------
import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const location = useLocation();
  const { sendPasswordResetEmailFunc, setLoading } = useContext(AuthContext);

  //  email passed Login page

  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    sendPasswordResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast.success("Check your email ");
        //   user to Gmail
        window.location.href = "https://mail.google.com";
      })
      .catch((err) => toast.error(err.message));
  };

  //---------------------

  return (
    <div>
      <title>Forgot/Password/Page</title>
      <div className="hero min-h-screen bg-base-200">
        <div className="card bg-base-100 shadow-2xl w-full max-w-sm p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Forgot Password
          </h2>
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-neutral w-full">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
