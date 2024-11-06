import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellorPannel from '../Sellor/SellorPannel'

const SellerRoute = () => {
  return (
    <div>
      <Routes>
        <Route
             path="/" element={<SellorPannel/>}
        />
      </Routes>
    </div>
  )
}

export default SellerRoute
