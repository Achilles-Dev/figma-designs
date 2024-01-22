import React, { useEffect, useState } from 'react'
import './App.css'
import PayoutPage from './pages/PayoutPage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Sidebar from './components/payoutsComponents/SideBar'
import Header from './components/payoutsComponents/Header'

function App() {
  const [message, setMessage] = useState('')
  const [isProviderSetup, setIsProviderSetup] = useState(false)

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }, [message])

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Header message={message} setMessage={setMessage} />

          <Routes>
            <Route
              path='payments'
              element={
                <PayoutPage
                  setMessage={setMessage}
                  setIsProviderSetup={setIsProviderSetup}
                  isProviderSetup={isProviderSetup}
                />
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
