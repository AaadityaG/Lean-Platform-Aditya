import React, { useState } from 'react';
import Button from './Button';
import { Trash } from 'lucide-react';

const FormSection2 = () => {
  const [milestones, setMilestones] = useState([{ id: 1 }]); // Start with one milestone

  // Function to add a new milestone
  const addMilestone = () => {
    setMilestones([...milestones, { id: milestones.length + 1 }]);
  };

  // Function to remove a specific milestone by its id
  const removeMilestone = (id) => {
    setMilestones(milestones.filter(milestone => milestone.id !== id));
  };

  return (
    <div className="border-[2px] border-[#917fb3] border-dashed lg:w-[43%] w-[90%] px-[24px] py-3 rounded-2xl">
      <p className="font-bold lg:text-3xl md:text-3xl text-[16px] mb-8 text-center text-dark-primary">
        Add your journey milestones
      </p>
      <div className="w-full flex flex-col gap-4 ">
        {/* Loop through the milestones array to display input fields */}
        {milestones.map((milestone, index) => (
          <div className="flex gap-4 relative justify-center" key={milestone.id}>
            <label className="flex flex-col gap-1 justify-center w-full">
              <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px]">
                Milestone {index + 1}
              </p>
              <input
                type="text"
                className="px-4 p-2 w-[90%] bg-primary rounded-lg placeholder:text-dark-secondary text-[12px] md:text-[19.2px] lg:text-[19.2px]"
                placeholder={`Milestone ${index + 1}`}
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <p className="text-[12px] md:text-[19.2px] lg:text-[19.2px]">
                Date of Milestone {index + 1}
              </p>
              <input
                type="date"
                className="px-4 p-2  bg-primary rounded-lg placeholder:text-dark-secondary text-[12px] md:text-[19.2px] lg:text-[19.2px]"
              />
            </label>
            {/* Trash icon to remove milestone */}
            <Trash 
              size={14} 
              className='absolute top-[3%] right-[3%] cursor-pointer' 
              onClick={() => removeMilestone(milestone.id)} 
            />
          </div>
        ))}

        {/* Center the button below inputs */}
        <div className="flex justify-center mt-4 ">
          <Button text="Add Milestone" onClick={addMilestone} />
        </div>
      </div>
    </div>
  );
};

export default FormSection2;
