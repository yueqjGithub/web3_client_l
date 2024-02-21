import EthChecker from "@/components/ethChecker"
import { StoreProvider } from "@/store"
import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'Business',
  description: 'Business',
}

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="layout w-screen h-screen bg-black text-white flex flex-col justify-start items-center">
      <div className="nav border-b-2 border-white border-solid flex flex-row justify-between items-center py-6 px-10 w-full">
        <div className="logo font-bold text-5xl text-white">LOGO</div>
        <div className="text-white text-2xl cursor-pointer">profile</div>
      </div>
      <div className="flex flex-row flex-nowrap justify-between items-start flex-1 w-full">
        <div className="w-0 hidden md:w-[20rem] md:block h-full border-r-2 border-white border-dashed scroll-bar relative">
          <ul className="text-2xl absolute w-full h-min-full">
            <li>
              <Link href={'/home'}>HOME</Link>
            </li>
            <li>
              <Link href={'/about'}>ABOUT</Link>
            </li>
            <li>
              <Link href={'/profile'}>PROFILE</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 h-full relative p-4 bg-gray-900">
          <div className="w-full h-full relative scroll-bar rounded-2xl bg-gray-700">
            <div className="absolute w-full min-h-full">
            <StoreProvider>
            {children}
            </StoreProvider>
            <Suspense fallback={<></>}>
            <EthChecker></EthChecker>
            </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
