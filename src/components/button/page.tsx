interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <>
      <button className="bg-green2 px-4 py-2 p-2 text-sm rounded-2xl font-semibold text-white  duration-300 flex h-fit">
        {text}
      </button>
    </>
  );
};

export default Button;
