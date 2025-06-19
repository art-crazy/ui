import React from 'react';

interface IconProps {
  className?: string;
}

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    width="80" 
    height="80" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM24 40C15.163 40 8 32.837 8 24C8 15.163 15.163 8 24 8C32.837 8 40 15.163 40 24C40 32.837 32.837 40 24 40Z" fill="currentColor"/>
    <path d="M24 16L32 24L24 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 24H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 