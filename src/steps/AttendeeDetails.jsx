import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Camera, Mail } from "lucide-react";
import cld from "../config/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const AttendeeDetails = ({ setStep }) => {
  const { register, formState: { errors }, setValue } = useFormContext();
  
  const [preview, setPreview] = useState(null); 
  const [uploadedPublicId, setUploadedPublicId] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET
  const cloud_name = import.meta.env.VITE_CLOUD_NAME

  // Function to upload image to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset); 

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      
      if (data.secure_url) {
        setUploadedPublicId(data.public_id);
        setValue("profilePhotoUrl", data.secure_url);
        setPreview(data.secure_url); 
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  // Handle file selection and upload
  const handleFileChange = async (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const objectURL = URL.createObjectURL(file); 
      setPreview(objectURL); 
      await uploadToCloudinary(file); 
    }
  };


  const profileImage = uploadedPublicId
    ? cld.image(uploadedPublicId).resize(fill().width(240).height(240))
    : null;

    const selectedButtons = [
      { type: 'button', name: 'Back', onClick: () => setStep(1) },
      { type: 'submit', name: 'Get My Free Ticket' }
    ];

    
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-8 px-6 pt-6 pb-12 border border-[#07373F] bg-[#052228] rounded-3xl">
        <h1 className="text-base/snug">Upload Profile Photo</h1>

        <div className="flex justify-center items-center h-[200px] self-stretch bg-[#00000033]">
          <label 
            htmlFor="fileInput"
            className="relative flex flex-col justify-center items-center gap-4 p-6 text-center 
                      w-[240px] h-[240px] bg-[#0E464F] border border-[#24a0b580] rounded-4xl 
                      overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              backgroundImage: preview ? `url(${preview})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            />
            
            {!preview && (
              <div className="flex flex-col items-center">
                <Camera className="h-12 w-12 text-gray-400" />
                <p>Click to upload</p>
              </div>
            )}

            {preview && isHovering && (
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                <Camera className="h-12 w-12 text-white" />
                <p className="text-white">Want to change the image?</p>
              </div>
            )}
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Enter your name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border rounded-xl border-[#07373F] bg-[#052228] outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Enter your email*</label>
          <div className="relative">
          <input
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="hello@techemberfest.com"
            className="relative w-full p-3 pl-10 border rounded-xl border-[#07373F] bg-[#052228] outline-none 
                      placeholder:text-white/70"
          />
          <Mail className="absolute inset-3" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="request" className="block mb-2">Special request?</label>
          <textarea
            {...register("request")}
            placeholder="What's on your mind?"
            rows={4}
            className="w-full p-3 border rounded-xl border-[#07373F] bg-[#052228] outline-none
                      placeholder:text-white/70"
          />
        </div>
      </div>
      
  <div className="flex flex-col sm:flex-row justify-center items-center p-3 gap-8 self-stretch
                    bg-[#041E23] border border-[#0E464F] rounded-3xl">
        {selectedButtons.map((button) => (
          <button
            key={button.name}
            type={button.type}
            onClick={button.onClick}
            className="flex p-3 justify-center w-full items-center rounded-xl 
                     border border-[#24A0B5] transition-all duration-200
                     hover:bg-[#24A0B5] cursor-pointer"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AttendeeDetails;
