interface ButtonProps {
  type?: "submit" | "button";
  onClick: () => void;
  name: string;
}

function Button({ type, onClick, name }: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
