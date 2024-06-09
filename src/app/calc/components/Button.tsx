'use client'

type PropsType = {
  text: number | string
}

const Button = ({ text }: PropsType) => {
  return <button className='py-5 px-7 rounded-[50%] bg-gray-400'>{text}</button>
}

export default Button
