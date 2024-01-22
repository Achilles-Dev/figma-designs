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
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const { pathname } = useLocation()
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
            <img
              className='w-[20px] h-[20px]'
              src={ChevronDownIcon}
              alt='Down Arrow'
            />
          </span>
        </div>
        <div className='flex flex-col gap-[4px]'>
          <a
            href='/'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img className='w-[20px] h-[20px]' src={HomeIcon} alt='Home' />
            </span>
            <p>Home</p>
          </a>
          <a
            href='/orders'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/orders' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={OrdersIcon}
                alt='Orders'
              />
            </span>
            <p>Orders</p>
          </a>
          <a
            href='/products'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/products' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={ProductsIcon}
                alt='Products'
              />
            </span>
            <p>Products</p>
          </a>
          <a
            href='/delivery'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/delivery' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={DeliveryIcon}
                alt='Delivery'
              />
            </span>
            <p>Delivery</p>
          </a>
          <a
            href='/marketing'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/marketing' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={MarketingIcon}
                alt='Marketing'
              />
            </span>
            <p>Marketing</p>
          </a>
          <a
            href='/analytics'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/analytics' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={AnalyticsIcon}
                alt='Analytics'
              />
            </span>
            <p>Analytics</p>
          </a>
          <a
            href='/payments'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/payments' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={PaymentsIcon}
                alt='Payments'
              />
            </span>
            <p>Payments</p>
          </a>
          <a
            href='/tools'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/tools' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img className='w-[20px] h-[20px]' src={ToolsIcon} alt='Tools' />
            </span>
            <p>Tools</p>
          </a>
          <a
            href='/discounts'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/discounts' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={DiscountsIcon}
                alt='Discounts'
              />
            </span>
            <p>Discounts</p>
          </a>
          <a
            href='/audience'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/audience' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={AudienceIcon}
                alt='Audience'
              />
            </span>
            <p>Audience</p>
          </a>
          <a
            href='/appearance'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/appearance' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={AppearanceIcon}
                alt='Appearance'
              />
            </span>
            <p>Appearance</p>
          </a>
          <a
            href='/plugins'
            className={`flex gap-[12px] rounded px-[16px] py-[8px] opacity-[80%] ${
              pathname === '/plugins' && 'bg-[#FFFFFF1A]'
            } `}
          >
            <span className='flex items-center'>
              <img
                className='w-[20px] h-[20px]'
                src={PluginsIcon}
                alt='Plugins'
              />
            </span>
            <p>Plugins</p>
          </a>
        </div>
      </div>
      <div className='flex px-[12px] py-[6px] bg-[#353C53] rounded gap-[10px]'>
        <span className='flex items-center'>
          <img className='w-[36px] h-[36px]' src={FrameIcon} alt='Frame' />
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
