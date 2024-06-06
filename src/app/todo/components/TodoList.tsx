'use client'

import { Dispatch, SetStateAction } from 'react'

type PropsType = {
  todoList: string[]
  handleTodoList: Dispatch<SetStateAction<string[]>>
}

const TodoList = ({ todoList, handleTodoList }: PropsType) => {
  const deleteTodo = (targetIdx: number) => {
    handleTodoList(todoList.filter((_, idx) => idx !== targetIdx))
  }
  return (
    <div className='h-[520px] overflow-y-scroll'>
      <ul className='px-20 py-10'>
        {todoList.map((todo, idx) => (
          <li key={todo} className='mb-3 flex justify-between items-center'>
            <div>
              <input className='mr-5' type='checkbox' />
              <span>{todo}</span>
            </div>
            <button
              className='px-2 rounded-[50%] hover:opacity-60 hover:bg-gray-300'
              type='button'
              onClick={() => deleteTodo(idx)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
