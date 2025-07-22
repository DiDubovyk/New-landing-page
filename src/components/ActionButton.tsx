import React from "react";

const ActionButton: React.FC = () => {
  return (
    <>
      <button className="mt-10 font-dmsans text-[25px] inline-flex items-center bg-white text-gray-900 text-lg px-10 py-5 rounded-full shadow">
        <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mr-10" />
        Get in Touch
      </button>
    </>
  );
};
export default ActionButton;
