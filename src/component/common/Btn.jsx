const Btn = ({ children, className = "" }) => {
  return (
    <button className={`${className} px-9 py-3.5 rounded-[10px] bg-primary`}>
      {children}
    </button>
  );
};

export default Btn;
