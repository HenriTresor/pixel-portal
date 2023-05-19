import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Box, Typography, CardMedia, Grid, Button, Table, Rating, TableBody, TableCell, TableRow, TableContainer, Chip, Stack } from '@mui/material'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import useFetch from '@/hooks/useFetch'
import { ArrowOutward } from '@mui/icons-material'
import Meta from '../../components/Meta'
import Loading from '../../components/Loading.jsx'

const SingleGame = () => {

    const [images, setImages] = useState([])
    const [game, setGame] = useState(null)
    const [trailers, setTrailers] = useState([])
    const { query } = useRouter()
    const slug = query.slug
    const { data, error, isLoading } = useFetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=23c8f2c1b117464d9f9a312a25c76156`)


    const { data: gameData, error: gameErr, isLoading: gameLoading } = useFetch(`https://api.rawg.io/api/games/${slug}?key=23c8f2c1b117464d9f9a312a25c76156`)
    const { data: trailerData } = useFetch(`https://api.rawg.io/api/games/${slug}/movies?key=23c8f2c1b117464d9f9a312a25c76156`)

    useEffect(() => {
        setTrailers(trailerData?.results)
    }, [trailerData])
    useEffect(() => {
        setImages(data?.results)
    }, [data])


    useEffect(() => {
        if (gameData && gameData.id !== 251509) {
            console.log('game data', gameData);
            setGame(gameData)
        }
    }, [gameData])
    return (
        <>

            <Meta title={game ? game?.name : 'loading ...'} />
            {
                (gameLoading && !game) ? <Loading height={'100dvh'} /> : (
                    <Grid
                        container
                        spacing={10}
                        sx={{ p: 3, textAlign: 'center', mt: 5 }}
                    >

                        <Grid item sm={12} md={6} sx={{ height: '100%' }}>

                            <Box
                                sx={{
                                    position: 'relative',
                                    height: '100%',
                                }}
                            >

                                {
                                    trailers?.length <= 0 && (
                                        <Image
                                            // className='first-image'
                                            style={{

                                            }}
                                            width={480}
                                            height={400}
                                            alt={game?.name}
                                            src={game?.background_image}
                                        />
                                    )
                                }

                                <Typography>
                                    Available Trailers
                                </Typography>
                                <Carousel
                                    autoPlay={false}
                                >
                                    {
                                        trailers?.length > 0 ? trailers.map(trailer => (
                                            <>
                                                <Typography>{trailer.name}</Typography>
                                                <video
                                                    height={'100%'}
                                                    width={'100%'}
                                                    key={trailer.id}
                                                    controls
                                                >
                                                    <source src={trailer.data.max} type="video/mp4" />
                                                </video>
                                            </>
                                        )) : <Typography>No trailers available</Typography>
                                    }
                                </Carousel>
                            </Box>
                            <Box sx={{ mt: 5 }}>
                                <Typography variant='h3'>
                                    {game?.name}
                                </Typography>
                                <Button
                                    sx={{ mt: 2 }}
                                    color='warning'
                                    variant='contained'
                                    onClick={() => {
                                        window.open(game?.website)
                                    }}
                                    startIcon={<ArrowOutward />}
                                >
                                    Visit
                                </Button>
                                <TableContainer
                                    sx={{}}
                                >
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell

                                                    sx={{ color: 'white' }}>
                                                    Published By
                                                </TableCell>
                                                <TableCell
                                                    sx={{ color: 'white' }}
                                                >
                                                    {(game && game.publishers) && game?.publishers[0].name}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ color: 'white' }}>
                                                    Rating
                                                </TableCell>
                                                <TableCell sx={{ color: 'white' }}>

                                                    <Rating
                                                        readOnly
                                                        value={game?.rating}
                                                        precision={0.5}
                                                    />
                                                    {game?.rating}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell

                                                    sx={{ color: 'white' }}>
                                                    Genres
                                                </TableCell>
                                                <TableCell

                                                >
                                                    <Stack direction={'row'} spacing={2}>
                                                        {
                                                            game?.genres?.map(genre => (
                                                                <Chip key={genre.id} label={genre.name} variant='outlined'>
                                                                    {genre.name}
                                                                </Chip>
                                                            ))
                                                        }
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell

                                                    sx={{ color: 'white' }}>
                                                    Supported on
                                                </TableCell>
                                                <TableCell

                                                >
                                                    <Stack direction={'row'} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }} spacing={1}>
                                                        {
                                                            game?.platforms?.map(platform => (
                                                                <Chip key={platform.platform.id} label={platform.platform.name} variant='outlined'>

                                                                </Chip>
                                                            ))
                                                        }
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Grid>


                        <Grid item sm={12} md={6} sx={{ height: '100%' }}>
                            <Carousel>
                                {
                                    images?.map(image => {
                                        return (
                                            <Image
                                                key={image.image}
                                                src={image.image}
                                                alt={image.image}
                                                width={400}
                                                height={300}
                                            />
                                        )
                                    })
                                }
                            </Carousel>
                            <Typography
                                sx={{ lineHeight: 2 }}
                            >
                                {game?.description_raw?.slice(0, 600)}

                            </Typography>
                            <Typography
                                sx={{ cursor: 'pointer' }}
                            >
                                ...read more
                            </Typography>
                        </Grid>

                    </Grid>
                )
            }
        </>
    )
}

export default SingleGame