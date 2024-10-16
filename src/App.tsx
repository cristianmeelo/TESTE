import { Footer, Nav } from '@/components';
import { About, Contact, Home, Projects } from '@/pages';
import { useTheme } from '@/context/theme';

export const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <main className={`px-12 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg '}`}>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};
