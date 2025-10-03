const Message = ({ message, type = 'error' }) => {
  const baseStyle = "p-4 rounded-md text-sm mb-4 flex items-center";
  const typeStyles = {
    error: "bg-red-100 text-red-800 border border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    info: "bg-blue-100 text-blue-800 border border-blue-300",
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type]}`}>
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        {type === 'error' && (
          <path
            fillRule="evenodd"
            d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-4a1 1 0 112 0v4a1 1 0 11-2 0V6zm1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            clipRule="evenodd"
          />
        )}
        {type === 'warning' && (
          <path d="M8.257 3.099c.765-1.36 2.681-1.36 3.446 0l6.518 11.605c.75 1.338-.213 2.996-1.723 2.996H3.462c-1.51 0-2.473-1.658-1.723-2.996L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V7a1 1 0 112 0v4a1 1 0 01-1 1z" />
        )}
        {type === 'info' && (
          <path d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-4a1 1 0 112 0v2a1 1 0 11-2 0V6zm1 8a1 1 0 100-2 1 1 0 000 2z" />
        )}
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default Message;