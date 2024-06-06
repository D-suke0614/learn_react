'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

type PropsType = {
  displayModal: boolean
  todoList: string[]
  handleDisplayModal: Dispatch<SetStateAction<boolean>>
  handleTodoList: Dispatch<SetStateAction<string[]>>
}

const CreateTodoModal = ({
  displayModal,
  todoList,
  handleDisplayModal,
  handleTodoList,
}: PropsType) => {
  const [todoName, setTodoName] = useState<string>('')
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTodoName(value)
  }

  const createTodo = () => {
    if (!todoName) {
      setIsEmpty(true)
      return
    }
    handleTodoList([...todoList, todoName])
    handleDisplayModal(false)
  }

  return (
    <>
      {displayModal ? (
        <div className='w-screen h-screen fixed top-0 left-0 flex justify-center bg-gray-500/75 z-10'>
          <div className='w-[350px] h-[250px] p-10 bg-white/100 mt-72 border-solid border-2 rounded-md flex flex-col gap-5'>
            <h3 className='text-xl font-bold text-lime-600'>新規登録</h3>
            <input className='border-solid border-2 h-10 p-2' type='text' onChange={handleInput} />
            {isEmpty ? <p className='text-red-500 font-bold'>タスク名を入力してください</p> : <></>}
            <div className='flex items-center justify-end gap-2'>
              <button
                className='px-3 py-2 bg-slate-400 rounded-md'
                type='button'
                onClick={() => {
                  handleDisplayModal(false)
                  setIsEmpty(false)
                  setTodoName('')
                }}
              >
                キャンセル
              </button>
              <button
                className='px-3 py-2 bg-lime-300 rounded-md'
                type='button'
                onClick={createTodo}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default CreateTodoModal
