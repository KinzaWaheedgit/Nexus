import React from 'react';

const VideoCsll = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Video Call Session</h2>
      
      {/* Video Placeholder */}
      <div className="w-full h-64 bg-gray-700 flex items-center justify-center mb-4 rounded">
        <span>Video Stream Placeholder</span>
      </div>

      {/* Controls */}
      <div className="flex gap-4 justify-center">
        <button className="bg-green-600 px-4 py-2 rounded">Start Call</button>
        <button className="bg-red-600 px-4 py-2 rounded">End Call</button>
        <button className="bg-blue-600 px-4 py-2 rounded">Video On/Off</button>
        <button className="bg-blue-600 px-4 py-2 rounded">Audio On/Off</button>
      </div>
    </div>
  );
};

export default VideoCsll;