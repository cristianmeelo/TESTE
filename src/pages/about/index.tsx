import { HeaderTitle } from '@/components';
import { Description } from './Description';
import { Experiences } from './Experiences';
import { Skills } from './Skills';

export const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col min-h-screen ">
      <div className="flex-grow flex flex-col items-start justify-start pt-12">
        <HeaderTitle level="h3" children="About Me" />
        <Description />
        <Skills />
        <Experiences />
      </div>
      <div className="h-px bg-custom-gray w-full" />
    </section>
  );
};
