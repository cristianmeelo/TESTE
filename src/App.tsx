import { NavigationProvider } from "./context/navigation"
import { useTheme } from "./context/theme"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Home } from "./pages/home"
import { Projects } from "./pages/projects"
import { Nav } from "./components/Nav"

export const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <NavigationProvider>
      <main className={`px-12 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg '}`}>
        <Nav />
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </NavigationProvider>

  )
}

