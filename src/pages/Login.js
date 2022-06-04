import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { server_address } from "../contant";

function Login({setInfo}) {
  const navigate=useNavigate()
  const [user,setUser]=React.useState({});
  const inputHandler=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })

  }
  console.log("user",user);
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post(`${server_address}/login`, user)
    .then((res)=>{
      console.log('res',res);
      localStorage.setItem('userInfo',JSON.stringify(user))
      setInfo(true)
      navigate('/students')
    
    })
    .catch((error)=>{
      console.log("error",error)
    })
  }
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="">
        <div className="w-full ">
          <div className="p-9">
            {/* <img src="/img/linktree-logo.png" className="w-[170px] pb-14" /> */}
          </div>
          <div className="border w-[40%] rounded-2xl pb-6 mx-auto">
            <form onSubmit={submitHandler} className="flex flex-col gap-7 py-7 w-10/12  mx-auto">
              <h2 className="text-3xl text-center py-4">
                Log into your account
              </h2>
              <input
                className="text-base bg-[#f5f6f8] py-3 rounded-lg px-3"
                placeholder="Username" onChange={inputHandler} required 
                name="username"
              />
              <input
                className="text-base bg-[#f5f6f8] py-3 rounded-lg px-3"
                type="password"
                placeholder="Password"
                onChange={inputHandler} required
                name="password"
              />
              <button className="text-[#fff] py-3 font-semibold rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
