import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaDownload,
} from 'react-icons/fa';
import { HeaderTitle } from '@/components';
import { useTheme } from '@/context/theme';

export const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="contact"
      className={`flex flex-col h-96 pt-16 hover:text-emerald-500 ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}
      aria-labelledby="contact-heading"
    >
      <div className="flex-grow flex items-start justify-center">
        <HeaderTitle level="h4" children="contact me" align="center" />
      </div>
      <ul
        className="flex justify-center py-16 pb-20 space-x-6 list-none"
        role="list"
        aria-label="Redes Sociais"
      >
        <li>
          <a
            href="https://github.com/cristianmeelo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <FaGithub
              className={`text-4xl hover:text-emerald-900 hover:scale-105 ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
              aria-hidden="true"
              focusable="false"
            />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/cristian-melo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <FaLinkedin
              className={`text-4xl hover:text-emerald-900 hover:scale-105 ${isDarkMode ? 'text-dark-text' : 'text-black hover:text-black-700'}`}
              aria-hidden="true"
              focusable="false"
            />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+5551986275006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="focus-visible:ring-2 focus-visible:ring-emerald-900"
          >
            <FaWhatsapp
              className={`text-4xl hover:text-emerald-900 hover:scale-105 ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
              aria-hidden="true"
              focusable="false"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:cristianmeelo@gmail.com"
            aria-label="Gmail"
            className="focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <FaEnvelope
              className={`text-4xl hover:text-emerald-900 hover:scale-105 ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
              aria-hidden="true"
              focusable="false"
            />
          </a>
        </li>
      </ul>
      <div className="flex flex-row w-full items-center justify-center hover:text-emerald-900 hover:scale-105">
        <a
          href="/documents/curriculum-cristian-melo-frontend-react.pdf"
          download="curriculum-cristian-melo-frontend-react.pdf"
          className={`flex items-center px-4 py-2  ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
        >
          download CV
          <FaDownload
            className={`ml-2  ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
          />
        </a>
      </div>
      <div
        className={`h-px w-full mt-8  ${isDarkMode ? 'bg-dark-text' : 'bg-custom-gray'}`}
      />
    </section>
  );
};
