import React, { useState } from 'react'


  const options = ["Low", "Medium", "High"];

function SegmentedControl() {
      const [selected, setSelected] = useState("Medium");
  return (
    <div>
        <div className="p-2 flex rounded-full items-center shadow-lg justify-around border borderColor gap-2">
            {options.map((option) => (
                <button
                    key={option}
                    className={`px-7 py-2 rounded-md  border-gray-300 ${    
                        selected === option
                            ? "mainDarkModeBtn text-white"
                            : "bg-white text-gray-800"
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