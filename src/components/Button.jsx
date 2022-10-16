export const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="transition-all text-white w-full bg-very-dark-violet rounded-lg hover:text-very-dark-violet border-[2px] hover:bg-transparent hover:border-very-dark-violet  p-4 mt-6"
    >
      {children}
    </button>
  );
};
