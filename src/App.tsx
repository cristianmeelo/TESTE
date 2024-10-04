import { useTheme } from './context/theme'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Home } from './pages/home'
import { Projects } from './pages/projects'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

export const App = () => {
  const { isDarkMode } = useTheme()

  return (
    <main className={`px-12 ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg '}`}>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
