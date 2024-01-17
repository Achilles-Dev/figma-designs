import React from 'react'
import Header from '../components/payoutsComponents/Header'
import Sidebar from '../components/payoutsComponents/SideBar'
// import Payments from '../components/payoutsComponents/Payments'
import Payments1 from '../components/payoutsComponents/Payments1'

const PayoutPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
        <Payments1 />
      </div>
    </div>
  )
}

export default PayoutPage
