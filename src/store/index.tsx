'use client'
import { Dispatch, createContext, useReducer } from "react"



const initialState: Wallet.Store = {
  address: '',
  balance: BigInt(0),
  currentBlockNumber: 0,
  Chains: [
    {
      name: 'eth_main',
      id: 1
    },
    {
      name: 'sepolia_eth_test',
      id: 11155111
    },
    {
      name: 'localhost',
      id: 31337
    }
  ]
}
export const BasicContext = createContext<{
  state: Wallet.Store,
  dispatch?: Dispatch<Wallet.DispatchAction>
}>({
  state: initialState
})
export const StoreProvider = (props: {
  children: React.ReactNode
}) => {

  const reducer = (state: Wallet.Store, action: {type: 'update_key' | 'update_all', payload: any, key?: keyof Wallet.Store}): Wallet.Store => {
    switch (action.type) {
      case 'update_key':
        if (!action.key) {
          throw new Error('key is required when update_key')
        }
        return {
          ...state,
          [action.key]: action.payload
        } as Wallet.Store
      case 'update_all':
        return action.payload as Wallet.Store
      default:
        throw new Error('unknown action type')
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BasicContext.Provider value={{state: state, dispatch}}>{props.children}</BasicContext.Provider>
  )
}