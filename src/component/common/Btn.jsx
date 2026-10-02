import React from 'react'

const Btn = ({ children }) => {
  return (
    <button className=" px-9 py-3.5 rounded-[10px] bg-primary ">
        {children}
    </button>
  );
}

export default Btn
