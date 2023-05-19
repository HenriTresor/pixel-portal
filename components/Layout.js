import React from 'react'
import Header from './Header/Index'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout