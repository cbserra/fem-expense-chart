import Chart from './chart/Chart'
import React from 'react'
import Stats from './stats/Stats'

const Main = () => {
  return (
    <main>
        <h1 className='text-xl text-dark-brown font-bold'>Spending - Last 7 days</h1>
        <Chart />
        <hr className='border-cream bg-cream w-full h-1' />
        <Stats />
    </main>
  )
}

export default Main