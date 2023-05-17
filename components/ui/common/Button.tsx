interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "text-white bg-indigo-600 hover:bg-indigo-700",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer px-8 py-3 border text-base font-medium rounded-md ${className}`}
    >
      {children}
    </button>
  );
};
