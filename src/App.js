import React from 'react';
import ToggleContent from './Components/ToggleContent'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Toggle Content Example</h1>
      <ToggleContent
        contentToShow={<p className="text-gray-800">This is the content to show/hide.</p>}
        buttonText="Toggle Content"
      />
    </div>
  );
};

export default App;
