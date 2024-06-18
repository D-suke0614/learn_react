export const GET = async () => {
  const url = 'https://weather.tsukumijima.net/api/forecast?city=130010' // tokyo
  const res = await fetch(url, {next: {revalidate: 3600}})
  const weather = await res.json()
  return Response.json({weather})
}
