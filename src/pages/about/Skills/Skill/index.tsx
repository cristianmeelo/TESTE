import { useTheme } from "../../../../context/theme";

interface SkillProps {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Skill: React.FC<SkillProps> = ({ title, description, Icon }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex items-center rounded-lg p-2  ${isDarkMode ? 'bg-gray-700' : 'bg-white border border-slate-300'}`}>
      <Icon className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} />
      <div className={`border-l-2 h-10 mx-2 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`} />
      <div className="flex flex-col">
        <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{title}</h2>
        <span className={`text-gray-400 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{description}</span>
      </div>
    </div>
  );
};
