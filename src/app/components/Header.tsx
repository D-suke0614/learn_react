import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-blue-200 py-8 px-6 shadow-lg shadow-blue-300'>
      <h1 className='w-fit text-2xl font-bold hover:opacity-60'>
        <Link href={'/'}>LEARN REACT.JS</Link>
      </h1>
    </header>
  )
}

export default Header
