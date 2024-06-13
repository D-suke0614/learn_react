'use client'

import { useState } from 'react'
import Buttons from './components/Buttons'

const Page = () => {
  const [displayNum, setDisplayNum] = useState<string>('0')
  const calculation = (splitInputValue: string[]): number | string => {
    const ope = splitInputValue[1]
    const left = Number(splitInputValue[0])
    const right = Number(splitInputValue[2])
    switch (ope) {
      case '+':
        return left + right
      case '-':
        return left - right
      case '*':
        return left * right
      case '/':
        return left / right
      case '%':
        return left % right
    }
    return 'Error'
  }

  const handleDisplayNum = (clickedButton: string) => {
    if (clickedButton === 'C' || clickedButton === 'AC') {
      setDisplayNum('0')
    } else {
      if (displayNum === '0') {
        const invalidValues = ['%', '/', '*', '-', '+', '=', '0']
        const newDisplayNum = invalidValues.includes(clickedButton) ? '0' : clickedButton
        setDisplayNum(newDisplayNum)
      } else {
        if (clickedButton === '=') {
          const inputValue = displayNum
          const splitInputValue = inputValue.split(' ')
          const result = calculation(splitInputValue)
          setDisplayNum(result?.toString())
        } else {
          const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
          const newDisplayNum = number.includes(clickedButton)
            ? `${displayNum}${clickedButton}`
            : `${displayNum} ${clickedButton} `
          setDisplayNum(newDisplayNum)
        }
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
