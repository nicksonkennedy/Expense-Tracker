import { useReducer, useState } from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import History from './components/History';
import { GlobalProvider } from './context/GlobalState';

function App() {
   
  return (
   
   <GlobalProvider>
    <div className='max-w-xsm mx-auto relative top-[2rem]'>
      <h1 className='font-bold text-lg'>Expense Tracker</h1>
      
      <Balance />
      <History />
      <AddTransaction />
    </div>
   </GlobalProvider>
  );
}

export default App;
