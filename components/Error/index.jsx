import React from 'react'

const Error = ({ message }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100dvh',
                display: 'grid',
                placeContent: 'center',
                gap: '2em',
                textAlign: 'center'
            }}
        >
            <h1>{message && message.includes('connection') ? 'Network error' : 'Something went wrong'
            }</h1>

            <p> {message}</p>
        </div>
    )
}

export default Error