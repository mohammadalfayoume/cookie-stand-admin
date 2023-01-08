import Form from './Form'
import Card from './Card'
import ReportTable from './ReportTable'
import { useState } from 'react'

export default function Main() {
  const [location, setlocation] = useState('')
  const [maxumimCookie, setmaxumimCookie] = useState('')
  const [minumimCookie, setminumimCookie] = useState('')
  const [avgCookie, setavgCookie] = useState('')
  const [result, setresult] = useState([])
  const [flag, setflag] = useState(false)

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
  const handleOverview = () => {
    setflag(true)
  }
  return (
    <div class='bg-[#FFFBEB] dark:bg-[#251749]'>
      <div class='flex justify-center mt-5'>
        <button
          class='bg-transparent hover:bg-[#251749] dark:hover:bg-[#FFFBEB] dark:bg-[#251749] dark:text-[#FFFBEB] text-[#251749] font-semibold dark:hover:text-[#251749] hover:text-[#FFFBEB] py-2 px-4 border dark:border-[#FFFBEB] border-[#251749] hover:border-transparent rounded mt-5'
          onClick={handleOverview}
        >
          Overview
        </button>
      </div>

      <div className='bg-[#FFFBEB] dark:bg-[#251749] flex flex-col justify-between gap-3'>
        <Form allInfo={submitFuction} />

        {flag ? <ReportTable /> : <Card result={result} />}
      </div>
    </div>
  )
}
