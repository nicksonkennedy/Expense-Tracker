import React, {useContext} from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {
  const {deleteHandler} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'
  return (
    
        <div className={transaction.amount > 0 ? 'relative top-4 mt-3 p-2 bg-white shadow-2xl flex justify-between border-r-4 border-green-900 group ':'relative top-4 mt-3 p-2 bg-white shadow-2xl flex justify-between border-r-4 border-red-900 group '}>
          <DeleteOutlined style={{color:'white'}} className='hidden group-hover:inline p-[0.12rem] bg-red-500 rounded-full hover:scale-110 cursor-pointer'
          onClick={()=>deleteHandler(transaction.id)}
          />
            <span className='font-semibold text-sm'>{transaction.text}</span>
            <span className='font-semibold text-sm'>{sign}${Math.abs(transaction.amount)}</span>
        </div>


  )
}

export default Transaction