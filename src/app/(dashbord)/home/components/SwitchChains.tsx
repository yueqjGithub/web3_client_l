'use client'

import { BasicContext } from "@/store"
import { ChangeEvent, useContext, useState } from "react"

const SwitchChains = () => {
  const { state, dispatch } = useContext(BasicContext)
  const { Chains, currentChain } = state
  const [loading, setLoading] = useState(false)
  const changeChain = async (e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value)
    const curChain = Chains.find(item => item.id === id)
    if (curChain) {
      try {
        setLoading(true)
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: `0x${curChain.id.toString(16)}` }] })
        dispatch && dispatch({
          type: 'update_key',
          payload: curChain,
          key: 'currentChain'
        })
      } catch {
      } finally {
        setLoading(false)
      }
    }
  }
  return (
    <div className="w-full">
      <p>Plaease check your chain</p>
      <ul className="min-w-[20rem]">
        {
          Chains.map((chain) => {
            return (
              <li key={chain.id} className="w-full text-3xl rounded-2xl text-primary flex flex-row justify-between items-center my-4">
                <span>{chain.name}</span>
                {
                  loading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : <input type="radio" className="form-radio w-6 h-6" name="chain" checked={currentChain && currentChain.id === chain.id}
                    value={chain.id}
                    onChange={(e) => changeChain(e)}
                  />
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SwitchChains
