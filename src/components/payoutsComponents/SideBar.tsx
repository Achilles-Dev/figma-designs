import React from 'react'

const Sidebar = () => {
  return (
    <aside className='flex flex-col justify-between w-[224px] bg-[#1E2640] px-[10px] py-[16px] min-h-screen text-white'>
      <div className='flex flex-col gap-[16px]'>
        <div className='flex gap-[12px] justify-between'>
          <div className='flex gap-[4px]'>
            <span>Logo</span>
            <div className='flex flex-col gap-[4px]'>
              <p className='text-[15px] leading-[22px]'>Nishyan</p>
              <p className='text-[13px] leading-[16px] opacity-[80%]'>
                Visit store
              </p>
            </div>
          </div>
          <span>Icon</span>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Home</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Orders</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Products</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Delivery</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Marketing</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Analytics</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Payments</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Tools</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Discounts</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Audience</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Appearance</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span>Icon</span>
            <p>Plugins</p>
          </div>
        </div>
      </div>
      <div className='flex px-[12px] py-[6px] bg-[#353C53] rounded gap-[10px]'>
        <span>Icon</span>
        <div className='flex flex-col gap-[2px]'>
          <p className='opacity-[80%] text-[13px] leading-[16px]'>
            Available credits
          </p>
          <p className='text-[16px] leading-[22px]'>222.10</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
