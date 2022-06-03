import React from "react";

function Login() {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="">
        <div className="w-full ">
          <div className="p-9">
            {/* <img src="/img/linktree-logo.png" className="w-[170px] pb-14" /> */}
          </div>
          <div className="border w-[40%] rounded-2xl pb-6 mx-auto">
            <div className="flex flex-col gap-7 py-7 w-10/12  mx-auto">
              <h2 className="text-3xl text-center py-4">
                Log into your account
              </h2>
              <input
                className="text-base bg-[#f5f6f8] py-3 rounded-lg px-3"
                placeholder="Username"
              />
              <input
                className="text-base bg-[#f5f6f8] py-3 rounded-lg px-3"
                type="password"
                placeholder="Password"
              />
              <button className="text-[#fff] py-3 font-semibold rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
