import React from 'react'
import Payments from '../components/payoutsComponents/Payments'
import PaymentProviderSetup from '../components/payoutsComponents/PaymentProviderSetup'

const PayoutPage = ({
  setMessage,
  setIsProviderSetup,
  isProviderSetup,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setIsProviderSetup: React.Dispatch<React.SetStateAction<boolean>>
  isProviderSetup: boolean
}) => {
  return (
    <div>
      {isProviderSetup ? (
        <Payments />
      ) : (
        <PaymentProviderSetup
          setMessage={setMessage}
          setIsProviderSetup={setIsProviderSetup}
        />
      )}
    </div>
  )
}

export default PayoutPage
