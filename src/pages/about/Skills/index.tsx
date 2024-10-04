import { Skill } from './Skill';
import { ReactComponent as IconUx } from '../../../assets/icon-ux.svg';
import { ReactComponent as IconDev } from '../../../assets/icon-dev.svg';
import { ReactComponent as IconReact } from '../../../assets/icon-react.svg';
import { ReactComponent as IconBack } from '../../../assets/icon-back.svg';

const skillsData = [
  {
    title: "UI/UX Design",
    description: "Skilled in designing user-friendly interfaces",
    Icon: IconUx,
  },
  {
    title: "Front-End Development",
    description: "Expert in creating responsive interfaces",
    Icon: IconReact,
  },
  {
    title: "Back-End Development",
    description: "Experience in building RESTful APIs",
    Icon: IconDev,
  },
  {
    title: "Version Control",
    description: "Proficient with Git and GitHub",
    Icon: IconBack,
  },
];

export const Skills = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
      {skillsData.map((skill, index) => (
        <Skill
          key={index}
          title={skill.title}
          description={skill.description}
          Icon={skill.Icon}
        />
      ))}
    </div>
  );
};
