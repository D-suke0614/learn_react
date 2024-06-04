import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul className='text-lg font-medium'>
        <li className='mb-5'>
          <Link className='py-2 hover:opacity-60' href={'/todo'}>
            TODO APP
          </Link>
        </li>
      </ul>
    </div>
  )
}
