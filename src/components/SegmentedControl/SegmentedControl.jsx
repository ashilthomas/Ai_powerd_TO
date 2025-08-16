import React, { useState, useCallback, useMemo } from 'react'

const SegmentedControl = React.memo(function SegmentedControl({ value, onChange }) {
  // Use provided value or default to "Medium"
  const [selected, setSelected] = useState(value || "Medium");
  
  // Memoize options array
  const options = useMemo(() => ["Low", "Medium", "High"], []);
  
  // Memoize the click handler
  const handleOptionClick = useCallback((option) => {
    setSelected(option);
    // If onChange prop is provided, call it with the selected option
    if (onChange) {
      onChange(option);
    }
  }, [onChange]);
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
                    onClick={() => handleOptionClick(option)}
                >
                    {option}
                </button>
            ))}
        </div>  
    </div>
  )
})

export default SegmentedControl