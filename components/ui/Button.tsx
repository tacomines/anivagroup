export const Button = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      className="bg-black text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
};