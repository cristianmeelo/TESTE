import { useTheme } from '../../context/theme';

export const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`flex justify-between items-center pt-28 font-manrope ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}
    >
      <span className="text-[36px]" aria-label="Nome do usuário">
        cristian melo.
      </span>
      <span className="text-custom-gray-80">
        design inspired in Oliveira M. & coding by <strong>me</strong>
      </span>
    </footer>
  );
};
