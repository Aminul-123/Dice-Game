import React from 'react'
import Score from "./Score"
import Dice from './Dice';
import Numbers from './Numbers';
import Rules from './Rules';

function Play() {
  return (
   <>
   <Score/>
   <Dice/>
   <Numbers/>
   <Rules/>
   </>
  )
}

export default Play;