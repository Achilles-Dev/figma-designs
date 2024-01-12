import React from 'react'
import LogoImage from '../../assets/Image.png'
import ChevronDownIcon from '../../assets/Chevron Down.svg'
import HomeIcon from '../../assets/Home.svg'
import OrdersIcon from '../../assets/Orders.svg'
import ProductsIcon from '../../assets/Products.svg'
import DeliveryIcon from '../../assets/Delivery.svg'
import MarketingIcon from '../../assets/Marketing.svg'
import AnalyticsIcon from '../../assets/Analytics.svg'
import PaymentsIcon from '../../assets/Payments.svg'
import ToolsIcon from '../../assets/Tools.svg'
import DiscountsIcon from '../../assets/Discounts.svg'
import AudienceIcon from '../../assets/Audience.svg'
import AppearanceIcon from '../../assets/Appearance.svg'
import PluginsIcon from '../../assets/Plugins.svg'
import FrameIcon from '../../assets/Frame.svg'

const Sidebar = () => {
  return (
    <aside className='flex flex-col justify-between w-[224px] bg-[#1E2640] px-[10px] py-[16px] min-h-screen text-white'>
      <div className='flex flex-col gap-[16px]'>
        <div className='flex gap-[12px] justify-between'>
          <div className='flex gap-[12px]'>
            <span className='w-[39px] h-[39px]'>
              <img src={LogoImage} alt='Logo' />
            </span>
            <div className='flex flex-col gap-[4px]'>
              <p className='text-[15px] leading-[22px]'>Nishyan</p>
              <p className='text-[13px] leading-[16px] opacity-[80%]'>
                Visit store
              </p>
            </div>
          </div>
          <span className='flex items-center justify-center'>
            <img src={ChevronDownIcon} alt='Down Arrow' />
          </span>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={HomeIcon} alt='Home' />
            </span>
            <p>Home</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={OrdersIcon} alt='Orders' />
            </span>
            <p>Orders</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={ProductsIcon} alt='Products' />
            </span>
            <p>Products</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={DeliveryIcon} alt='Delivery' />
            </span>
            <p>Delivery</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={MarketingIcon} alt='Marketing' />
            </span>
            <p>Marketing</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={AnalyticsIcon} alt='Analytics' />
            </span>
            <p>Analytics</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={PaymentsIcon} alt='Payments' />
            </span>
            <p>Payments</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={ToolsIcon} alt='Tools' />
            </span>
            <p>Tools</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={DiscountsIcon} alt='Discounts' />
            </span>
            <p>Discounts</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={AudienceIcon} alt='Audience' />
            </span>
            <p>Audience</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={AppearanceIcon} alt='Appearance' />
            </span>
            <p>Appearance</p>
          </div>
          <div className='flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%]'>
            <span className='flex items-center'>
              <img src={PluginsIcon} alt='Plugins' />
            </span>
            <p>Plugins</p>
          </div>
        </div>
      </div>
      <div className='flex px-[12px] py-[6px] bg-[#353C53] rounded gap-[10px]'>
        <span className='flex items-center'>
          <img src={FrameIcon} alt='Frame' />
        </span>
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
