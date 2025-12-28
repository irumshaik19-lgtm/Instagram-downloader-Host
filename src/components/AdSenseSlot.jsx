import React from 'react';

const AdSenseSlot = ({ slot, format = 'auto', style = {} }) => {
  return (
    <div className="adsense-container my-6 flex justify-center">
      <div 
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center"
        style={{ minHeight: '100px', minWidth: '300px', ...style }}
      >
        <p className="text-slate-400 text-sm">Advertisement Space</p>
        <p className="text-slate-500 text-xs mt-1">AdSense Slot: {slot}</p>
      </div>
    </div>
  );
};

export default AdSenseSlot;
