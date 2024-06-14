type PropsType = {
  weather: {
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
  }
}

const Card = ({ weather }: PropsType) => {
  const { dateLabel, weatherLabel, temperature } = { ...weather }
  const minTemp = temperature.min.celsius
  const maxTemp = temperature.max.celsius
  return (
    <div className='w-full shadow-md bg-gray-100 p-4 text-center'>
      <h3 className='font-bold text-lg'>{dateLabel}</h3>
      <div>{/* <Image /> */}</div>
      <div>{weatherLabel}</div>
      <div className='text-gray-500'>{minTemp ? `${minTemp}℃ / ${maxTemp}℃` : `${maxTemp}℃`}</div>
    </div>
  )
}

export default Card
