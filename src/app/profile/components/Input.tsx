'use client'

type IdType = 'name' | 'birthday' | 'phone' | 'image'

type PropsType = {
  id: IdType
  label: string
  type: 'text' | 'date' | 'file'
  handleChange: (id: IdType, value: string) => void
}

const Input = ({ id, label, type, handleChange }: PropsType) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id as IdType
    if (id === 'image') {
      const value: string = e.target.files ? window.URL.createObjectURL(e.target.files[0]) : ''
      handleChange(id, value)
    } else {
      const value = e.target.value
      handleChange(id, value)
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className='w-full border-solid border-2 p-1'
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Input
