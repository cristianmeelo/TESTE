import { useTheme } from '../../../context/theme';
import { Badge } from '../../../components/Badge';
import avatarImg from '/images/avatar.png';

export const Description: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-8 mt-10 rounded-lg shadow-sm md:justify-center md:p-12`}
    >
      <img
        src={avatarImg}
        alt="Avatar"
        className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
      />
      <div className="flex flex-col flex-grow">
        <h2 className={`text-[30px] font-medium text-center md:text-left ${isDarkMode ? 'text-white' : 'text-black'}`}>Cristian Melo</h2>
        <p className={`text-[14px] font-extralight text-center md:text-left ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
          I am a Front-End developer who enjoys creating impactful experiences for users. With expertise in React and interface design, I strive to develop robust applications that prioritize usability and efficiency. I have a keen eye for detail and empathy for the user. My experience includes projects that promote innovative solutions. Today, I work on projects worldwide, coding from my home office in the metropolitan area of Porto Alegre, Brazil.
        </p>
        <div className="mt-4 flex flex-wrap gap-2"> {/* Alterado aqui */}
          <Badge text="React" />
          <Badge text="JavaScript" />
          <Badge text="Tailwind CSS" />
          <Badge text="Next.js" />
          <Badge text="SASS" />
          <Badge text="Git" />
        </div>
      </div>
    </div>
  );
};
