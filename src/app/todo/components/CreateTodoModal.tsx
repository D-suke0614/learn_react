'use client'

import React from 'react'

type PropsType = {
  displayModal: boolean
}

const CreateTodoModal = ({ displayModal }: PropsType) => {
  return (
    <>
      {displayModal ? (
        <div className='w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-75'></div>
      ) : (
        <></>
      )}
    </>
  )
}

export default CreateTodoModal
