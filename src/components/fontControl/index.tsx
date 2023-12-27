'use client'

import { useEffect } from "react"

const remHandler = () => {
  const minWidth = 400
  const baseScreen = 1920
  const basePercent = 62.5
  // 屏幕宽度
  const currentScreenWidth = document.body.clientWidth
  // 获取html
  const html = document.querySelector('html')
  if (html && currentScreenWidth > minWidth) {
    html.style.fontSize = `${basePercent * (currentScreenWidth / baseScreen)}%`
  } else {
    html!.style.fontSize = `${basePercent * (400 / baseScreen)}%`
  }
}
const FontControl = () => {
  useEffect(() => {
    remHandler()
    window.addEventListener('resize', remHandler)
    return () => {
      window.removeEventListener('resize', remHandler)
    }
  }, [])
  return <></>
}

export default FontControl
