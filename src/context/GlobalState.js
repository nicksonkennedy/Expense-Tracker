import React, {useReducer , createContext} from 'react'
import AppReducer from './AppReducer'
const initialState ={
    transactions:[ ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //delet func
    const deleteHandler = (id) =>{
        dispatch({type:'DELETE_TRANSACTION', payload:id})
    }

    //add func
    const addHandler = (transaction) =>{
       dispatch({type:'ADD_TRANSACTION', payload:transaction})
    }

    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteHandler ,
        addHandler
        
        }}
        >
        {children}
    </GlobalContext.Provider>
}