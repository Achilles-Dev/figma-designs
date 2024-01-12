const tableHeading = [
  'Order ID',
  'Order date',
  'Order amount',
  'Transaction fees',
]

const tableData = [
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
  { orderId: '#281209', Orderdate: '7 July, 2023', OrderAmount: '₹1,278.23' },
]

const Payments = () => {
  return (
    <main className='flex flex-col gap-[32px] p-[32px] bg-[#FAFAFA] min-h-[91%]'>
      <div className='flex flex-col gap-[24px]'>
        <div className='flex justify-between'>
          <p className='text-[20px] leading-[28px]'>Overview</p>
          <div className='flex gap-[16px] border-[1px] border-[#D9D9D9] rounded px-[16px] py-[6px] items-center'>
            <p className='text-[#4D4D4D] text-[16px] leading-[24px]'>
              Last Month
            </p>
            <span>Icon</span>
          </div>
        </div>
        <div className='flex gap-[20px]'>
          <div className='flex flex-col gap-[24px] p-[24px] rounded bg-white w-[566px]'>
            <p className='text-[16px] leading-[24px] text-[#4D4D4D]'>
              Online orders
            </p>
            <p className='text-[32px] leading-[38px] text-[#1A181E]'>231</p>
          </div>
          <div className='flex flex-col gap-[24px] p-[24px] rounded bg-white w-[566px]'>
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
              <input
                className='rounded-md border-[1px] border-[#D9D9D9] bg-[#FFFFFF] px-[16px] py-[9px] h-[40px]'
                placeholder='Search by order ID...'
              />
              <div className='flex gap-[12px]'>
                <button className='flex gap-[6px] border-[1px] border-[#D9D9D9] rounded px-[12px] py-[6px] items-center'>
                  Sort <span>Icon</span>
                </button>
                <button className='flex gap-[6px] border-[1px] border-[#D9D9D9] rounded px-[12px] py-[6px] items-center'>
                  Icon
                </button>
              </div>
            </div>
            <table className='w-full'>
              <thead>
                <tr className='flex justify-between px-[12px] py-[10px] rounded bg-[#F2F2F2]'>
                  {tableHeading.map((rowItem, index) => (
                    <th key={index} className='w-[246px]'>
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
                {tableData.map((item, index) => (
                  <tr
                    key={index}
                    className='flex justify-between px-[12px] py-[14px] border-b-[1px]'
                  >
                    <td className='w-[246px]'>{item.orderId}</td>
                    <td className='w-[246px]'>{item.Orderdate}</td>
                    <td className='w-[246px] text-end'>{item.OrderAmount}</td>
                    <td className='w-[246px] text-end'>
                      {item.OrderAmount.charAt(0) +
                        Math.ceil(
                          parseFloat(
                            item.OrderAmount.slice(1).replace(/,/g, '')
                          ) * 0.01721
                        )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Payments
