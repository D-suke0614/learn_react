'use client'

import Button from './Button'

const BUTTONS_LABEL = [
  ['AC', 'C', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]

type PropsType = {
  handleButtonClick: (value: string) => void
}

const Buttons = ({ handleButtonClick }: PropsType) => {
  return (
    <div className='flex flex-col justify-between gap-4 font-bold'>
      {BUTTONS_LABEL.map((buttons) => (
        <div key={buttons[0]} className='flex items-center justify-start gap-8'>
          <Button label={buttons[0]} handleButtonClick={handleButtonClick} />
          <Button label={buttons[1]} handleButtonClick={handleButtonClick} />
          <Button label={buttons[2]} handleButtonClick={handleButtonClick} />
          <Button label={buttons[3]} handleButtonClick={handleButtonClick} />
        </div>
      ))}
    </div>
  )
}

export default Buttons
