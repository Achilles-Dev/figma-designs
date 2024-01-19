import RazorpayImage from '../../assets/Razorpay.png'
import CashfreeImage from '../../assets/Cashfree.png'
import PhonePeImage from '../../assets/PhonePe.png'
import PaytmImage from '../../assets/Paytm.png'
import CODImage from '../../assets/COD.png'
import CloseIcon from '../../assets/cross.svg'
import InfoIcon from '../../assets/Info.svg'
import VisaIcon from '../../assets/Visa.svg'
import MastercardIcon from '../../assets/Mastercard.svg'
import MaestroIcon from '../../assets/Maestro.svg'
import RupayIcon from '../../assets/Rupay.svg'
import AMEXIcon from '../../assets/Amex.svg'
import DinerClubIcon from '../../assets/Diner_Club.svg'
import PaytmIcon from '../../assets/PaytmPM.svg'
import AirtelMoneyIcon from '../../assets/Airtel.svg'
import AmazonPayIcon from '../../assets/Amazon.svg'

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

const paymentMethods = [
  {
    name: 'Visa',
    image: VisaIcon,
  },
  {
    name: 'Mastercard',
    image: MastercardIcon,
  },
  {
    name: 'Maestro',
    image: MaestroIcon,
  },
  {
    name: 'Rupay',
    image: RupayIcon,
  },
  {
    name: 'American Express',
    image: AMEXIcon,
  },
  {
    name: 'Diner Club',
    image: DinerClubIcon,
  },
  {
    name: 'Paytm',
    image: PaytmIcon,
  },
  {
    name: 'Airtel Money',
    image: AirtelMoneyIcon,
  },
  {
    name: 'Amazon Pay',
    image: AmazonPayIcon,
  },
]

const methodSelect = () => {
  let items = {} as any
  paymentMethods.forEach((pmt) => {
    let name = pmt.name
    items[name] = false
  })
  return items
}

const Payments1 = () => {
  const [isCODChecked, setIsCODChecked] = useState(false)
  const [isMPMClick, setIsMPMClick] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPmtModalOpen, setIsPmtModalOpen] = useState(false)
  const [pmtMtdSelect, setPmtMtdSelect] = useState<any>(methodSelect())
  const [setupModalHeading, setSetupModalHeading] = useState<string>('')

  console.log(pmtMtdSelect)

  const closeModal = () => {
    if (isPmtModalOpen) {
      setIsPmtModalOpen(false)
    } else {
      setIsModalOpen(false)
    }
  }

  const handleCODClick = () => {
    setIsCODChecked(!isCODChecked)
  }

  const handleMPMClick = () => {
    setIsMPMClick(!isMPMClick)
  }

  const handleSetup = (name: string) => {
    setSetupModalHeading(name)
    setIsModalOpen(true)
  }

  const handleContinue = () => {
    setIsPmtModalOpen(true)
  }

  const handlePaymentMethodSelect = (name: string) => {
    setPmtMtdSelect((prev: any) => {
      let value = prev[name]
      return {
        ...prev,
        [name]: !value,
      }
    })
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
        {!isModalOpen ? (
          ''
        ) : (
          <Modal>
            <div className='flex flex-col p-[24px] gap-[24px]'>
              <div className='flex flex-col gap-[16px]'>
                <div className='flex flex-col gap-[4px]'>
                  <div className='flex justify-between'>
                    <p className='text-[18px] leading-[26px] font-medium text-[#1A181E]'>
                      Set up {setupModalHeading}
                    </p>
                    <button>
                      <img
                        onClick={closeModal}
                        className='h-[24px] w-[24px]'
                        src={CloseIcon}
                        alt='close'
                      />
                    </button>
                  </div>
                  <p className='text-[14px] leading-[20px] text-[#4D4D4D] text-start'>
                    Please enter your Cashfree API keys. You can find your API
                    keys on
                    <br />
                    <span className='text-[#146EB4] font-medium underline'>
                      Cashfree API Key Dashboard
                    </span>
                  </p>
                </div>
                <div className='account flex justify-center gap-[8px] px-[16px] py-[8px] rounded'>
                  <div className='flex gap-[8px]'>
                    <img onClick={closeModal} src={InfoIcon} alt='Info' />
                    <p className='text-[14px] leading-[20px] text-[#4D4D4D]'>
                      Don’t have an Cashfree account?{' '}
                      <button className='font-medium underline'>
                        Create now
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col gap-[24px]'>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <p className='text-[14px] leading-[20px] text-[#4D4D4D]'>
                      API ID <span className='text-[#E50B20]'>*</span>
                    </p>
                    <input
                      className='border-[1px] w-full rounded border-[#D9D9D9] py-[12px] px-[16px] placeholder:text-[16px] placeholder:leading-[24px] placeholder:text-[#999999]'
                      placeholder='Enter merchant id'
                    />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <p className='text-[14px] leading-[20px] text-[#4D4D4D]'>
                      Secrey Key <span className='text-[#E50B20]'>*</span>
                    </p>
                    <input
                      className='border-[1px] w-full rounded border-[#D9D9D9] py-[12px] px-[16px] placeholder:text-[16px] placeholder:leading-[24px] placeholder:text-[#999999]'
                      placeholder='Enter merchant id'
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button
                  onClick={handleContinue}
                  className='px-[24px] py-[8px] bg-[#146EB4] opacity-40 rounded text-white'
                >
                  Continue
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>

      <div className='min-h-screen flex items-center justify-center'>
        {!isPmtModalOpen ? (
          ''
        ) : (
          <Modal>
            <div className='flex justify-between p-[24px]'>
              <p>Choose payment methods</p>
              <button>
                <img
                  onClick={closeModal}
                  className='h-[24px] w-[24px]'
                  src={CloseIcon}
                  alt='close'
                />
              </button>
            </div>
            <div>
              <div className='flex gap-[24px] px-[24px] h-[58vh] overflow-y-auto '>
                <div className='flex flex-col gap-[16px] w-full'>
                  {paymentMethods.map((payMeth, index) => (
                    <div
                      className='flex gap-[24px] justify-between items-center rounded'
                      key={index}
                    >
                      <div className='flex gap-[16px] items-center'>
                        <img src={payMeth.image} alt={payMeth.name} />
                        <p className='text-[16px] leading-[24px] text-[#1A181E] font-medium'>
                          {payMeth.name}
                        </p>
                      </div>
                      <div
                        className='w-[36px] h-[24px] relative inline-block'
                        onClick={() => handlePaymentMethodSelect(payMeth.name)}
                      >
                        <input
                          className='opacity-0 w-[0px] h-[0px]'
                          type='checkbox'
                          checked={pmtMtdSelect[payMeth.name]}
                        />
                        <span className='slider round'></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col items-center gap-[8px] border-t-[1px] border-[#E6E6E6] py-[16px]'>
                <button className='flex px-[24px] py-[8px] rounded bg-[#146EB4] text-white text-[16px] leading-[24px] font-medium'>
                  Finish setup
                </button>

                <button className='underline text-[16px] leading-[24px] font-medium text-[#4D4D4D]'>
                  Edit Cashfree details
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </main>
  )
}

export default Payments1
