import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (link) => {
    let [data, setData] = useState(null)
    let [isLoading, setIsloading] = useState(false)
    let [error, setError] = useState({
        status: false,
        message: null
    })

    useEffect(() => {
        let isCancelled = false
        if (!isCancelled) {
            setIsloading(true)
            axios.get(link).then((res) => {
                setData(res.data)
            }).then(() => {
                setIsloading(false)
            }).catch(err => {
                setIsloading(false)
                setError(prev => {
                    return {
                        status: true,
                        message: err.message
                    }
                })
            })
        }

        return () => isCancelled = true
    }, [link])
    return {
        isLoading,
        data,
        error
    }
}

export default useFetch