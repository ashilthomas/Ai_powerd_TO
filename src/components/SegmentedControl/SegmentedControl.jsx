import React, { useState } from 'react'


  const options = ["Low", "Medium", "High"];

function SegmentedControl() {
      const [selected, setSelected] = useState("Medium");
  return (
    <div>
        <div className="p-1 flex  items-center shadow-lg justify-around  gap-2">
            {options.map((option) => (
                <button
                    key={option}
                    className={`px-4 py-2 w-full rounded-md cursor-pointer  border-gray-300 ${    
                        selected === option
                            ? "mainDarkModeBtn text-white"
                            : "bg-[#2D2E41] text-white"
                    }`}
                    onClick={() => setSelected(option)}
                >
                    {option}
                </button>
            ))}
        </div>  
    </div>
  )
}

export default SegmentedControl