import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const History = () => {
  const {transactions} = useContext(GlobalContext)

  return (
    <>
    <div className='relative top-[4rem]'>
        <h1 className='font-bold text-sm'>History</h1>
        <div className='border-t-2 border-gray-100 w-full'></div>

        {transactions.map(transaction => <Transaction transaction={transaction} />)}
      </div>
    </>
  )
}

export default History