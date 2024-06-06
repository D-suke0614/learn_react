'use client'
import { useState } from 'react'
import CreateTodoModal from './components/CreateTodoModal'
import TodoList from './components/TodoList'

const Page = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false)
  const [todoList, setTodoList] = useState<string[]>(['sample todo'])

  return (
    <div className='w-[450px] h-[600px] border-solid border-2'>
      <div className='h-[80px] bg-lime-300 py-6 text-center flex items-center justify-around'>
        <h2 className='font-bold text-xl'>TODO</h2>
        <button className='hover:opacity-60' type='button' onClick={() => setDisplayModal(true)}>
          新規登録
        </button>
      </div>

      <TodoList todoList={todoList} handleTodoList={setTodoList} />
      <CreateTodoModal
        displayModal={displayModal}
        handleDisplayModal={setDisplayModal}
        todoList={todoList}
        handleTodoList={setTodoList}
      />
    </div>
  )
}

export default Page
