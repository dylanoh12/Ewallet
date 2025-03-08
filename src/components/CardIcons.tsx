import React from 'react';

interface IconProps {
  className?: string;
}

export const VisaIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44.688 0.725H41.684L38.442 10.725H41.446L44.688 0.725ZM34.802 0.725L32.004 7.421L30.795 1.627C30.599 0.921 30.063 0.725 29.429 0.725H24.673L24.575 1.039C25.601 1.235 26.725 1.578 27.357 1.97C27.749 2.215 27.847 2.46 27.994 2.97L30.063 10.725H33.167L37.727 0.725H34.802Z" fill="currentColor"/>
    <path d="M21.748 0.725H18.842L15.6 10.725H18.506L21.748 0.725ZM13.629 0.725L10.606 7.47L9.482 2.117C9.335 1.411 8.799 0.725 8.066 0.725H3.31L3.212 1.039C4.238 1.235 5.362 1.578 5.994 1.97C6.386 2.215 6.484 2.46 6.631 2.97L8.7 10.725H11.804L16.364 0.725H13.629Z" fill="currentColor"/>
  </svg>
);

export const MastercardIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#EB001B"/>
    <circle cx="32" cy="16" r="16" fill="#F79E1B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24 28.4C28.3019 25.8 31.2 21.2137 31.2 16C31.2 10.7863 28.3019 6.2 24 3.6C19.6981 6.2 16.8 10.7863 16.8 16C16.8 21.2137 19.6981 25.8 24 28.4Z" fill="#FF5F00"/>
  </svg>
);