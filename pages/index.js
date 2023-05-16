import Header from '../components/Header'
import GameCard from '../components/GameCard'
import { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import Link from 'next/link'

export const getServerSideProps = async () => {
  const res = await axios.get('https://api.rawg.io/api/games?key=23c8f2c1b117464d9f9a312a25c76156&page=1&page_size=10')

  const data = await res.data
  return {
    props: {
      games: data.results
    }
  }
}

const Index = ({ games }) => {
  console.log(games);
  return (
    <>
      <Box
        sx={{ marginTop: '2em' }}
      >
        <Typography
          variant='h6'
          sx={{ml:5, mb:1}}
        >
          Trending games
        </Typography>
        <Carousel
          duration={700}
          fullHeightHover={false}
         IndicatorIcon=''
        >
            {
              games?.map(game => {
                return (
                  <Link href={`/games/${game.slug}`} passHref key={game?.id}>
                  <GameCard  {...game} />
               </Link>
                )
              })
            }
        </Carousel>
      </Box>
    </>

  )
}

export default Index

