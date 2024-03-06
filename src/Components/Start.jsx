import React from 'react'
import dice from "../0325_double-dice-game_PNG.png"

function Start() {
  return (
    <div>

    <img src={dice} alt="dice img" 
    className='mt-[6rem] w-[16rem] ml-[3rem] 
    md:w-[30rem] md:ml-[10%] md:mt-[10%]
    
    '/>
    <div className='md:ml-[52%] md:mt-[-17rem] transparent
    '>
        <h1 className='text-4xl
        ml-16 mt-8
        md:text-[5rem] md:mb-8
        
        '>DICE GAME</h1>



        <button className=' w-[7rem] h-[2rem]
        bg-pink-400 ml-[30%] mt-6 text-black
        md:w-[9rem] md:h-[2.5rem] md:text-xl
        
        '>START NOW</button>
    </div>
    </div>
  )
}

export default Start