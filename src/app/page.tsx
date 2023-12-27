import Timer from '@/components/timer'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-row justify-center items-center bg-black text-white'>
      <div className='flex flex-col justify-center items-center'>
        <p>welcome to the web3 client</p>
        <Link href={'/home'}>进入</Link>
      </div>
    </main>
  )
}
