import { Game } from '@/types/app'
import Image from 'next/image'
import { platform } from 'os'
import React from 'react'

interface Props extends Game { }

function GameCard({ name, slug, id, background_image, genres, platforms, rating, rating_top, ratings, tags }: Props) {
    return (
        <div className='border-2 p-2 mr-1 rounded-md flex flex-col gap-4 cursor-pointer'>
            <Image
                src={background_image}
                alt={`${name + id + slug}`}
                width={'100'}
                height={'100'}
                className=' object-cover w-full h-[100px]'
            />
          
            <h1 className='font-bold capitalize'>{name}</h1>
        </div>
    )
}

export default GameCard