import { useTheme } from "./context/theme"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Home } from "./pages/home"
import { Projects } from "./pages/projects"

export const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <main className={`px-12 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg '}`}>
      <Home />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

