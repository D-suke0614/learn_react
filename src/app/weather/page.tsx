import { headers } from 'next/headers'
import Card from './components/Card'

export type Weather = {
  date: string
  dateLabel: string
  weatherLabel: string
  temperature: {
    min: {
      celsius: number
    }
    max: {
      celsius: number
    }
  }
  image: {
    title: string
    url: string
    width: number
    height: number
  }
}

const fetchWeather = async (host: string | null) => {
  const res = await fetch(`http://${host}/api/weather`)
  const data = await res.json()
  const weather: Weather[] = data.weather.forecasts.map((item: any) => {
    return {
      date: item.date,
      dateLabel: item.dateLabel,
      weatherLabel: item.telop,
      temperature: item.temperature,
      image: item.image,
    }
  })
  return weather
}

const Page = async () => {
  const host = headers().get('host')
  const weathers = await fetchWeather(host)
  return (
    <div className='w-[600px] h-[430px] border-solid border-2'>
      <div className='text-center bg-gradient-to-r from-cyan-300 to-cyan-500'>
        <h2 className='py-12 text-white text-3xl font-bold'>週間天気予報</h2>
      </div>
      <div className='flex p-6 gap-4'>
        {weathers.map((weather: Weather) => (
          <Card weather={weather} key={weather.date} />
        ))}
      </div>
    </div>
  )
}

export default Page
