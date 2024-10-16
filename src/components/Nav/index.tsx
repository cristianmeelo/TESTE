import { Button } from '@/components/Button';
import { useTheme } from '@/context/theme';

export const Nav: React.FC = () => {
  const { isDarkMode } = useTheme();

  const handleNavigation = (page: string): void => {
    window.location.hash = page;
  };

  return (
    <section className={`fixed -left-20 top-1/2 transform -rotate-90 ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}>
      <nav className="flex flex-row items-center space-x-4 ">
        <Button
          onClick={() => handleNavigation('contact')}
          ariaLabel="Go to Contact"
        >
          Contact
        </Button>
        <Button
          onClick={() => handleNavigation('projects')}
          ariaLabel="Go to Projects"
        >
          Projects
        </Button>
        <Button
          onClick={() => handleNavigation('about')}
          ariaLabel="Go to About"
        >
          About
        </Button>
        <Button
          onClick={() => handleNavigation('home')}
          ariaLabel="Go to Home"
        >
          Home
        </Button>
      </nav>
    </section>
  );
};
