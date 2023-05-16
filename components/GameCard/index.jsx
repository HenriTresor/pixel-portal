import React from 'react'
import { Card, Typography, Rating, Box } from '@mui/material'
import gameCardStyles from './gameCard.module.css'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

const index = ({
    name, background_image, rating, short_screenshots
}) => {
    return (
        <Box
            elevation={5}
            variant='outlined'
            className={gameCardStyles.gameCard}
        >
            <Box sx={{ width: '100%' }}>
                <Image
                    className='first-image'
                    src={short_screenshots[1].image}
                    alt={name + 'image'}
                    width={100}
                    height={100}
                />
            </Box>
            <Box
                sx={{
                    width: '100%', height: '100%',
                    backdropFilter: 'blur(4px)',
                    background: 'rgb(0,0,0,.5)',
                    position: 'absolute', top: 0,
                    display: 'flex',
                    justifyContent:'center',alignItems:'center', flexDirection:'column', textAlign:'center'
                }}
            >
                <Typography
                    variant='h4'
                    sx={{
                        mb: 1
                    }}
                >
                    {name && name}
                </Typography>
               
                <Image
                    // className='short-image'
                    key={background_image}
                    src={background_image}
                    alt={background_image}
                    width={200}
                    height={200}
                />
            </Box>
        </Box>
    )
}

export default index