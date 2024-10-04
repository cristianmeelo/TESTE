interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="relative inline-flex items-center">
      <span className="relative px-3 py-1 text-sm font-medium bg-gray-300 text-gray-800 rounded-lg dark:bg-gray-600 dark:text-gray-200">
        {text}
        <span className="absolute -top-2 -right-1 h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
        </span>
      </span>
    </div>
  );
};
