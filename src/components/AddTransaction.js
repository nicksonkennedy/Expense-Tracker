import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const {addHandler} = useContext(GlobalContext)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const onsubmit =(e)=>{
    e.preventDefault()
   const newTransaction = {
    id: Date.now(),
    text,
    amount: +amount
   }
   
   setText('')
   setAmount('')
   addHandler(newTransaction)
  }
  return (
    <div className='relative top-[7rem]'>
        <h1 className='font-bold text-sm'>Add New Transaction</h1>
        <div className='border-t-2 border-gray-100 w-full'></div>

        <div className='mt-4'>
            <form onSubmit={onsubmit}>
                <div>
                <label className='font-semibold text-[0.85rem]'>Text</label>
                 <input type='text' className='w-full p-1 outline-none border-2 border-slate-100'
                 value={text}
                 onChange={e=>setText(e.target.value)}
                 />
                </div>

                <div className='mt-2'>
                <label className='font-semibold text-[0.85rem]'>Amount</label>
                <div className='text-[0.75rem]'>(negative - expense , positive-income)</div>
                 <input type='text' className='w-full p-1 outline-none border-2 border-slate-100'
                  value={amount}
                  onChange={e=>setAmount(e.target.value)}
                 />
                </div>
                   <div className='mt-2'> <button type='submit' className='w-full p-[0.50rem] bg-violet-500 text-white font-semibold text-sm'>Add Transaction</button></div>
            </form>
        </div>
    </div>
  )
}

export default AddTransaction