import React from "react";

function ReusableInput({
  type,
  placeholder,
  onChange,
  value,
  name,
  disabled,
  required,
  icon: Icon // pass the icon component here
}) {
  return (
    <div className="flex items-center shadow-lg border borderColor  p-3 rounded-full relative w-full">
      <input
        type={type}
        name={name}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border-0 rounded outline-none flex-1 pr-8 bg-transparent"
      />
      {Icon && <Icon className="absolute right-4 text-blue-500 cursor-pointer" size={20} />}
    </div>
  );
}

export default ReusableInput;
