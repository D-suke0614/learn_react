'use client'

import Image from 'next/image'

type PropsType = {
  data: { name: string; birthday: string; phone: string; image: string }
}

const Card = ({ data }: PropsType) => {
  return (
    <div className='w-[350px] h-[300px] border-solid border-2 shadow-lg flex flex-col items-center'>
      <div className='h-[130px] w-[130px] my-[20px] rounded-[50%] bg-slate-400'>
        <Image
          width={130}
          height={130}
          src={data.image ? data.image : '/profile-image.jpg'}
          alt='profile-image'
          className='h-full rounded-[50%]'
        />
      </div>
      <div className='h-[150px] w-full px-16 flex flex-col items-center justify-around'>
        <h3>{data.name}</h3>
        <span className='w-full text-left'>お誕生日 : {data.birthday}</span>
        <span className='w-full text-left'>電話番号 : {data.phone}</span>
      </div>
    </div>
  )
}

export default Card
