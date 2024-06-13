'use client'

import { useState } from 'react'
import Buttons from './components/Buttons'

const Page = () => {
  const [displayNum, setDisplayNum] = useState<number | string>(0)
  // const [clickedButtons, setClickedButton] = useState<string[] | number[]>([])
  // const handleClickedButton = (clickedButton: string | number) => {
  //   setClickedButton([...clickedButtons, clickedButton])
  // }
  return (
    <div className='w-[450px] h-[600px] bg-gray-600 text-white border-solid border-2'>
      <div className='bg-gray-800 text-3xl text-right p-8 pt-24'>
        <span className=''>{displayNum}</span>
      </div>
      <div className='py-8 px-12'>
        <Buttons />
      </div>
    </div>
  )
}

export default Page
