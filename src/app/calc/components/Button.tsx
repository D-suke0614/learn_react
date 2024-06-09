'use client'

type PropsType = {
  text: number | string
}

const Button = ({ text }: PropsType) => {
  return (
    <button className='p-8 rounded-[50%] bg-gray-400 relative'>
      <span className='absolute translate-y-[-50%] translate-x-[-50%]'>{text}</span>
    </button>
  )
}

export default Button
