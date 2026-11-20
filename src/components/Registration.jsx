import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    let errs = {};
    let ok = true;

    if (!name) {
      errs.name = "Please enter your name";
      ok = false;
    }

    if (!email) {
      errs.email = "Please enter your email";
      ok = false;
    } else if (!email.includes("@")) {
      errs.email = "Please enter a valid email";
      ok = false;
    }

    if (!mobile) {
      errs.mobile = "Please enter your mobile number";
      ok = false;
    } else if (mobile.length !== 10) {
      errs.mobile = "Mobile number must be exactly 10 digits";
      ok = false;
    }

    if (!password) {
      errs.password = "Please enter your password";
      ok = false;
    } else if (password.length < 8) {
      errs.password = "Password must be at least 8 characters";
      ok = false;
    }

    if (!confirmPassword) {
      errs.confirmPassword = "Please confirm your password";
      ok = false;
    } else if (password !== confirmPassword) {
      errs.confirmPassword = "Passwords do not match";
      ok = false;
    }

    setErrors(errs);

    if (ok) {
      setSuccess("Registration Successful!");
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white w-full max-w-md p-8 rounded-lg ">
        <h1 className="text-2xl font-bold text-center ">Registration Form</h1>
        <form onSubmit={handleSubmit} >

          <div className="mb-4">
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded "
            />
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded "
            />
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter 10 digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          </div>

          {success && (
            <p className="text-green-600 text-center mb-3 font-medium">{success}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Registration;