import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
//total balance
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item)=> (acc +=item), 0).toFixed(2)

  //income 
const income = amounts
.filter(item => item > 0)
.reduce((acc , item)=>(acc +=item), 0)
.toFixed(2)


//expense
const expense =(
  amounts.filter(item => item < 0).reduce((acc, item) =>(acc +=item) , 0) * -1
).toFixed(2)
  return (
    <div className='relative top-6'>
      <h3 className='font-semibold text-sm'>Your Balance</h3>
      <h3 className='font-bold relative bottom-2 text-xl'>${total}</h3>

      <div className='relative top-2 bg-white shadow-2xl w-full p-4 mx-auto flex justify-between'>
        <div className='grid'>
        <span className='font-semibold'>Income</span>
        <span className='font-semibold text-green-700'>{income}</span>
        </div>
        <div className='border-l-2 border-gray-100'></div>
        <div className='grid'>
        <span className='font-semibold'>Expense</span>
        <span className='font-semibold text-red-700'>{expense}</span>
        </div>

      </div>

      </div>
  )
}

export default Balance