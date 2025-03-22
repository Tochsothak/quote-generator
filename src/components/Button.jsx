const Button = ({ text, onClick, color = "bg-blue-500", className = "" }) => {
    return (
      <button
        onClick={onClick}
        className={`${color} text-white text-sm px-6 font-bold py-3 rounded-lg shadow-md hover:opacity-90 transition ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  