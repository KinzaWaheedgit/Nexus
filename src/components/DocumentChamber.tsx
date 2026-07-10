import React from 'react';

const DocumentChamber = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Document Processing Chamber</h2>
      
      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-500 p-8 text-center mb-6 rounded">
        <p>Drag & Drop documents here or click to upload</p>
      </div>

      {/* Document List */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Recent Documents</h3>
        <div className="bg-gray-800 p-4 rounded">
          <div className="flex justify-between border-b border-gray-700 py-2">
            <span>Contract_01.pdf</span>
            <span className="text-yellow-400">In Review</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Agreement_Final.pdf</span>
            <span className="text-green-400">Signed</span>
          </div>
        </div>
      </div>

      {/* Signature Area */}
      <div className="border-t border-gray-700 pt-4">
        <h3 className="font-semibold mb-2">E-Signature</h3>
        <div className="h-24 bg-white rounded flex items-center justify-center text-gray-500">
          Sign here (Mockup)
        </div>
      </div>
    </div>
  );
};

export default DocumentChamber;