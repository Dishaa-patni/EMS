import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password) //jaise hi form submit kiya hain handlelogin ke andar email and password pass kar diye , here a child is passing data to parent , now what will happen this handleLogin function is checked
    console.log("email is", email);
    console.log("password is", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-10 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center "
        >
          <input
            required //this is required without this the form will not be submitted
            className="  bg-transparent text-xl outline-none border-2 border-emerald-600 rounded-full px-6 py-2 placeholder:text-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email"
          />
          <input
            required
            type="password"
            className=" bg-transparent text-xl outline-none border-2 border-emerald-600 rounded-full px-6 py-2 mt-5 placeholder:text-gray-400 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password"
          />
          <button className=" mt-5 text-white outline-none font-semibold border-none hover:bg-emerald-700 bg-emerald-600  px-6 py-2 w-full rounded-full text-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
