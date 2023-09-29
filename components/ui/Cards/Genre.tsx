import { Genre } from '@/types/app'
import Image from 'next/image'
import React from 'react'

interface Props extends Genre { }

function GenreCard({ id, name, games, games_count, image_background, slug }: Props) {
    return (
        <div className='border-2 p-2 mr-1 rounded-md flex flex-col gap-4 cursor-pointer'>
            <Image
                src={image_background}
                alt={`${name + id + slug}`}
                width={'100'}
                height={'100'}
                className=' object-cover w-full h-[100px]'
            />

            <h1 className='font-bold capitalize'>{name}</h1>
        </div>
    )
}

export default GenreCard