import RazorpayImage from '../../assets/Razorpay.png'
import CashfreeImage from '../../assets/Cashfree.png'
import PhonePeImage from '../../assets/PhonePe.png'
import PaytmImage from '../../assets/Paytm.png'
import CODImage from '../../assets/COD.png'
import { useState } from 'react'
import Modal from './MyModal'

const providers = [
  {
    name: 'Razorpay',
    image: RazorpayImage,
    type: 'button',
  },
  {
    name: 'Cashfree Payments',
    image: CashfreeImage,
    type: 'button',
  },
  {
    name: 'PhonePe Payment Gateway',
    image: PhonePeImage,
    type: 'button',
  },
  {
    name: 'RazorpPaytm Payment Gateway',
    image: PaytmImage,
    type: 'button',
  },
  {
    name: 'Cash on delivery',
    image: CODImage,
    details: 'Receive payments in cash upon delivery.',
    type: 'radio',
  },
]

const Payments1 = () => {
  const [isCODChecked, setIsCODChecked] = useState(false)
  const [isMPMClick, setIsMPMClick] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleCODClick = () => {
    setIsCODChecked(!isCODChecked)
  }

  const handleMPMClick = () => {
    setIsMPMClick(!isMPMClick)
  }

  const handleSetup = (name: string) => {
    console.log(name)
  }

  return (
    <main className='w-full flex justify-center bg-[#FAFAFA] min-h-[91%] py-[32px]'>
      <div className='flex flex-col gap-[12px] w-[760px]'>
        <div className='flex flex-col rounded-lg p-[24px] gap-[24px] bg-white box-shadow-[0_2px_6px_0px_#1A181E0A]'>
          <div className='flex flex-col gap-[2px]'>
            <p className='text-[16px] leading-[24px] font-medium text-[#1A181E]'>
              Payment providers
            </p>
            <span className='text-[14px] leading-[20px] font-medium text-[#808080]'>
              Set up payment providers to accept payments from your customers
            </span>
          </div>
          <div className='flex flex-col gap-[16px]'>
            {providers.map((provider, index) => (
              <div
                key={index}
                className='flex gap-[24px] justify-between rounded'
              >
                {provider.type === 'button' ? (
                  <>
                    <div className='flex gap-[16px] items-center'>
                      <img src={provider.image} alt={provider.name} />
                      <p className='text-[16px] leading-[24px] font-medium text-[#1A181E]'>
                        {provider.name}
                      </p>
                    </div>
                    <div className='flex justify-end items-center'>
                      <button
                        onClick={() => handleSetup(provider.name)}
                        className='px-[16px] py-[8px] rounded border-[1px] border-[#146EB4] text-[#146EB4] text-[14px] font-medium'
                      >
                        Set up
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='flex gap-[16px] items-center'>
                      <img src={provider.image} alt={provider.name} />
                      <div className='flex flex-col gap-[2px]'>
                        <p className='text-[16px] leading-[24px] font-medium text-[#1A181E]'>
                          {provider.name}
                        </p>
                        <p className='text-[14px] leading-[20px] text-[#4D4D4D]'>
                          {provider.details}
                        </p>
                      </div>
                    </div>
                    <div className='flex justify-end items-center'>
                      <div
                        className='w-[36px] h-[24px] relative inline-block'
                        onClick={handleCODClick}
                      >
                        <input
                          className='opacity-0 w-[0px] h-[0px]'
                          type='checkbox'
                          checked={isCODChecked}
                        />
                        <span className='slider round'></span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-between gap-[32px] border-b-[1px] box-shadow-[0px_2px_6px_0px_#1A181E0A] bg-white rounded-lg p-[24px]'>
          <div className='flex flex-col gap-[2px]'>
            <p>Manual payment methods</p>
            <p>
              Payments that are made outside online store. Allows you to accept
              cash, check or other custom forms of payment.
            </p>
          </div>
          <div>
            <div
              className='w-[36px] h-[24px] relative inline-block'
              onClick={handleMPMClick}
            >
              <input
                className='opacity-0 w-[0px] h-[0px]'
                type='checkbox'
                checked={isMPMClick}
              />
              <span className='slider round'></span>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='text-[16px] text-white leading-[24px] bg-[#146EB4] font-medium opacity-[40%] px-[24px] py-[8px] rounded'>
            Finish
          </button>
        </div>
      </div>

      <div className='min-h-screen flex items-center justify-center'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
          onClick={openModal}
        >
          Open Modal
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </main>
  )
}

export default Payments1
