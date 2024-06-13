'use client'

import { useState } from 'react'
import Buttons from './components/Buttons'

const Page = () => {
  const [displayNum, setDisplayNum] = useState<number | string>(0)
  // const [clickedButtons, setClickedButton] = useState<string[] | number[]>([])
  // const handleClickedButton = (clickedButton: string | number) => {
  //   setClickedButton([...clickedButtons, clickedButton])
  // }
  const handleDisplayNum = (clickedButton: string) => {
    if (clickedButton === 'C' || clickedButton === 'AC') {
      setDisplayNum(0)
    } else {
      if (displayNum === 0) {
        const symbols = ['%', '/', '*', '-', '+', '=', '0']
        const newDisplayNum = symbols.includes(clickedButton) ? 0 : clickedButton
        setDisplayNum(newDisplayNum)
      } else {
        const newDisplayNum = `${displayNum} ${clickedButton}`
        setDisplayNum(newDisplayNum)
      }
    }
  }
  return (
    <div className='w-[450px] h-[600px] bg-gray-600 text-white border-solid border-2'>
      <div className='bg-gray-800 text-3xl text-right p-8 pt-24'>
        <span className=''>{displayNum}</span>
      </div>
      <div className='py-8 px-12'>
        <Buttons handleButtonClick={handleDisplayNum} />
      </div>
    </div>
  )
}

export default Page
