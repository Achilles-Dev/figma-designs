import React from 'react'
import CloseIcon from '../../assets/cross.svg'
import InfoIcon from '../../assets/Info.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className='fixed inset-0 bg-[#1A181E] bg-opacity-60 flex items-center justify-center'>
      <div className='bg-white p-[24px] flex flex-col gap-[24px] rounded-lg w-96 text-center box-shadow-[0_2px_6px_0px_#1A181E0A] w-[564px]'>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[4px]'>
            <div className='flex justify-between'>
              <p className='text-[18px] leading-[26px] font-medium text-[#1A181E]'>
                Set up Cashfree Payments
              </p>
              <button>
                <img
                  onClick={onClose}
                  className='h-[24px] w-[24px]'
                  src={CloseIcon}
                  alt='close'
                />
              </button>
            </div>
            <p className='text-[14px] leading-[20px] text-[#4D4D4D] text-start'>
              Please enter your Cashfree API keys. You can find your API keys on
              <br />
              <span className='text-[#146EB4] font-medium underline'>
                Cashfree API Key Dashboard
              </span>
            </p>
          </div>
          <div className='account flex justify-center gap-[8px] px-[16px] py-[8px] rounded'>
            <div className='flex gap-[8px]'>
              <img onClick={onClose} src={InfoIcon} alt='Info' />
              <p className='text-[14px] leading-[20px] text-[#4D4D4D]'>
                Don’t have an Cashfree account?{' '}
                <button className='font-medium underline'>Create now</button>
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
          <button className='px-[24px] py-[8px] bg-[#146EB4] opacity-40 rounded text-white'>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
