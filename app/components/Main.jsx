import Form from './Form'
import Card from './Card'
import { useState } from 'react'

export default function Main() {
  const [location, setlocation] = useState('')
  const [maxumimCookie, setmaxumimCookie] = useState('')
  const [minumimCookie, setminumimCookie] = useState('')
  const [avgCookie, setavgCookie] = useState('')
  const [result, setresult] = useState([])

  const submitFuction = (e) => {
    e.preventDefault()

    setlocation(e.target.location.value)
    setmaxumimCookie(e.target.max.value)
    setminumimCookie(e.target.min.value)
    setavgCookie(e.target.avg.value)

    let objResult = {
      location: location || 'Empty',
      maxumimCookie: maxumimCookie || 'Empty',
      minumimCookie: minumimCookie || 'Empty',
      avgCookie: avgCookie || 'Empty',
    }
    setresult([...result, objResult])
  }

  return (
    <main className='bg-[#FFFBEB] flex g-10 m-10 '>
      <Form allInfo={submitFuction} />
      <Card result={result} />
    </main>
  )
}
