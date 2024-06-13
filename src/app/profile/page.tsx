'use client'

import { useState } from 'react'
import Card from './components/Card'
import Input from './components/Input'

const Page = () => {
  type ProfileDataType = {
    name: string
    birthday: string
    phone: string
    image: string
  }
  const [profileData, setProfileData] = useState<ProfileDataType>({
    name: '',
    birthday: '',
    phone: '',
    image: '',
  })

  const handleChange = (id: 'name' | 'birthday' | 'phone' | 'image', value: string) => {
    setProfileData({ ...profileData, [id]: value })
  }

  return (
    <div>
      <h2 className='text-3xl font-bold text-center'>プロフィール自動生成</h2>
      <div className='flex mt-8 gap-8'>
        <Card data={profileData} />
        <div className='w-[350px] flex flex-col gap-4'>
          <Input id='name' type='text' label='お名前' handleChange={handleChange} />
          <Input id='birthday' type='date' label='お誕生日' handleChange={handleChange} />
          <Input id='phone' type='text' label='電話番号' handleChange={handleChange} />
          <Input id='image' type='file' label='プロフィール写真' handleChange={handleChange} />
          <button className='w-full bg-emerald-400 rounded-md py-3 text-white' type='button'>
            Download as PNG
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
