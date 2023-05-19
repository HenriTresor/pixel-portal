import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const Loading = ({ height }) => {
    return (
        <Box
            sx={{ width: '100%', height, display: 'grid', placeContent: 'center' }}
        >
            <CircularProgress />
        </Box>
    )
}

export default Loading