import React, { useState } from 'react';

const ToggleContent = ({ contentToShow, buttonText }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleContent}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {buttonText}
      </button>
      {showContent && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded mt-[2rem]">
          <div className="p-4 ">{contentToShow}</div>
        </div>
      )}
    </div>
  );
};

export default ToggleContent;