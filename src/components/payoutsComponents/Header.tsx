const Header = () => {
  return (
    <nav className='flex justify-between px-[32px] py-[12px] border-b-[1px] border-[#D9D9D9]'>
      <div className='flex gap-[16px] items-center'>
        <p className='text-[15px] leading-[22px]'>Payments</p>
        <span className='flex gap-[6px] text-[12px] leading-[16px]'>
          <span>Icon</span>How it works
        </span>
      </div>
      <div>
        <input
          className='rounded-md bg-[#F2F2F2] px-[16px] py-[9px] w-[400px] h-[40px]'
          placeholder='Search features, tutorials, etc.'
        />
      </div>
      <div className='flex items-center gap-[8px]'>
        <span>Icon 1</span>
        <span>Icon 2</span>
      </div>
    </nav>
  )
}

export default Header
