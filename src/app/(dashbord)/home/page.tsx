'use client'
import Modal from "@/components/Modal"
import { Button } from "@/components/button"
import { BasicContext } from "@/store"
import { ethers } from "ethers"
import { useContext, useEffect, useRef, useState } from "react"
import SwitchChains from "./components/SwitchChains"




const HomePage = () => {
  const { state, dispatch } = useContext(BasicContext)
  const { address, balance, currentBlockNumber, currentChain, Chains } = state
  const providerRef = useRef<ethers.BrowserProvider | null>(null)
  const [gas, setGas] = useState('0')
  const getGas = async () => {
    const gasPrice = await providerRef.current!.getFeeData()
    const gwei = ethers.formatUnits(gasPrice.gasPrice!, 'gwei')
    setGas(gwei)
  }
  useEffect(() => {
    let timer: any = null
    timer = setInterval(() => {
      if (providerRef.current) {
        getGas()
      }
    }, 1000 * 10)
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [])
  const connect = async () => {
    const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const curChainId = window.ethereum.networkVersion
    const curChain = Chains.find(item => item.id === Number(curChainId))
    dispatch && dispatch({
      type: 'update_all',
      payload: {
        ...state,
        address: selectedAddress,
        currentChain: curChain
      },
    })
    window.ethereum.on('accountsChanged', ([newAddress]: string[]) => {
      dispatch && dispatch({
        type: 'update_key',
        payload: newAddress,
        key: 'address'
      })
    })
  }
  const [openModal, setOpenModal] = useState<boolean>(false)
  const openChangeChain = async () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  return (
    <div className="p-8 flex flex-col justify-start items-center">
      {
        openModal && (
          <Modal onClose={closeModal}>
            <SwitchChains></SwitchChains>
          </Modal>
        )
      }
      {
        !address && (
          <Button
            text="CONNECT WALLET"
            onClick={() => {
              connect()
            }}
          ></Button>
        )
      }
      {
        address ? (
          <>
            <div className="avatar rounded-full w-20 h-20 bg-primary mb-8 mt-8"></div>
            <div className="text-gray-300 text-2xl mb-4">ADD：{address}</div>
            <div className="text-gray-300 text-2xl mb-4 w-full flex flex-row justify-center items-center">
              <div className="flex flex-row justify-center items-center mr-4">CHAIN：{currentChain?.name}</div>
              <Button
                text="CHOOSE CHAIN"
                onClick={openChangeChain}
                size="sm"
              ></Button>
            </div>
            <div className="text-gray-300 text-2xl">$B：{`${balance}`}</div>
            <div className="text-gray-300 text-2xl">CURRENT BLOCK NUMBER：{currentBlockNumber}</div>
            <div className="text-gray-300 text-2xl">CURRENT GAS：{gas}</div>
          </>
        ) : <p className="text-2xl text-gray-300 w-full mt-2 text-center">Please Connect Wallet</p>
      }
    </div>
  )
}

export default HomePage
