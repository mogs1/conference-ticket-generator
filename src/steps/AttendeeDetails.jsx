import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';

const AttendeeDetails = ({ setStep }) => {
  const { register, formState: { errors }, setValue } = useFormContext();
  const [preview, setPreview] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {'image/*': []},
    onDrop: ([file]) => {
      if (file) {
        setValue('profilePhoto', file);
        setPreview(URL.createObjectURL(file));
      }
    }
  });

  const selectedButtons = [
    { type: 'button', name: 'Back', onClick: () => setStep(1) },
    { type: 'submit', name: 'Get My Free Ticket' }
  ];

  return (
    <div className="space-y-6">
      {/* Photo Upload Section */}
      <div className="flex flex-col gap-8 px-6 pt-6 pb-12 border border-[#07373F] bg-[#052228] rounded-3xl">
        <h1 className="text-base/snug">Upload Profile Photo</h1>

        <div className="flex justify-center items-center h-[200px] self-stretch bg-[#00000033]">
          <div 
            {...getRootProps()}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative"
          >
            <input {...getInputProps()} />
            <div className="flex flex-col justify-center items-center gap-4 p-6 text-center 
                          w-[240px] h-[240px] bg-[#0E464F] border border-[#24a0b580] rounded-4xl
                          overflow-hidden relative">
              {preview ? (
                <>
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {isHovering && (
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                      <div className="mx-auto h-12 w-12 text-center text-gray-400">📷</div>
                      <p className="text-white">Click to change photo</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 w-full flex flex-col items-center justify-center cursor-pointer">
                  <div className="mx-auto h-12 w-12 text-center text-gray-400">📷</div>
                  <p>Drag & drop or click to upload</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#07373F] h-1 self-stretch" />

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Enter your name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            name="name"
            className="w-full p-3 border rounded-xl border-[#07373F] outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Enter your email*</label>
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
            className="w-full p-3 border rounded-xl border-[#07373F] outline-none 
                     placeholder:text-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="request" className="block mb-2">Special request?</label>
          <textarea
            {...register('request')}
            placeholder="What's on your mind?"
            rows={4}
            className="w-full p-3 border rounded-xl border-[#07373F] outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center p-3 gap-8 self-stretch
                    bg-[#041E23] border border-[#0E464F] rounded-3xl">
        {selectedButtons.map((button) => (
          <button
            key={button.name}
            type={button.type}
            onClick={button.onClick}
            className="flex p-3 justify-center w-full items-center rounded-xl 
                     border border-[#24A0B5] transition-all duration-200
                     hover:bg-[#24A0B5]"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AttendeeDetails;