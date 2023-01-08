import React from 'react'
import { data,time } from '../data/data'

const ReportTable = () => {
  const calculate_total_sale_per_city = (sales) => {
    let total = sales.reduce((acc,curr)=>{
        return acc+curr
    })
    return total
  }
  const calculate_total_sale_per_time = (t) => {
    let arr= data.map((item)=>{
        return (
            item.time_sale[t]
        )
    })
    return calculate_total_sale_per_city(arr)
  }
  const tot=()=>{
    let x=data.map(item=>{
        return (
            calculate_total_sale_per_city(Object.values(item.time_sale))
        )

        })
    return calculate_total_sale_per_city(x)
    }
  
  return (
    <>
      <table class="text-left bg-[#495579] dark:bg-[#FFFBEB] border-separate mb-10 mx-5">
        <thead class="text-xs uppercase bg-[#251749] text-[#FFFBEB]">
          <tr >
            <th class="px-6 py-3">Location</th>
              {time.map((item) => {
                return <td class="px-6 py-3">{item}</td>
              })}
            <th class="px-6 py-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td class="px-6 py-3 bg-[#251749] text-[#FFFBEB]">{item.location}</td>
                {Object.values(item.time_sale).map((s) => {
                  return <td class="px-6 py-3 text-[#FFFBEB] dark:text-[#251749]">{s}</td>
                })}
                <td class="px-6 py-3 text-[#FFFBEB] dark:text-[#251749]">{calculate_total_sale_per_city(Object.values(item.time_sale))}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td class="px-6 py-3 bg-[#251749] text-[#FFFBEB]" >Totals</td>
            {time.map((item) => {
              return (
                <td class="px-6 py-3 text-[#FFFBEB] dark:text-[#251749]">
                  {calculate_total_sale_per_time(item)}
                </td>
              )
            })}
            <td class="px-6 py-3 text-[#FFFBEB] dark:text-[#251749]">
                {tot()}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default ReportTable
