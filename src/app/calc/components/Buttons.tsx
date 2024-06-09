'use client'

import Button from './Button'

const BUTTONS_TEXT = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]

const Buttons = () => {
  return (
    <div className='flex flex-col justify-between gap-4 font-bold'>
      {BUTTONS_TEXT.map((buttons) => (
        <div key={buttons[0]} className='flex items-center justify-around'>
          <Button text={buttons[0]} />
          <Button text={buttons[1]} />
          <Button text={buttons[2]} />
          <Button text={buttons[3]} />
        </div>
      ))}
    </div>
  )
}

export default Buttons