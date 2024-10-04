import { useState, useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import url from '/audio/aboutme.mp3'
import { Button } from '../Button'
import { useTheme } from '../../context/theme'

export const Header = () => {
  const { isDarkMode } = useTheme()
  const [showPlayer, setShowPlayer] = useState(false)
  const audioPlayer = useRef(null)

  const togglePlayer = () => {
    setShowPlayer((prev) => !prev)
  }

  return (
    <header
      className={`flex justify-between items-center pt-12 font-manrope ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}
    >
      <span className="text-[36px]" aria-label="Nome do usuário">
        cristian melo.
      </span>
      <div
        aria-label="Texto descritivo adicional"
        className="flex items-center"
      >
        <Button
          ariaLabel={showPlayer ? 'Closes the audio' : 'Listen about him'}
          onClick={togglePlayer}
          underlineFirstLine={!showPlayer}
          underlineHeight="1"
        >
          {showPlayer ? 'Ok,thanks' : 'Wanna hear about me?'}
        </Button>
        {showPlayer && (
          <div className={`absolute right-8 z-10 mt-20 bg-transparent`}>
            <ReactAudioPlayer
              src={url}
              controls
              ref={audioPlayer}
              style={{ padding: '12px' }}
            />
          </div>
        )}
      </div>
    </header>
  )
}
