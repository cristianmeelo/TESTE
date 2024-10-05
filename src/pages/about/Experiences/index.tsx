import { Experience } from './Experience';

const experiencesData = [
  {
    title: 'Front-End Developer',
    descriptions: [
      'Responsive Web Apps',
      'Code Reviews',
      'React & Next.js',
      'Styled-Components & Emotion',
      'SASS, Bootstrap & Ant Design',
      'Testing with Jest & React Testing Library',
      'Storybook for Documentation',
    ],
  },
  {
    title: 'Back-End Developer',
    descriptions: [
      'RESTful APIs',
      'MongoDB',
      'MySQL',
      'Node.js & Express',
      'Server Management',
      'API Integration',
      'Docker for Containerization',
    ],
  },
  {
    title: 'UI/UX Designer',
    descriptions: [
      'User Interface Design',
      'Usability Testing',
      'Design Implementation',
      'Prototyping & Wireframing',
      'Collaborative Teamwork',
      'Figma for Prototyping',
      'Design System Principles',
    ],
  },
];

export const Experiences = () => {
  return (
    <div className="w-full flex flex-wrap">
      {experiencesData.map((experience, index) => (
        <div className="w-full md:w-1/3 p-2" key={index}>
          <Experience
            title={experience.title}
            descriptions={experience.descriptions}
          />
        </div>
      ))}
    </div>
  );
};
