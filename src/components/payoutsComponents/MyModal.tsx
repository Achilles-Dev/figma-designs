import React, { ReactNode } from 'react'

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className='fixed inset-0 bg-[#1A181E] bg-opacity-60 flex items-center justify-center'>
      <div className='bg-white flex flex-col gap-[24px] rounded-lg w-96 text-center box-shadow-[0_2px_6px_0px_#1A181E0A] w-[564px]'>
        {children}
      </div>
    </div>
  )
}

export default Modal
