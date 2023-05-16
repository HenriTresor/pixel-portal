// import React from 'react'
import HeaderStyles from './header.module.css'
import { 
  Button, Typography, Box, List
} from '@mui/material'
import Link from 'next/link'

const Header = () => {
  return (
    <Box className={HeaderStyles.header}>
        <Box>
        <Link href="/" passHref>
          <Typography
            variant='h5'
            component='h1'
          >
            Pixel Portal
          </Typography>
        </Link>
      </Box>
        <Box
        
        >
        <List
          className={HeaderStyles.list_items}
        >
              <li>Home</li>
              <li>genres</li>
              <li>About us</li>
          <Button
            sx={{
              background: 'orange',
              color:'white', p:1, border:'1px solid orange', ml:2
          }}
          >
              Join us
              </Button>
          </List>
        </Box>

    </Box>
  )
}

export default Header