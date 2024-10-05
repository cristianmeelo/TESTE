import React from 'react';

interface ButtonProps {
  isLight?: boolean;
  isBold?: boolean;
  isExtraBold?: boolean;
  fontSize?: '14px' | '18px';
  underlineFirstLine?: boolean;
  underlineHeight?: 'px' | '1' | '2';
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}

export const Button: React.FC<ButtonProps> = ({
  isLight = false,
  isBold = false,
  isExtraBold = false,
  fontSize = '14px',
  underlineFirstLine = false,
  underlineHeight = '2',
  children,
  onClick,
  ariaLabel,
}) => {
  const baseClasses =
    'bg-transparent border-none cursor-pointer transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-900';
  const fontWeightClass = isExtraBold
    ? 'font-extrabold'
    : isBold
      ? 'font-bold'
      : isLight
        ? 'font-light'
        : 'font-normal';
  const textSizeClass = fontSize === '18px' ? 'text-[18px]' : 'text-[14px]';

  return (
    <div className="relative flex flex-col items-start">
      <button
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${baseClasses} ${fontWeightClass} ${textSizeClass} hover:text-emerald-900 hover:scale-105 focus-visible:ring-2 focus-visible:ring-emerald-900 focus:shadow-lg focus:scale-105`}
      >
        {children}
      </button>
      {underlineFirstLine && (
        <div className={`w-1/6 h-${underlineHeight} bg-black mt-1`} />
      )}
    </div>
  );
};
