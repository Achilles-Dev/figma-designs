import React, { useEffect, useState } from 'react'
import Header from '../components/payoutsComponents/Header'
import Sidebar from '../components/payoutsComponents/SideBar'
import Payments from '../components/payoutsComponents/Payments'
import PaymentProviderSetup from '../components/payoutsComponents/PaymentProviderSetup'

const PayoutPage = () => {
  const [message, setMessage] = useState('')
  const [isProviderSetup, setIsProviderSetup] = useState(false)

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  })

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Header message={message} setMessage={setMessage} />
        {isProviderSetup ? (
          <Payments />
        ) : (
          <PaymentProviderSetup
            setMessage={setMessage}
            setIsProviderSetup={setIsProviderSetup}
          />
        )}
      </div>
    </div>
  )
}

export default PayoutPage
