import { useTheme } from '../../context/theme'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export const Home = () => {
  const { toggleDarkMode, isDarkMode } = useTheme()

  return (
    <div
      className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}
    >
      <div className={'absolute left-0 right-0 top-0 h-1 bg-dark-bg'} />
      <Header />
      <div className="flex-grow flex items-center justify-center mb-10">
        <h1 className="font-dotgothic text-2xl text-center ">
          front-end.web(developer)<span className="animate-pulse">__</span>
        </h1>
      </div>
      <div className="h-px bg-custom-gray w-full" />
      <div className="fixed bottom-4 right-4 transform -rotate-90 -translate-y-12">
        <Button onClick={toggleDarkMode} ariaLabel="Toggle dark mode">
          Dark Mode.
        </Button>
      </div>
    </div>
  )
}
