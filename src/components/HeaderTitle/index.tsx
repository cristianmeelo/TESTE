import { useTheme } from '../../context/theme';

interface HeaderTitleProps {
  level?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  lineWidth?: '1' | '2' | 'full';
  align?: 'left' | 'right' | 'center';
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  level = 'h2',
  children,
  lineWidth = '1',
  align = 'left',
}) => {
  const { isDarkMode } = useTheme();
  const Tag = level;

  return (
    <div className="relative">
      <Tag
        className={`${isDarkMode ? 'text-white' : 'text-black'} text-[30px]`}
      >
        {children}
      </Tag>
      <div
        className={`h-${lineWidth} ${isDarkMode ? 'bg-white' : 'bg-black'} mt-1 ${align === 'left' ? 'w-1/2' : align === 'right' ? 'w-1/2 ml-auto' : 'w-1/2 mx-auto'}`}
      />
    </div>
  );
};
