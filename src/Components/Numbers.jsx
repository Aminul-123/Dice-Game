import React from 'react'

function Numbers() {

        const arrNum=[1,2, 3, 4, 5,6];
  return (
   <>
   <div className='mt-[2rem] 
   md:ml-[55%] md:mt-[-25rem]  '>
    <h1 className='ml-[30%] mb-4 text-lg sans-serif'>Select Number</h1>
    <div className='flex flex-wrap gap-x-8 gap-y-3 justify-center ml-12 mr-12'>
        <div className='h-[50px] w-[50px] text-white bg-pink-400 rounded-3xl
        text-center pt-2  text-2xl
        '  >1</div>

<div className='h-[50px] w-[50px] text-white bg-pink-400 rounded-3xl
        text-center pt-2  text-2xl
        '>2</div>

<div className='h-[50px] w-[50px] text-white bg-pink-400 rounded-3xl
        text-center pt-2  text-2xl
        '>3</div>

<div className='h-[50px] w-[50px] text-white bg-pink-400 rounded-3xl
        text-center pt-2  text-2xl
        '>4</div>

<div className='h-[50px] w-[50px] text-white bg-pink-400 rounded-3xl
        text-center pt-2  text-2xl
        '>5</div>

<div className='h-[50px] w-[50px] text-white bg-pink-400 rounded-3xl
        text-center pt-2  text-2xl
        '>6</div>



    </div>
   </div>
   </>
  )
}

export default Numbers;