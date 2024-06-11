'use client'

import { useRef, useState } from 'react'

const MIN_TO_MS = 60000
const SEC_TO_MS = 1000

export default function Page() {
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [buttonText, setButtonText] = useState<'Start' | 'Pause' | 'Continue'>('Start')
  const minutesRef = useRef<HTMLInputElement>(null!)
  const secondsRef = useRef(null)

  const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = Number(e.target.value)
    if (isNaN(minutes)) return
    setMinutes(minutes)
    console.log(minutes)
  }

  const handleSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seconds = Number(e.target.value)
    if (isNaN(seconds)) return
    setSeconds(seconds)
  }

  const countDown = () => {}

  const handleStart = () => {
    switch (buttonText) {
      case 'Start':
        setButtonText('Pause')
        setTimeLeft(minutes * MIN_TO_MS + seconds * SEC_TO_MS)
        break
      case 'Pause':
        setButtonText('Continue')
        break
      case 'Continue':
        setButtonText('Pause')
        break
    }
    console.log('timeLeft', timeLeft)
  }
  const handleReset = () => {
    setMinutes(0)
    setSeconds(0)
    setButtonText('Start')
  }

  return (
    <div>
      <div>
        <input ref={minutesRef} placeholder='mm' value={minutes} onChange={handleMinutes} />
        <input ref={secondsRef} placeholder='ss' value={seconds} onChange={handleSeconds} />
      </div>
      <div>
        {/* 状況に合わせて変化するStart -> Pause -> Continue */}
        <button onClick={handleStart}>{buttonText}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
