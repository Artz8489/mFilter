import React from "react";

export function Checkbox({ children,value, checked, name,onChange}) {
  return (
    <>
      <input type="checkbox" style={{ display: "none" }} />
      <label className="checkbox checkbox-lg checkbox-single">
        <input type="checkbox" 
   
        onChange={onChange}  
        value={value}
        name={name}
        checked={checked}
        />
        <span />
        {children}
      </label>
    </>
  );
}
