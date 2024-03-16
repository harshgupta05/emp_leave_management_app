import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { Auth } from "../Auth/Auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const userName = useRef(null);
  const password = useRef(null);

  const handelButtonClick = () => {
    const message = Auth(email.current.value, password.current.value);
    // console.log(message);
    if (message == null) {
      setErrorMessage("Invalid email or Password");
      return;
    }

    dispatch(
      addUser({
        email: email.current.value,
        name: userName.current.value,
        role: message?.role,
        id: message?.id,
      })
    );

    if (message.role === "Employee") {
      navigate("/employee");
    } else if (message.role === "Manager") {
      navigate("/manager");
    } else if (message.role === "Hr") {
      navigate("/hr");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className="pt-32 flex justify-center text-black">
        <form
          className="bg-blue-700 shadow shadow-gray-700 bg-opacity-20 h-2/12  w-3/12 px-12 py-10 placeholder-black  text-black rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-3xl py-4">Sign In</h1>

          <input
            ref={userName}
            type="text"
            placeholder="Username"
            className="p-2 my-4 w-full bg-transparent placeholder-black text-black appearance-none border-purple-900 border-solid border rounded-lg"
          ></input>

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-transparent placeholder-black  text-black appearance-none border-purple-900 border-solid border rounded-lg"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-transparent placeholder-black text-black border-purple-900 border-solid border rounded-lg appearance-none"
          ></input>
          <p className="text-red-500 font-bold">{errorMessage}</p>

          <button
            className="p-2 my-4 bg-blue-600 w-full rounded-lg"
            onClick={handelButtonClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
