import Header from '../components/Header'
import GameCard from '../components/GameCard'
import { useEffect } from 'react'
import { Box, Typography, Grid, Card } from '@mui/material'
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import Link from 'next/link'
import Meta from '../components/Meta'
import SimpleCard from '../components/Card'
import { AddBoxOutlined } from '@mui/icons-material'

export const getStaticProps = async () => {
  const res = await axios.get('https://api.rawg.io/api/games?key=23c8f2c1b117464d9f9a312a25c76156&page_size=30')

  const data = await res.data
  return {
    props: {
      TopGames: data.results.slice(0, 10),
      otherGames: data.results.slice(11, -1)
    }
  }
}


const Index = ({ TopGames, otherGames }) => {
  // console.log(TopGames);
  return (
    <>
      <Meta title={'Pixel Portal - Home' } />
      <Box
        sx={{ marginTop: '2em' }}
      >
        <Typography
          variant='h6'
          sx={{ml:5, mb:1}}
        >
          Trending Games
        </Typography>
        <Carousel
          duration={700}
          fullHeightHover={false}
         IndicatorIcon=''
        >
            {
              TopGames?.map(game => {
                return (
                  <Link href={`/games/${game.slug}`} passHref key={game?.id}>
                  <GameCard  {...game} />
               </Link>
                )
              })
            }
        </Carousel>
      </Box>

      <Box sx={{ marginTop: '2em' }}> 
        <Typography variant='h6'
          sx={{ ml: 5, mb: 1 }}>All Games</Typography>
        
        <Box 
         sx={{display:'flex', flexWrap:'wrap'}}
        >
          {
            otherGames?.map(game => {
              return (
               
                <SimpleCard  {...game} key={ game.id} />
                  
              )
            })
          }
        </Box>
      </Box>
    </>

  )
}

export default Index

