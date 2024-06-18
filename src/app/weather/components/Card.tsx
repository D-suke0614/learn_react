import Image from 'next/image'
import { Weather } from '../page'

type PropsType = {
  weather: Weather
}

const Card = ({ weather }: PropsType) => {
  const { date, dateLabel, weatherLabel, temperature, image } = { ...weather }
  const minTemp = temperature.min.celsius
  const maxTemp = temperature.max.celsius
  return (
    <div className='w-full shadow-md bg-gray-100 p-4 text-center'>
      <h3 className='font-bold text-lg'>{dateLabel}</h3>
      <div className='text-gray-500'>{date}</div>
      <div className='my-4'>
        <Image
          className='my-0 mx-auto'
          src={image.url}
          width={image.width}
          height={image.height}
          alt='weather-image'
        />
      </div>
      <div>{weatherLabel}</div>
      <div className='text-gray-500'>{minTemp ? `${minTemp}℃ / ${maxTemp}℃` : `${maxTemp}℃`}</div>
    </div>
  )
}

export default Card
