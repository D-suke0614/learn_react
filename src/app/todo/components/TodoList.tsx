'use client'

const TodoList = () => {
  return (
    <div className='h-[520px] overflow-y-scroll'>
      <ul className='px-20 py-10'>
        <li className='mb-3 flex justify-between items-center'>
          <div>
            <input className='mr-5' type='checkbox' />
            <span>todo1</span>
          </div>
          <button className='px-2 rounded-[50%] hover:opacity-60 hover:bg-gray-300' type='button'>
            X
          </button>
        </li>
      </ul>
    </div>
  )
}

export default TodoList
