const NotFound = () => {
  return (
    <main className='h-[90%]'>
      <div className='flex flex-col gap-5 justify-center items-center h-full text-[24px] leading-[30px]'>
        <p>Sorry, this page is still under construction</p>
        <span className='flex flex-col gap-5 text-[20px]'>
          Click the button below to view the Payments page
          <a
            href='/payments'
            className='flex justify-center w-fit items-center p-2 px-4 place-self-center text-white bg-blue-600 rounded-md text-[16px]'
          >
            Payments
          </a>
        </span>
      </div>
    </main>
  )
}

export default NotFound
