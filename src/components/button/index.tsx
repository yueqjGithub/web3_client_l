'use client'

import { CSSProperties, ReactNode, useMemo } from "react"

type Props = {
  blockBtn?: boolean
  text?: string
  customWrapper?: ReactNode
  style?: CSSProperties & {
    '--bg-color'?: string
    '--text-color'?: string
  }
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  onClick?: (args?: any[]) => any
  disabled?: boolean
  danger?: boolean
}
export const Button = (props: Props) => {
  const btnSize = useMemo(() => {
    switch (props.size) {
      default:
        return {
          font: 'text-2xl',
          px: 'px-7',
          py: 'py-[0.8rem]'
        }
      case 'sm':
        return {
          font: 'text-1xl',
          px: 'px-6',
          py: 'py-[0.6rem]'
        }
      case 'md':
        return {
          font: 'text-2xl',
          px: 'px-7',
          py: 'py-[0.8rem]'
        }
      case 'lg':
        return {
          font: 'text-3xl',
          px: 'px-8',
          py: 'py-[1.2rem]'
        }
    }
  }, [props.size])
  return (
    <div className={
      `${props.blockBtn ? 'block' : 'inline-block'}`
    }>
      <div className={`
    flex flex-row justify-center items-center leading-none text-white w-full
    ${props.danger ? 'bg-danger' : 'bg-primary'}
    ${props.disabled ? 'cursor-not-allowed grayscale' : 'hover:brightness-110 active:scale-95 cursor-pointer'}
    ${btnSize.font} ${btnSize.px} ${btnSize.py}
    ${props.rounded ? 'rounded-full' : 'rounded-xl'}
    `} style={{
      ...props.style,
      backgroundColor: props.style?.['--bg-color'],
      color: props.style?.['--text-color'],
    }}
        onClick={() => props.disabled ? null : props.onClick && props.onClick()}
      >
        {
          props.customWrapper ? props.customWrapper : props.text
        }
      </div>
    </div>
  )
}