import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
  pattern?:string;
  required?:boolean;
  
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type, pattern,required }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        pattern={pattern}
        required={required}
        className="
        block
        rounded-md
        my-2
        px-6
        pt-6
        pb-1
        w-full
        text-3xl
      text-black
      bg-neutral-200
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
        placeholder=" " 
      />
      <label 
        htmlFor={id} 
        className="
        absolute 
        text-lg
      text-zinc-600
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      ">{label}</label>
    </div>
  )
}

export default Input;
