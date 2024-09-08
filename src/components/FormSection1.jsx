import React from 'react'

const FormSection1 = () => {
  return (
    <div className="border-[2px] border-[#917fb3] border-dashed lg:w-[43%] w-[90%] px-[24px] py-3 rounded-2xl">
      <p className="font-bold lg:text-3xl md:text-3xl text-[16px] mb-8 text-center text-dark-primary">
        Add your details
      </p>
      <div className="w-full flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px]">
            Your Name
          </p>
          <input
            type="text"
            className="px-4 p-2 bg-primary rounded-lg placeholder:text-dark-secondary text-[12px] md:text-[19.2px] lg:text-[19.2px]"
            placeholder="Enter your name"
          />
        </label>

        <label className="flex flex-col gap-1">
          <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px]">
            Partner Name
          </p>
          <input
            type="text"
            className="px-4 p-2 bg-primary rounded-lg placeholder:text-dark-secondary text-[12px] md:text-[19.2px] lg:text-[19.2px]"
            placeholder="Enter your partner name"
          />
        </label>

        <label className="flex flex-col gap-1">
          <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px]">
            Couple Name
          </p>
          <input
            type="text"
            className="px-4 p-2 bg-primary rounded-lg placeholder:text-dark-secondary text-[12px] md:text-[19.2px] lg:text-[19.2px]"
            placeholder="Eg.. Virat & Anushka => Virushka"
          />
        </label>

        {/* Custom file input for 'Your Image' */}
        <label className="flex flex-col gap-1">
          <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px] flex gap-2 items-center">
            <span>Your Image</span>
            <span className="lg:text-[15px] text-[10px] text-dark-secondary">(recommended aspect ratio of image 1:1)</span>
          </p>
          <label className="relative cursor-pointer px-4 py-2 bg-primary text-dark-secondary rounded-lg text-center border-[2px] border-[#917fb3] border-dashed">
            <span className='text-black hover:text-dark-secondary '>Browse...</span>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer "
            />
          </label>
        </label>

        {/* Custom file input for 'Partner Image' */}
        <label className="flex flex-col gap-1">
          <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px] flex gap-2 items-center">
            <span>Partner Image</span>
            <span className="lg:text-[15px] text-[10px] text-dark-secondary">(recommended aspect ratio of image 1:1)</span>
          </p>
          <label className="relative cursor-pointer px-4 py-2 bg-primary text-dark-secondary rounded-lg text-center border-[2px] border-[#917fb3] border-dashed">
            <span className='text-black'>Browse...</span>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
        </label>

        {/* Custom file input for 'Couple Image' */}
        <label className="flex flex-col gap-1">
          <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px] flex gap-2 items-center">
            <span>Couple Image</span>
            <span className="lg:text-[15px] text-[10px] text-dark-secondary">(Optional)</span>
          </p>
          <label className="relative cursor-pointer px-4 py-2 bg-primary text-dark-secondary rounded-lg text-center border-[2px] border-[#917fb3] border-dashed">
            <span className='text-black'>Browse...</span>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
        </label>
      </div>
    </div>
  )
}

export default FormSection1
