'use client'

type PropsType = {
  label: number | string
}

const Button = ({ label }: PropsType) => {
  const handleClick = (e: any) => {
    const value = e.currentTarget.value
  }

  return (
    <>
      {label != null ? (
        <button
          className='p-8 rounded-[50%] bg-gray-400 relative'
          onClick={handleClick}
          value={label}
        >
          <span className='absolute translate-y-[-50%] translate-x-[-50%]'>{label}</span>
        </button>
      ) : (
        <></>
      )}
    </>
  )
}

export default Button
