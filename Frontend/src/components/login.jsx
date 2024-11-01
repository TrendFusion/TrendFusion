import React from 'react'

function Login() {
  return (
    <>
    <div className='flex'>
      <div className=''>
        <img className='h-[100vh] w-[60vw]' src="./../../Billie.jpg" alt="Billie Eilish" />
      </div>

      <div className='w-[40vw] mt-32'>
        <h1 className='text-black font-bold text-5xl text-center'>Sign In</h1>

        <div className='mt-10 mx-20'>
          <div>
            <label for="email" className="sr-only">
                Email
              </label>
                <div className="relative rounded-lg border border-black">
                  <input required="" type="text" className="w-full rounded-lg bg-base-200 border-gray-300 p-4 pe-12 text-sm shadow-sm bg-gray-200" placeholder="Enter email/ phone number" name="username" value=""/><span className="absolute inset-y-0 end-0 grid place-content-center px-4"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg></span>
          </div>
        </div>

        <div className='mt-5'>
          <div>
              <label for="email" className="sr-only">Email</label>
                <div className="relative rounded-lg border border-black">
                    <input required="" type="text" className="w-full rounded-lg bg-base-200 border-gray-300 p-4 pe-12 text-sm shadow-sm bg-gray-200" placeholder="Enter passowrd" name="username" value=""/>
                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          </svg>
                      </span>
                </div>
            </div>
    
          </div>

        </div>


        {/* forgot passowrd */}

        <div className='flex justify-between items-center px-20 py-5'>
          <div>
            <a className='text-blue-500 underline text-sm' href="">Forgot password?</a>
          </div>
          <div className='flex items-center'>
            <label htmlFor="" className="mr-2 text-sm">Don't have an account?</label>
            <a className='underline text-red-500 text-sm' href="http://">Signup</a>
          </div>
        </div>


        <div class="w-full max-w-xs mx-auto p-4">
          <button class="bg-blue-500 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-slate-500 hover:text-white ">
            Sign In
          </button>
        </div>




      </div>
      
    </div>


    </>
  )
}

export default Login