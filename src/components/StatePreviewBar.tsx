import React from 'react';
import { ReleaseStatus, DropCollectionConfig } from '../config/dropConfig';

interface StatePreviewBarProps {
  currentStatus: ReleaseStatus;
  onChangeStatus: (status: ReleaseStatus) => void;
  config: DropCollectionConfig;
  onUpdateTestPrice: (price: number | null) => void;
  onPlayClick: () => void;
}

export const StatePreviewBar: React.FC<StatePreviewBarProps> = ({
  currentStatus,
  onChangeStatus,
  onPlayClick
}) => {
  return (
    <div className="bg-zinc-950 p-2 text-xs font-mono flex items-center justify-between border-b border-zinc-800">
      <span>STATE: {currentStatus}</span>
      <button 
        onClick={() => {
          onPlayClick();
          onChangeStatus('coming_soon');
        }}
        className="px-2 py-0.5 bg-zinc-800"
      >
        Coming Soon
      </button>
    </div>
  );
};
