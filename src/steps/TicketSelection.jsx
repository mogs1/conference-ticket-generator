import React from 'react';
import { useFormContext } from 'react-hook-form';

const TicketSelection = () => {
  const tickets = [
    { type: 'Regular Access', price: 'Free', remaining: 20 },
    { type: 'VIP Access', price: '$50', remaining: 20 },
    { type: 'VVIP Access', price: '$150', remaining: 20 }
  ];

  const { register, watch, setValue,} = useFormContext();
  const selectedTicket = watch('ticketType')

  const selectedButtons = [
    {type: 'reset', name: 'Cancel' },
    {type: 'submit', name: 'Next' },
  ]

  return (
    <div className='flex flex-col gap-8 font-[roboto]'>
      <div className="flex flex-col p-6 items-center gap-2 self-stretch rounded-3xl 
                      border-2 border-x-[#07373F] border-b-[#07373F] border-t-0 techemberColor">
        <h1 className="techemberFont">
            Techember Fest '25
        </h1>
        <div className=' text-[#FAFAFA] max-w-xs text-center '>
        <p className="max-w-2xs mx-auto">
        Join us for an unforgettable experience at [Event Name]! 
        Secure your spot now.
        </p>
        <p className="">
        📍 [Event Location] || March 15, 2025 | 7:00 PM
        </p>
        </div>
      </div>

      <div>
        <h2 className="mb-1.5">Select Ticket Type:</h2>
        <div className='flex flex-col sm:flex-row justify-between items-start w-full p-4 gap-6 self-stretch
                        border border-[#07373F] bg-[#052228] rounded-3xl'>
          {tickets.map((ticket) => (
          <div 
            key={ticket.type}
            onClick={() => setValue('ticketType', ticket.type)}
            className={`flex items-start justify-center w-full p-3 gap-3 border rounded-xl cursor-pointer transition-all
              ${selectedTicket === ticket.type 
                ? 'border-[#197686] bg-[#197686]' 
                : 'border-gray-200 hover:border-blue-200'}`}
          >
            <div className="flex flex-col-reverse w-full">
              <div className='flex flex-col items-start gap-1 '>
                <h3>{ticket.type}</h3>
                <p>{ticket.remaining} left!</p>
              </div>
              <span className="flex w-full text-2xl font-semibold">{ticket.price}</span>
            </div>
          </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-1.5">Number of Tickets</h2>
        <select
          {...register('quantity')}
          className="flex w-full p-3 gap-2 self-stretch items-center border rounded-xl border-[#07373F] bg-[#08252B] outline-none"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center p-3 gap-8 self-stretch
                     bg-[#041E23] border border-[#0E464F] rounded-3xl">
       {selectedButtons.map((button) =>
       <button
       type={button.type}
       className='flex p-3 justify-center w-full items-center rounded-xl border border-[#24A0B5] transition-all duration-200
                  hover:bg-[#24A0B5] '>
                    {button.name}
       </button>
      )}
      </div>
    </div>
  );
};

export default TicketSelection;