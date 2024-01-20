import VectorIcon from '../../assets/Vector.svg'
import PolygonIcon from '../../assets/Polygon.svg'
import HelpIcon from '../../assets/Help.svg'
import SearchIcon from '../../assets/Fill.svg'
import CorrectIcon from '../../assets/Correct.svg'
import CloseIcon from '../../assets/cross.svg'

const Header = ({
  message,
  setMessage,
}: {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
}) => {
  const handleClose = () => {
    setMessage('')
  }

  return (
    <nav className='flex justify-between px-[32px] py-[12px] border-b-[1px] border-[#D9D9D9]'>
      <div className='flex gap-[16px] items-center'>
        <p className='text-[15px] leading-[22px]'>Payments</p>
        <span className='flex gap-[6px] text-[12px] leading-[16px] items-center'>
          <span className='w-[16px] h-[16px]'>
            <img src={HelpIcon} alt='Help' />
          </span>
          <span className='flex items-center'>How it works</span>
        </span>
      </div>
      {message === '' ? (
        <div className='relative block'>
          <input
            className='placeholder:text-[#808080] placeholder:leading-[22px] placeholder:text-[15px] rounded-md bg-[#F2F2F2] pl-[40px] px-[16px] py-[9px] w-[400px] h-[40px]'
            placeholder='Search features, tutorials, etc.'
          />
          <span className='absolute inset-y-0 left-0 flex items-center pl-[16px]'>
            <img src={SearchIcon} alt='Search' />
          </span>
        </div>
      ) : (
        <div className='flex items-center gap-[12px] p-[8px] pr-[12px] border-[1px] border-[#17B31B] rounded-md box-shadow-[0_4px_12px_0_#1A181E1A] bg-[#E8F8E9]'>
          <img src={CorrectIcon} alt='Correct' />
          <div className='flex gap-[64px]'>
            <p className='text-[14px] leading-[20px] font-medium text-[#1A181E]'>
              {message}
            </p>
            <img
              onClick={handleClose}
              className='w-[16px] h-[16px]'
              src={CloseIcon}
              alt='Close'
            />
          </div>
        </div>
      )}

      <div className='flex items-center gap-[8px]'>
        <span className='w-[40px] h-[40px] flex items-center justify-center bg-[#E6E6E6] rounded-full'>
          <img src={VectorIcon} alt='Vector' />
        </span>
        <span className='w-[40px] h-[40px] flex items-center justify-center bg-[#E6E6E6] rounded-full'>
          <img src={PolygonIcon} alt='Arrow Down' />
        </span>
      </div>
    </nav>
  )
}

export default Header
