import React from 'react'
import Header from '../components/payoutsComponents/Header'
import Sidebar from '../components/payoutsComponents/SideBar'
import Payments from '../components/payoutsComponents/Payments'

const PayoutPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
        <Payments />
      </div>
    </div>
  )
}

export default PayoutPage
