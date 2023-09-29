'use client'
import GenreCard from '@/components/ui/Cards/Genre'
import { Button } from '@/components/ui/button'
import Header from '@/components/views/Header'
import { Genre } from '@/types/app'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [games, setGames] = useState<[]>([])

  useEffect(() => {

    const getGenres = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/genres?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page_size=6`)
        const data = await res.json()
        setGenres(data?.results)
      } catch (error: any) {
        console.log('error', error.message)
      }
    }
    const getGames = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page_size=6`)
        const data = await res.json()
        setGenres(data?.results)
      } catch (error: any) {
        console.log('error', error.message)
      }
    }
    getGenres()
  }, [])
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

      <div className='text-white w-full flex justify-between h-auto p-2 flex-col'>
        <div className='p-3 flex items-center justify-between w-full '>
          <h1 className='font-bold capitalize text-white text-[1.5rem]'>Available genres</h1>
          <Button>see more</Button>
        </div>
        <div className='flex w-full items-start justify-between p-3 text-white  flex-wrap'>
          {
            genres?.length && genres?.map((genre, index) => {
              return <GenreCard {...genre} key={genre.id} />
            })
          }
        </div>
      </div>
      <div className='text-white w-full flex justify-between h-auto p-2 flex-col'>
        <div className='p-3 flex items-center justify-between w-full '>
          <h1 className='font-bold capitalize text-white text-[1.5rem]'>Popular games</h1>
          <Button>see more</Button>
        </div>
        <div className='flex w-full items-start justify-between p-3 text-white  flex-wrap'>
          {
            genres?.length && genres?.map((genre, index) => {
              return <GenreCard {...genre} key={genre.id} />
            })
          }
        </div>
      </div>
    </>
  )
}
