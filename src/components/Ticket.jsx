import React from 'react';
import  ticketBg  from '../assets/bg.png'
import  barcode  from '../assets/barcode.gif'

const Ticket = ({ formData = {} }) => {
  const {
    profilePhotoUrl, 
    name = '',
    email = '',
    ticketType = '',
    quantity = '',
    request = '',
  } = formData;

  return (
    <div className="relative flex w-[300px] h-[600px]">
      {/* Ticket Background Image */}
      <img 
        src={ticketBg} 
        alt="Ticket Background" 
        className="absolute inset-0 h-full w-full"
        crossOrigin="anonymous"
      />
      
      <div className="relative mx-auto z-10 top-5 flex flex-col p-3.5 items-center h-[446px] w-[260px] text-white
                     shrink-0 rounded-2xl border border-[#24A0B5] bg-blur-[2px] bg-[#031e211a]">

        <div className='flex w-[232px] flex-col items-center gap-5 shrink-0 '>
            <div className="flex flex-col w-[175px] items-center ">
                <h1 className="road_rage self-stretch text-[34px]">
                    Techember Fest ''25
                </h1>
              <div className='flex p-1 flex-col text-[10px] justify-center items-center gap-1 '>
                <p className="">
                    📍 04 Rumens road, Ikoyi, Lagos
                </p>
                <p className="">
                    📅 March 15, 2025 | 7:00 PM                
                </p>
              </div>
            </div>

            <img src={profilePhotoUrl}
            className='w-[140px] h-[140px] rounded-xl border-4 border-[#24a0b580] '
             alt="User-Profile"
             crossOrigin="anonymous"
              />

            <div className='flex flex-col justify-center items-center text-[12px] self-stretch
                            border border-[#133D44] bg-[#08343C] rounded-b-lg'>

                                {/* First field*/}
                <div className='flex items-center gap-2 self-stretch border-b border-b-[#12464E]'>
                    <span className='flex flex-col flex-1 justify-center items-start p-1 gap-1 border-r border-r-[#12464E]'>
                        <label className='opacity-35'>Enter your name</label>
                        <p className='font-bold'>{name}</p>
                    </span>
                    <span className='flex flex-col flex-1 justify-center items-start p-1 gap-1 '>
                        <label className='opacity-35'>Enter your email*</label>
                        <p className='font-bold'>{email}</p>
                    </span>

                    {/* second field  */}
                </div>
                <div className='flex  items-center gap-2 self-stretch border-b border-b-[#12464E]'>
                    <span className='flex flex-1 flex-col justify-center items-start p-1 gap-1 border-r border-r-[#12464E]'>
                        <label className='opacity-35'>Ticket Type</label>
                        <p className='font-bold'>{ticketType}</p>
                    </span>
                    <span className='flex  flex-1 flex-col justify-center items-start p-1 gap-1 '>
                        <label className='opacity-35'>Ticket For:</label>
                        <p className='font-bold'>{quantity}</p>
                    </span>

                    {/* third field  */}
                </div>
                {request && <div className='flex items-center gap-2 self-stretch'>
                    <span className='flex flex-col justify-center items-start p-1 gap-1 '>
                        <label className='opacity-35'>Special request?</label>
                        <p className='font-bold'>{request}</p>
                    </span>
                </div>}
            </div>
        </div>
      </div>

      <div class="absolute z-10 w-full mx-auto bottom-7">
        <img 
        className='mx-auto w-[260px]'
        src={barcode}
        crossOrigin="anonymous"
        />
      </div>
    </div>
  );
};

export default Ticket;