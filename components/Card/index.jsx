import React from 'react'
import { Card, Typography, Rating, Box, Button } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

const index = ({
    name, background_image,
    rating, short_screenshots, publishers, slug
}) => {

    const router = useRouter()
    const openGameDetails = (slug) => {
        router.push(`/games/${slug}`)
    }
    return (
        <Card
            elevation={5}
            variant='outlined'
            className='card'
        >
            <Box sx={{ width: '100%' }}>
                <Image
                    // className='first-image'
                    src={background_image}
                    alt={name + 'image'}
                    width={100}
                    height={100}
                />
            </Box>
            <Box
            >
                <Typography
                    variant='h6'
                    sx={{
                        mb: 2,mt:3
                    }}
                >
                    {name && name}
                </Typography>

                <Rating value={rating} readOnly precision={0.5} />
                
                <Box sx={{mt:2}}>
                    <Button
                        
                        onClick={()=>openGameDetails(slug)}
                        color='warning' variant='contained'>
                        Details
                    </Button>
               </Box>
            </Box>
        </Card>
    )
}

export default index