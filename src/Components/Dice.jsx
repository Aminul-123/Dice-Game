import React from 'react'

function Dice() {
  return (
   <>
   <div className='ml-[23%] mt-4 md:ml-[40%]'>
   <img src="nothing" alt="Dice Img" className='h-[5rem] w-[5rem] bg-black ml-12 mb-2
   md:w-[10rem] md:h-[10rem] md:mb-4
   ' />
   <h2 className='ml-6 md:mb-6
   md:ml-16 md:font-semibold
   '>Click on Dice to roll</h2>
   <button className='ml-12 h-[1.7rem] w-[6rem] bg-red-300
  md:w-[7rem] md:h-[2rem] md:ml-16 outline-none
   '>Reset</button>
   </div>
   </>
  )
}

export default Dice