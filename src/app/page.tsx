import Link from 'next/link'

const APPS = [
  { name: 'TODO APP', link: '/todo' },
  { name: 'CALC APP', link: '/calc' },
  { name: 'PROFILE APP', link: '/profile' },
  { name: 'WEATHER APP', link: '/weather' },
]

export default function Home() {
  return (
    <div>
      <ul className='text-lg font-medium'>
        {APPS.map((app) => (
          <li key={app.link} className='mb-5 list-disc'>
            <Link className='py-2 hover:opacity-60' href={app.link}>
              {app.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
