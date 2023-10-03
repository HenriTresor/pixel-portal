import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { navListItems } from '@/lib/constants'

type Props = {}

function SideBar({ }: Props) {
    return (
        <div className='w-full h-full fixed top-0 left-0 flex justify-end overflow-hidden'>
            <div className='bg-orange-800  w-full h-full p-2'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-[1.7rem] font-bold'>pixel <span className='text-orange-600'>portal</span></h1>
                    <Button size={'icon'} className='font-bold '>
                        X
                    </Button>
                </div>

                <div className='gap-5 mt-5 flex-col text-white flex'>
                    {
                        navListItems.map(item => (
                            <Link
                                key={item.name}
                                className='font-bold '
                                href={item.link}>{item.name}</Link>
                        ))
                    }
                    <Button>Contact us</Button>
                </div>
            </div>
        </div>
    )
}

export default SideBar