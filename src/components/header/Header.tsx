import { useSpendingContext } from 'context/SpendingContext'
import React from 'react'
import { ReactComponent as Logo} from '../../assets/logo.svg'

const Header = () => {
    const {balance} = useSpendingContext()
  return (
    <header className="rounded-[10px] w-full bg-soft-red text-white pt-8 pr-10 pb-9 pl-8 flex justify-between">
        <div className='flex flex-col'>
            <h2 className='text-md font-normal'>My balance</h2>
            <span className='text-lg font-bold'>${balance}</span>
        </div>
        <Logo />
    </header>
  )
}

export default Header