import { useTheme } from '@/context/theme';

interface ExperienceProps {
  title: string;
  descriptions: string[];
}

export const Experience: React.FC<ExperienceProps> = ({
  title,
  descriptions,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex rounded-lg p-4 border  ${isDarkMode ? 'bg-gray-700' : 'bg-white border border-slate-300'}`}
    >
      <div
        className={`border-l-2 h-full mx-2 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}
      />
      <div className="flex flex-col flex-grow">
        <h2
          className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}
        >
          {title}
        </h2>
        <div className="mt-2">
          {descriptions.map((desc, index) => (
            <span
              key={index}
              className={`text-gray-400 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} block`}
            >
              {desc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
