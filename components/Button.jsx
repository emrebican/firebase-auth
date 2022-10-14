import React from 'react';

const Button = ({ text, click, icon, bg, hover }) => {
  return (
    <button
      onClick={click}
      className={`flex items-center gap-2 ${bg} text-white p-2 rounded-sm hover:shadow-xl shadow-black ${hover} text-lg px-4 w-full`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
