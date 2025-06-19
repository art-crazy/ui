import React from 'react';

interface IconProps {
  className?: string;
}

export const CopyIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24"
    className={className}
  >
    <path 
      fill="currentColor" 
      d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
    />
  </svg>
); 