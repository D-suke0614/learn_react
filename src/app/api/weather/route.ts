export const GET = async () => {
  const url = 'https://weather.tsukumijima.net/api/forecast?city=130010' // tokyo
  const res = await fetch(url)
  const weather = await res.json()
  return Response.json({weather})
}
