import { headers } from 'next/headers'
import Card from './components/Card'

const fetchWeather = async (host: string | null) => {
  const res = await fetch(`http://${host}/api/weather`)
  const data = await res.json()
  const weather = data.weather.forecasts.map((item: any) => {
    return {
      dateLabel: item.dateLabel,
      weatherLabel: item.telop,
      temperature: item.temperature,
    }
  })

  return weather
}

const Page = async () => {
  const host = headers().get('host')
  const weathers = await fetchWeather(host)
  return (
    <div className='w-[600px] h-[450px] border-solid border-2'>
      <div className='text-center bg-gradient-to-r from-cyan-300 to-cyan-500'>
        <h2 className='py-12 text-white text-3xl font-bold'>週間天気予報</h2>
      </div>
      <div className='flex p-6 gap-4'>
        {weathers.map((weather: any) => (
          <Card weather={weather} key={weather} />
        ))}
      </div>
    </div>
  )
}

export default Page
