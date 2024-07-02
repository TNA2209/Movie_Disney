
function Form() {
  return (
    <div className="bg-red-200 px-20 py-20 rounded-3xl border-2 border-gray-400">
      <h1 className="text-5xl font-semibold text-black">Welcome</h1>
      <p className="font-medium text-lg text-gray-700 mt-4">welcome! Please enter your details</p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium text-gray-700" htmlFor="">Email</label>
          <input className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent" placeholder="Enter your email"/>
        </div>
        <div>
          <label className="text-lg font-medium text-gray-700" htmlFor="">Password</label>
          <input className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent" placeholder="Enter your password"/>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div >
            <input type="checkbox" id="remember"/>
            <label className="ml-2 font-medium text-[14px] text-black" htmlFor="remember">Remember for 30 days</label>
          </div>
          <button className=" flex justify-end font-medium text-[14px] text-gray-700">Forgot password</button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-black text-lf font-bold">Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Form