import { useSpendingContext } from 'context/SpendingContext'
import React from 'react'

const Stats = () => {
    const { spendingForMonth, previousMonthDifference } = useSpendingContext()
  return (
    <div className='flex flex-col w-full'>
        <h2 className='text-md text-medium-brown'>Total this month</h2>
        <div className='flex items-center justify-between'>
            <div className='text-2xl font-bold text-dark-brown'>{spendingForMonth}</div>
            <div className='flex flex-col'>
                <span className='text-md text-dark-brown font-bold'>+{previousMonthDifference * 100}%</span>
                <span className='text-md text-medium-brown'>from last month</span>
            </div>
        </div>
    </div>
  )
}

export default Stats