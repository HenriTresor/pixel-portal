import React from 'react'
import Head from 'next/head'

const Meta = ({ title, keywords,
    description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
    )
}

export default Meta