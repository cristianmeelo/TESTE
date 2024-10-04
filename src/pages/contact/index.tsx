import { HeaderTitle } from "../../components/HeaderTitle";
import { useTheme } from "../../context/theme";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`flex flex-col h-96 py-16 ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}
      aria-labelledby="contact-heading"
    >
      <div className="flex-grow flex items-start justify-center">
        <HeaderTitle level="h4" children="contact me" align="center" />
      </div>

      <ul className="flex justify-center py-16  space-x-6 list-none" role="list" aria-label="Redes Sociais">
        <li>
          <a
            href="https://github.com/cristianmeelo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <FaGithub
              className={`text-4xl ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
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
              className={`text-4xl ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
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
            className="focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <FaWhatsapp
              className={`text-4xl ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
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
              className={`text-4xl ${isDarkMode ? 'text-dark-text' : 'text-black'}`}
              aria-hidden="true"
              focusable="false"
            />
          </a>
        </li>
      </ul>

      <div className={`h-px w-full mt-4 ${isDarkMode ? 'bg-dark-text' : 'bg-custom-gray'}`} />
    </section>
  );
};
