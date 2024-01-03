'use client'

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

const EthChecker = () => {
  const navigator = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    if (!window.ethereum) {
      if (pathname !== '/') {
        navigator.push('/noeth')
      }
    }
  })
  return (
    <></>
  )
}

export default EthChecker