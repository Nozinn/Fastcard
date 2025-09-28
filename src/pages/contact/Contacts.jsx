import React from 'react'

const Constact = () => {
  return (
    <section className='px-[20px] md:px-[135px] py-[40px] md:py-[120px] lg:py-[80px]'>
      <div className='w-[100%] flex flex-wrap gap-[40px] md:justify-between pb-[100px]'>
        <article className='w-[100%] md:w-[350px] rounded-[4px] shadow-2xl p-[20px] md:p-[40px]'>
          <div className='flex flex-col gap-[24px] pb-[32px] border-b'>
            <div className='flex gap-[18px] items-center'>
              <button className='w-[50px] h-[50px] rounded-full bg-[#DB4444] flex justify-center items-center text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </button>
              <p className='text-[18px] font-medium'>Call To Us</p>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <p className='text-[14px]'>We are available 24/7, 7 days a week.</p>
              <p className='text-[14px]'>Phone: +8801611112222</p>
            </div>
          </div>
          <div className='flex flex-col gap-[24px] pt-[32px]'>
            <div className='flex gap-[18px] items-center'>
              <button className='w-[50px] h-[50px] rounded-full bg-[#DB4444] flex justify-center items-center text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

              </button>
              <p className='text-[18px] font-medium'>Write To US</p>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <p className='text-[14px]'>Fill out our form and we will contact you within 24 hours.</p>
              <p className='text-[14px]'>Emails: customer@exclusive.com</p>
              <p className='text-[14px]'>Emails: support@exclusive.com</p>
            </div>
          </div>
        </article>
        <article className='w-[100%] md:w-[800px] gap-[32px] rounded-[4px] shadow-2xl p-[20px] md:p-[40px] flex flex-col md:justify-between'>
          <div className='flex flex-wrap gap-[20px] md:justify-between'>
            <input type="text" className='w-[100%] md:w-[220px] h-[56px] rounded-[4px] border-[1px] border-gray-500 p-[12px]' placeholder='Name' />
            <input type="text" className='w-[100%] md:w-[220px] h-[56px] rounded-[4px] border-[1px] border-gray-500 p-[12px]' placeholder='Email' />
            <input type="text" className='w-[100%] md:w-[220px] h-[56px] rounded-[4px] border-[1px] border-gray-500 p-[12px]' placeholder='Phone' />
          </div>
          <div>
            <textarea name="" id="" className=' border-[1px] border-gray-500 w-[100%] h-[176px] resize-none p-[12px] rounded-[4px]' placeholder='Your Massage'>
            </textarea>
          </div>
          <div className='flex justify-end'>
            <button className='w-[215px] h-[56px] bg-[#DB4444] rounded-[4px] text-[white]'>
              Send Massage
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Constact