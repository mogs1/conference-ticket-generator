import { useFormContext } from 'react-hook-form';

const AttendeeDetails = ({setStep}) => {
  const { register, formState: { errors } } = useFormContext();

  const selectedButtons = [
    {type: 'button', name: 'Back' },
    {type: 'submit', name: 'Get My Free Ticket' },
  ]

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="space-y-6">
      <div className='flex flex-col gap-8 px-6 pt-6 pb-12
                      border border-[#07373F] bg-[#052228] rounded-3xl'>
      <h1 className="text-base/snug">Upload Profile Photo</h1>

     <div className='flex justify-center items-center h-[200px] self-stretch bg-[#00000033]'>
      <div className="flex flex-col justify-center items-center gap-4 p-6 text-center
                      w-[240px] h-[240px] bg-[#0E464F] border border-[#24a0b580] rounded-4xl">
        <input
          type="file"
          {...register('profilePhoto')}
          className="hidden"
          id="profilePhoto"
          accept="image/*"
        />
        <label htmlFor="profilePhoto" className="cursor-pointer">
          <div className="mx-auto h-12 w-12 text-gray-400">📷</div>
          <p >Drag & drop or click to upload</p>
        </label>
      </div>
     </div>
      </div>

      <div className='bg-[#07373F] h-1 self-stretch'></div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name">Enter your name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            name='name'
            className="w-full p-3 border rounded-xl border-[#07373F] outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Enter your name*</label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="hello@avioflagos.io"
            type="email"
            className="w-full p-3 border rounded-xl border-[#07373F] outline-none placeholder:text-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="request">Special request?</label>
          <textarea
            {...register('about')}
            placeholder="What's on your mind?"
            rows={4}
            name='request'
            className="w-full p-3 border rounded-xl border-[#07373F] outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center p-3 gap-8 self-stretch
                     bg-[#041E23] border border-[#0E464F] rounded-3xl">
       {selectedButtons.map((button) =>
       <button
       type={button.type}
       onClick={button.type === 'button' && handleBack }
       className='flex p-3 justify-center w-full items-center rounded-xl border border-[#24A0B5] transition-all duration-200
                  hover:bg-[#24A0B5] '>
                    {button.name}
       </button>
      )}
      </div>
    </div>
  );
};

export default AttendeeDetails;