import SortIcon from '../../assets/Sort.svg'
import ChevronDownIcon from '../../assets/Chevron Down 2.svg'
import SearchIcon from '../../assets/Fill2.svg'
import DownloadIcon from '../../assets/download.svg'
import ArrowLeft from '../../assets/ArrowLeft.svg'
import ArrowRight from '../../assets/ArrowRight.svg'
import { useEffect, useState } from 'react'
import useTable from '../../hooks/useTable'

const tableHeading = [
  'Order ID',
  'Order date',
  'Order amount',
  'Transaction fees',
]

const tableData = [
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
  { orderId: '#281209', orderdate: '7 July, 2023', orderAmount: '₹1,278.23' },
]

const rowsPerPage = 10

const Payments = () => {
  const [page, setPage] = useState(1)
  const { slice, range } = useTable(tableData, page, rowsPerPage)

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1)
    }
  }, [slice, page])

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (page < range.length) {
      setPage(page + 1)
    }
  }

  return (
    <main className='flex flex-col gap-[32px] p-[32px] bg-[#FAFAFA] min-h-[91%]'>
      <div className='flex flex-col gap-[24px] w-full'>
        <div className='flex justify-between'>
          <p className='text-[20px] leading-[28px]'>Overview</p>
          <button className='flex gap-[16px] border-[1px] border-[#D9D9D9] rounded px-[16px] py-[6px] items-center'>
            <p className='text-[#4D4D4D] text-[16px] leading-[24px]'>
              Last Month
            </p>
            <span className='w-[16px] h-[16px'>
              <img color='black' src={ChevronDownIcon} alt='Down Arrow' />
            </span>
          </button>
        </div>
        <div className='flex gap-[20px] w-full'>
          <div className='flex flex-col gap-[24px] p-[24px] rounded bg-white w-1/2'>
            <p className='text-[16px] leading-[24px] text-[#4D4D4D]'>
              Online orders
            </p>
            <p className='text-[32px] leading-[38px] text-[#1A181E]'>231</p>
          </div>
          <div className='flex flex-col gap-[24px] p-[24px] rounded bg-white w-1/2'>
            <p className='text-[16px] leading-[24px] text-[#4D4D4D]'>
              Amount received
            </p>
            <p className='text-[32px] leading-[38px] text-[#1A181E]'>
              ₹23,92,312.19
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <p className='text-[20px] leading-[28px] font-medium'>
          Transactions | This Month
        </p>
        <div className='rounded-[8px] bg-white p-[12px] pb-[24px]'>
          <div className='flex flex-col gap-[12px]'>
            <div className='flex justify-between'>
              <div className='relative block'>
                <input
                  className='placeholder:leading-[20px] placeholder:text-[14px] rounded-md border-[1px] border-[#D9D9D9] bg-[#FFFFFF] pl-9 px-[16px] py-[9px] h-[40px]'
                  placeholder='Search by order ID...'
                />
                <span className='absolute inset-y-0 left-0 flex items-center pl-[16px]'>
                  <img src={SearchIcon} alt='Search' />
                </span>
              </div>
              <div className='flex gap-[12px] h-[36px] items-center'>
                <button className='flex gap-[6px] text-[16px] leading-[24px] text-[#4D4D4D] border-[1px] border-[#D9D9D9] rounded px-[12px] py-[6px] items-center'>
                  Sort
                  <span>
                    <img src={SortIcon} alt='Sort' />
                  </span>
                </button>
                <button className='flex h-[36px] w-[36px] gap-[6px] border-[1px] border-[#D9D9D9] rounded items-center justify-center'>
                  <img src={DownloadIcon} alt='Download' />
                </button>
              </div>
            </div>
            <table className='w-full'>
              <thead>
                <tr className='flex gap-[12px] justify-between px-[12px] py-[10px] rounded bg-[#F2F2F2]'>
                  {tableHeading.map((rowItem, index) => (
                    <th key={index} className='w-full'>
                      <p
                        className={`text-[14px] leading-[20px] text-[#4D4D4D] ${
                          index < 2 ? 'text-start' : 'text-end'
                        } `}
                      >
                        {rowItem}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='w-full'>
                {slice.map((item, index) => (
                  <tr
                    key={index}
                    className='flex justify-between px-[12px] py-[14px] border-b-[1px]'
                  >
                    <td className='w-full'>{item.orderId}</td>
                    <td className='w-full'>{item.orderdate}</td>
                    <td className='w-full text-end'>{item.orderAmount}</td>
                    <td className='w-full text-end'>
                      {item.orderAmount.charAt(0) +
                        Math.ceil(
                          parseFloat(
                            item.orderAmount.slice(1).replace(/,/g, '')
                          ) * 0.01721
                        )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='flex gap-[24px] justify-center mt-[24px]'>
              <button
                onClick={handlePrevious}
                className='flex gap-[6px] items-center px-[12px] py-[6px] text-[#4D4D4D] border-[1px] border-[#D9D9D9] rounded'
              >
                <span className='w-[18px] h-[18px] flex items-center justify-center'>
                  <img src={ArrowLeft} alt='Left' />
                </span>
                <p>Previous</p>
              </button>
              <div className='flex gap-[8px] items-center'>
                {range.map((el, index) => (
                  <button
                    key={index}
                    className={`w-[28px] h-[28px] ${
                      el === page ? 'bg-[#146EB4] text-white' : ''
                    } hover:bg-[#146EB4] hover:text-white active:bg-[#146EB4] active:text-white rounded`}
                    onClick={() => setPage(el)}
                  >
                    {el}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className='flex gap-[6px] items-center px-[12px] py-[6px] text-[#4D4D4D] border-[1px] border-[#D9D9D9] rounded'
              >
                <p>Next</p>
                <span className='w-[18px] h-[18px] flex items-center justify-center'>
                  <img src={ArrowRight} alt='Right' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Payments
