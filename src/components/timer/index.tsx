'use client'
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const Timer = () => {
  const [sec, setSec] = useState(50)
  const router = useRouter()
  useEffect(() => {
    const timer = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1)
      } else {
        clearInterval(timer)
        router.push('/about')
      }
    }, 1000)
    return () => clearInterval(timer)
  })
  return (
    <p>{sec}秒后进入系统</p>
  )
}

export default Timer