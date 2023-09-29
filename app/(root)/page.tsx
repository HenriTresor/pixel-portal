import { Button } from '@/components/ui/button'
import Header from '@/components/views/Header'
import Image from 'next/image'


export const getGenres = async () => {
  try {
    const res = await fetch(`https://api.rawg.io/api/genres?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`)
    const data = await res.json()

    return data
  } catch (error: any) {
    console.log('error', error.message)
  }
}
export default async function Home() {
  const genres = await getGenres()
  return (
    <>
      <div className='text-white w-full flex justify-between h-[90dvh] p-2'>
        <div className='w-full h-full'>
          <Image
            src={'/svg/first-screen-svg-2.svg'}
            width={'100'}
            height={'100'}
            alt='svg'
            className='w-[100%] object-cover h-full'
          />
        </div>
        <div className='flex flex-col p-4 justify-center gap-5 w-auto text-center'>
          {/* <h1 className='font-bold capitalize text-orange-700'>GAME DEV</h1> */}
          <h1 className='text-[2.5rem] text-orange-600 font-serif'>Work that we produce for our clients</h1>
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

      <div className='text-white w-full flex justify-between h-auto p-2'>
        <div className='p-3 flex items-center justify-between w-full '>
          <h1 className='font-bold capitalize text-white text-[1.5rem]'>Available genres</h1>
          <Button>see more</Button>
        </div>
      </div>
    </>
  )
}
