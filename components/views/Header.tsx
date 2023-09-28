import React from 'react'
import { navListItems } from '@/lib/constants'
import Link from 'next/link'
import { Button } from '../ui/button'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='p-4 mt-5 sticky top-0 left-0 borderb-2 border-orange-600 flex items-center justify-between w-full pl-11 pr-11 bg-black'>
            <h1 className='text-[1.7rem] font-bold'>pixel <span className='text-orange-600'>portal</span></h1>

            <div className='flex gap-5 items-center'>
                {
                    navListItems.map(item => (
                        <Link
                            key={item.name}
                            className='font-bold hover:border-b-2 hover:border-orange-600 '
                            href={item.link}>{item.name}</Link>
                    ))
                }
                <Button>Contact us</Button>
            </div>
        </div>
    )
}

export default Header