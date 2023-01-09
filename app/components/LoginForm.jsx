import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";

import React from 'react'

const LoginForm = () => {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const {login} = useContext(AuthContext);
    
    function usernameChangeHandler(e) {
        // console.log(e.target.val)
        SetUsername(e.target.value);
    }
    
    function passwordChangeHandler(e){
        // console.log(e.target.val)
        SetPassword(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        // console.log("fff")
        // call login function fron context
        login({
            username,
            password
        });

    }
  return (
<div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
  <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-white">
      <div class="mb-8 flex flex-col items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkGF76GMgKd-rfofX3WtNPRVBL1w02IaqSihEpfH4Zg&s" width="150" alt="" srcset="" />
        <h1 class="mb-2 text-2xl">Instagram</h1>
        <span class="text-gray-300">Enter Login Details</span>
      </div>
      <form onSubmit={submitHandler}>
        <div class="mb-4 text-lg">
          <input onChange={usernameChangeHandler} class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="username " />
        </div>

        <div class="mb-4 text-lg">
          <input onChange={passwordChangeHandler} class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="password" />
        </div>
        <div class="mt-8 flex justify-center text-lg text-black">
          <button  type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default LoginForm