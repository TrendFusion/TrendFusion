import React from 'react'

function Signup() {
  return (
    <>
         <div className='flex'>
      <div>
        <img className='h-[100vh] w-[60vw]' src="./../../Billie.jpg" alt="Billie Eilish" />
      </div>

      <div className='w-[40vw] mt-[13vh]'>
        <h1 className='text-black font-bold text-5xl text-center'>Sign Up</h1>


        {/* multiple choice buttons */}
        <div className='flex justify-between items-center pt-3 mt-4 mx-32'>
          <div>
              <input type="radio" name="usertype" id="" value="buyer" />
              <label className='px-2 text-lg italic font-bold' htmlFor="">Buyer</label>  
          </div>
          <div>
              <input type="radio" name="usertype" id="" value="seller" />
              <label className='px-2 text-lg italic font-bold' htmlFor="">Seller</label>  
          </div>
        </div>



        <div className='mt-5 mx-20'>
          <div>
              <label for="name" className="sr-only">
                  Name
                </label>
                  <div className="relative rounded-lg border border-black">
                    <input required="" type="text" className="w-full rounded-lg bg-base-200 border-gray-300 p-4 pe-12 text-sm shadow-sm bg-gray-200" placeholder="Enter your name" name="username"/><span className="absolute inset-y-0 end-0 grid place-content-center px-4"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg></span>
            </div>
          </div>


          <div className='mt-5'>
            <label for="email" className="sr-only">
                Email
              </label>
                <div className="relative rounded-lg border border-black">
                  <input required="" type="text" className="w-full rounded-lg bg-base-200 border-gray-300 p-4 pe-12 text-sm shadow-sm bg-gray-200" placeholder="Enter email/ phone number" name="username"/><span className="absolute inset-y-0 end-0 grid place-content-center px-4"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg></span>
          </div>
        </div>

        <div className='mt-5'>
          <div>
              <label for="email" className="sr-only">Email</label>
                <div className="relative rounded-lg border border-black">
                    <input required="" type="text" className="w-full rounded-lg bg-base-200 border-gray-300 p-4 pe-12 text-sm shadow-sm bg-gray-200" placeholder="Enter passowrd" name="username"/>
                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          </svg>
                      </span>
                </div>
            </div>
    
          </div>

        </div>




        {/* forgot passowrd */}

        <div className='flex justify-end items-center px-20 py-5'>
          <div className='flex items-center'>
            <label htmlFor="" className="mr-2 text-xs">Already have an account?</label>
            <a className='underline text-red-500 text-sm' href="http://">Sign In</a>
          </div>
        </div>


        <div class="mx-20">
          <button class="bg-blue-500 text-white font-bold py-3 px-4 rounded-lg w-full hover:bg-slate-500 hover:text-white ">
            Sign Up
          </button>
        </div>




      </div>
      
    </div>

    </>
  )
}

export default Signup