import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const { token, setToken, navigate, backendURL } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backendURL}/api/user/register`, {
          name,
          email,
          password,
        });

        if (response.status === 200) {
          toast.success("Registered ");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendURL}/api/user/login`, {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col  items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl ">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full px-3 py-2 border border-gray-800"
            type="text"
            placeholder="Name"
            required
          />
        )}

        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full px-3 py-2 border border-gray-800"
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-full px-3 py-2 border border-gray-800"
          type="password"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot Password</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => {
                setCurrentState("Login");
              }}
              className="cursor-pointer"
            >
              Login
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
