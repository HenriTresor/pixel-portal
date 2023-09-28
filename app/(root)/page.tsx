import Header from '@/components/views/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='text-white w-full flex justify-between h-[90dvh] p-2'>
        <div className='flex flex-col gap-2 p-4 justify-center'>
          <h1 className='text-[2rem] text-orange-600'>Work that we produce for our clients</h1>
          <p className='font-bold tracking-wider '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tempore nesciunt natus dolor non quam fugit debitis nostrum officia dolorem!</p>
        </div>
        <div className='w-full h-full'>
          <Image
            src={'/svg/first-screen-svg (3).svg'}
            width={'100'}
            height={'100'}
            alt='svg'
            className='w-[100%] object-cover h-full'
          />
        </div>
      </div>
    </>
  )
}
