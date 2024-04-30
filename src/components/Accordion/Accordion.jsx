import React, { useState } from 'react';

const Accordion = () => {
  const [activeTab, setActiveTab] = useState('painting');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-center mb-12">
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#322760]'>Painting and <span className='text-[#c54899]'>Drawing</span> <span className='text-gray-500'>Supplies</span></h1>
      <div className="flex mb-4 justify-center text-xl">
        <button
          className={`${
            activeTab === 'painting' ? 'bg-[#322760]' : 'bg-gray-500'
          } text-white px-8 py-4 mr-10 font-bold rounded`}
          onClick={() => handleTabChange('painting')}
        >
          Painting
        </button>
        <button
          className={`${
            activeTab === 'drawing' ? 'bg-[#322760]' : 'bg-gray-500'
          } text-white px-8 py-4 mr-10 font-bold rounded`}
          onClick={() => handleTabChange('drawing')}
        >
          Drawing
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 'painting' && (
          <div>
            <h2 className="text-3xl font-bold mb-2 text-[#c54899]">Painting Supplies</h2>
            <ul className='border bg-[#c54899] bg-opacity-20 w-1/2 mx-auto rounded-2xl mt-5 py-5 text-xl font-semibold text-black'>
              <li>Acrylic Paints</li>
              <li>Oil Paints</li>
              <li>Watercolor Paints</li>
              <li>Canvas</li>
              <li>Paint Brushes</li>
              <li>Palette Knives</li>
            </ul>
          </div>
        )}
        {activeTab === 'drawing' && (
          <div>
            <h2 className="text-3xl font-bold mb-2 text-[#c54899]">Drawing Supplies</h2>
            <ul className='border bg-[#c54899] bg-opacity-20 w-1/2 mx-auto rounded-2xl mt-5 py-5 text-xl font-semibold text-black'>
              <li>Pencils</li>
              <li>Charcoal</li>
              <li>Ink Pens</li>
              <li>Sketchbooks</li>
              <li>Erasers</li>
              <li>Drawing Boards</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
