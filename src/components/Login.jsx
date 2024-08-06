import Header from "./Header";
import bg from "../../Public/bg/bg.jpg";
import { useState } from "react";
const Login = () => {
  const [isSignForm, seIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    seIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bg} alt="Bg" />
      </div>
      <form className="absolute p-12  text-white w-3/12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-800 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800 rounded"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm
            ? "New to Netflix? Sign Up Now"
            : "Already a Registred Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
