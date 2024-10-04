import React from 'react'
import { useNavigation } from '../../context/navigation'
import { Button } from '../Button'

export const Nav: React.FC = () => {
  const { setCurrentPage } = useNavigation()

  const handleNavigation = (page: string): void => {
    setCurrentPage(page)
  }

  return (
    <div className="fixed -left-20 top-1/2 transform -rotate-90">
      <nav className="flex flex-row items-center space-x-4">
        <Button
          onClick={() => handleNavigation('home')}
          ariaLabel="Go to Home"
          isLight
        >
          Home
        </Button>
        <Button
          onClick={() => handleNavigation('about')}
          ariaLabel="Go to About"
          isLight
        >
          About
        </Button>
        <Button
          onClick={() => handleNavigation('projects')}
          ariaLabel="Go to Projects"
          isLight
        >
          Projects
        </Button>
        <Button
          onClick={() => handleNavigation('contact')}
          ariaLabel="Go to Contact"
          isLight
        >
          Contact
        </Button>
      </nav>
    </div>
  )
}
